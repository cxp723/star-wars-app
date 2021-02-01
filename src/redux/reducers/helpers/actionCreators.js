export const getItemsThunkCreator = (
  apiMethod,
  setMethod,
  toggleFetchingMethod
) => {
  return (page) => {
    return async (dispatch) => {
      dispatch(toggleFetchingMethod(true));
      const items = await apiMethod(page);
      dispatch(
        setMethod(
          items.results.map((item) => {
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
          items.count
        )
      );
      dispatch(toggleFetchingMethod(false));
    };
  };
};

export const getItemInfoThunkCreator = (
  apiMethod,
  addMethod,
  toggleFetchingMethod
) => {
  return (id, url) => {
    return async (dispatch) => {
      dispatch(toggleFetchingMethod(id));
      const filmInfo = await apiMethod(url);
      dispatch(addMethod(filmInfo));
      dispatch(toggleFetchingMethod(id));
    };
  };
};
