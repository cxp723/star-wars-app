import { useEffect } from 'react';

function useInfo(getInfoFunc, isFetched, title, url) {
  useEffect(() => {
    if (isFetched) getInfoFunc(title, url);
  }, []);
}

export default useInfo;
