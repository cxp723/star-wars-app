const planetsSelector = (state) => state.planetsPage.planets;
const isFetchingPlanetsSelector = (state) => state.planetsPage.isFetchingPlanets;
const isFetchingPlanetsInfoSelector = (state) => state.planetsPage.isFetchingPlanetsInfo;
const pageSizeSelector = (state) => state.planetsPage.pageSize;
const planetsTotalCountSelector = (state) => state.planetsPage.planetsTotalCount;
const errorsSelector = (state) => state.planetsPage.errors;

export default (state) => ({
  planets: planetsSelector(state),
  isFetchingPlanets: isFetchingPlanetsSelector(state),
  isFetchingPlanetsInfo: isFetchingPlanetsInfoSelector(state),
  pageSize: pageSizeSelector(state),
  planetsTotalCount: planetsTotalCountSelector(state),
  errors: errorsSelector(state),
});
