"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// true sau khi hydrate xong ở client, false khi render phía server.
// Thay cho mẫu useEffect(() => setMounted(true)) mà rule
// react-hooks/set-state-in-effect chặn (gây thêm một lần render).
export function useMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
