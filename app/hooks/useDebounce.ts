/* eslint-disable no-unused-vars */
import { useCallback, useRef, useEffect } from 'react';

type Timer = ReturnType<typeof setTimeout>;

export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  const timer = useRef<Timer | null>(null);

  const debouncedFunction = useCallback(
    (...args: Parameters<T>) => {
      // 清除之前的定时器
      if (timer.current) {
        clearTimeout(timer.current);
      }

      // 设置新的定时器
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay] 
  );

  // 清理定时器：在组件卸载时清理定时器，避免内存泄漏
  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []); 
  return debouncedFunction;
}
