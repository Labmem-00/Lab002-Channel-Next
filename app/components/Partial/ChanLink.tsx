import { isExtLink } from '@/utils/links';
import Link, { LinkProps } from 'next/link';
import React from 'react';

/**
 * `ChanLink` 组件，扩展了`Link`组件，可用于渲染可选的外部链接
 * @param {string} [to] - 链接的目标地址。如果提供，则渲染为 `Link` 组件，否则渲染为 `span` 元素。
*/

interface ChanLinkProps extends Omit<LinkProps, 'href'> {
  to: string;
  children?: React.ReactNode;
}

const ChanLink: React.FC<ChanLinkProps> = ({ to, children, ...props }) => {
  const isExternal = to ? isExtLink(to) : false;
  if (to) {
    return (
      <Link
        {...props}
        href={to}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    );
  } else {
    return <span>{children}</span>;
  }
};

export default ChanLink;
