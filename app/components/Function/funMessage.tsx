import ChanMessage from '../Chan/Message/ChanMessage';
import { messageCN } from '@/error/chanMessage';
import { createRoot } from 'react-dom/client';

type MessageType = `warn` | `success` | `error` | `info`;

let currentContainer: HTMLDivElement | null = null; // 用来存储当前消息的容器
let currentRoot: ReturnType<typeof createRoot> | null = null; // 用来存储 React 根节点
// eslint-disable-next-line no-unused-vars, no-undef
let timeout: NodeJS.Timeout | null = null; // 定时器

export const funMessage = (
  messageData: string | number,
  type: MessageType,
  duration?: number,
  richText?: boolean
) => {
  let message: string;

  if (typeof messageData === 'number') {
    message = messageCN[messageData];
  } else {
    message = messageData;
  }

  // 如果已有容器，则清除其内容并更新
  if (currentContainer) {
    if (currentRoot) {
      currentRoot.unmount(); // 卸载旧的 React 渲染内容
    }
  } else {
    // 如果当前容器不存在，则创建一个新的容器
    currentContainer = document.createElement('div');
    document.body.appendChild(currentContainer); // 将容器添加到 body 中
  }

  // 使用 React 渲染新消息
  currentRoot = createRoot(currentContainer);
  currentRoot.render(
    <ChanMessage
      message={message}
      type={type}
      richText={richText}
    ></ChanMessage>
  );

  // 如果已有定时器，先清除
  if (timeout) {
    clearTimeout(timeout);
  }

  // 设置新的定时器
  const time = duration || 3000;
  timeout = setTimeout(() => {
    // 卸载当前消息并移除容器
    if (currentContainer && currentContainer.parentNode === document.body) {
      currentRoot?.unmount();
      document.body.removeChild(currentContainer);
    }

    currentContainer = null; // 清空当前容器
    currentRoot = null; // 清空 React 渲染根节点
  }, time);
};
