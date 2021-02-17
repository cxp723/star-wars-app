export const planetsSelector = (state) => state.planetsPage.planets;
export const isFetchingPlanetsSelector = (state) => state.planetsPage.isFetchingPlanets;
export const isFetchingPlanetsInfoSelector = (state) => state.planetsPage.isFetchingPlanetsInfo;
export const pageSizeSelector = (state) => state.planetsPage.pageSize;
export const planetsTotalCountSelector = (state) => state.planetsPage.planetsTotalCount;
export const planetsStateSelector = (state) => ({
  planets: planetsSelector(state),
  isFetchingPlanets: isFetchingPlanetsSelector(state),
  isFetchingPlanetsInfo: isFetchingPlanetsInfoSelector(state),
  pageSize: pageSizeSelector(state),
  planetsTotalCount: planetsTotalCountSelector(state),
});
