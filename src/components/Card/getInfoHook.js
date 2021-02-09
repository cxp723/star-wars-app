import { useEffect } from "react";

export function useInfo(getInfoFunc, isFetched, title, url) {
  useEffect(() => {
    if (isFetched) getInfoFunc(title, url);
  }, []);
}
