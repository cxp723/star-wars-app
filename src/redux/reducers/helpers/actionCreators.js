export const getItemsThunkCreator = (
  apiMethod,
  setMethod,
  toggleFetchingMethod,
  setErrorMethod,
) => (page) => async (dispatch) => {
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
            }
            return {
              name: item.name,
              url: item.url,
            };
          }),
          count: items.count,
        }),
      );
    }
  } catch (e) {
    dispatch(setErrorMethod({ fetchingDataError: e.toString() }));
  }
  dispatch(toggleFetchingMethod({ isFetchingItems: false }));
};

export const getItemInfoThunkCreator = (apiMethod, addMethod, toggleFetchingMethod) => ({
  title,
  url,
}) => async (dispatch) => {
  try {
    dispatch(toggleFetchingMethod({ title }));
    const itemInfo = await apiMethod(url);
    dispatch(addMethod({ item: itemInfo }));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Error on server: ', e);
  }
  dispatch(toggleFetchingMethod({ title }));
};
