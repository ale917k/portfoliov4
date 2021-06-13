import { useEffect, useRef, useState } from "react";

/**
 * Observe element with Intersection Observer API
 * @param {object} options - Intersection Observer optional options - { root, rootMargin, threshold }
 * @returns {tuple} [ref, entry] tuple with ref for observing element and entry with intersection object
 */
export const useIntersect = (
  options: IntersectionObserverInit = {},
): [(node: HTMLDivElement | null) => void, IntersectionObserverEntry | null] => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<HTMLElement | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(([newEntry]) => setEntry(newEntry), options);

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => {
      currentObserver.disconnect();
    };
  }, [node]);

  return [setNode, entry];
};

export default useIntersect;
