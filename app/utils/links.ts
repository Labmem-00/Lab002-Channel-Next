const noRouterExtensions = [
  '.css',
  '.csv',
  '.gif',
  '.ico',
  '.jpg',
  '.js',
  '.json',
  '.opml',
  '.png',
  '.svg',
  '.txt',
  '.xml',
];

export const isExtLink = (url?: string) => {
  if (!url) return false;

  return (
    url.includes(':') || noRouterExtensions.some((ext) => url.endsWith(ext))
  );
};
