export const getItemsThunkCreator = (
  apiMethod,
  setMethod,
  toggleFetchingMethod,
  setErrorMethod
) => {
  return (page) => {
    return async (dispatch) => {
      dispatch(toggleFetchingMethod({ isFetchingItems: true }));
      try {
        const items = await apiMethod(page);
        if (items) {
          dispatch(
            setMethod({
              items: items.results.map((item) => {
                if (item.title) {
                  return {
                    title: item.title,
                    url: item.url,
                  };
                } else
                  return {
                    name: item.name,
                    url: item.url,
                  };
              }),
              count: items.count,
            })
          );
        }
      } catch (e) {
        dispatch(setErrorMethod({ fetchingDataError: e.toString() }));
      }
      dispatch(toggleFetchingMethod({ isFetchingItems: false }));
    };
  };
};

export const getItemInfoThunkCreator = (
  apiMethod,
  addMethod,
  toggleFetchingMethod
) => {
  return (title, url) => {
    return async (dispatch) => {
      dispatch(toggleFetchingMethod({ title }));
      const itemInfo = await apiMethod(url);
      dispatch(addMethod({ item: itemInfo }));
      dispatch(toggleFetchingMethod({ title }));
    };
  };
};
