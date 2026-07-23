import { useCallback, useEffect, useRef, useState } from "react";

export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const isDev = process.env.NODE_ENV === "development";

  const copy = useCallback(
    async (text) => {
      try {
        if (!isDev) {
          await navigator.clipboard.writeText(text);
        }

        setCopied(true);

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setCopied(false);
        }, timeout);

        return true;
      } catch (error) {
        console.error("Failed to copy:", error);
        return false;
      }
    },
    [isDev, timeout]
  );

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return { copied, copy };
}
