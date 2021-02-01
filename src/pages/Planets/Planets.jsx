import React, { useEffect } from "react";
import { connect } from "react-redux";
import AddForm from "../../components/AddForm";
import Container from "../../components/Container";
import Preloader from "../../components/Preloader";
import {
  getPlanets,
  deletePlanet,
  getPlanetInfo,
  addPlanet,
} from "../../redux/reducers/planets-reducer";
import Card from "./../../components/Card";
import PropTypes from "prop-types";
import planetsImages from "../../assets/images/planets/planets-images";
import Paginator from "../../components/Paginator";
import QueryString from "qs";

const Planets = ({
  planets,
  getPlanets,
  isFetchingPlanets,
  deletePlanet,
  addPlanet,
  planetsTotalCount,
  pageSize,
  getPlanetInfo,
  isFetchingPlanetsInfo,
  ...restProps
}) => {
  const currentPage = QueryString.parse(restProps.location.search, {
    ignoreQueryPrefix: true,
  }).page?.toString();
  if (!currentPage) {
    restProps.history.push("/planets?page=1");
  }
  useEffect(() => {
    getPlanets(currentPage);
  }, [restProps.location.search]);

  const onPageChanged = (page) => {
    restProps.history.push("/planets?page=" + page);
  };

  const planetsList = planets.map((planet) => (
    <Card
      image={planetsImages[planet.name] || planetsImages.noImage}
      key={planet.name}
      title={planet.name}
      description={{
        diameter: planet.diameter,
        climate: planet.climate,
        gravity: planet.gravity,
      }}
      url={planet.url || null}
      deleteFunc={deletePlanet}
      getInfo={getPlanetInfo}
      isFetchingItemsInfo={isFetchingPlanetsInfo}
    />
  ));

  return (
    <Container>
      {isFetchingPlanets ? (
        <Preloader />
      ) : (
        <>
          {planets.length > 0 ? <h1>Planets:</h1> : null}
          {planetsList}
          {planetsTotalCount > 10 && (
            <Paginator
              currentPage={Number(currentPage)}
              totalCount={planetsTotalCount}
              pageSize={pageSize}
              onPageSelect={onPageChanged}
            />
          )}
          <AddForm
            addFunc={addPlanet}
            title="planet"
            fields={["title", "diameter", "climate", "gravity"]}
          />
        </>
      )}
    </Container>
  );
};
Planets.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
    })
  ),
  planetsTotalCount: PropTypes.number,
  pageSize: PropTypes.number.isRequired,
  isFetchingPlanets: PropTypes.bool.isRequired,
  isFetchingPlanetsInfo: PropTypes.arrayOf(PropTypes.string),
  getPlanets: PropTypes.func,
  deletePlanet: PropTypes.func,
  addPlanet: PropTypes.func,
  getPlanetInfo: PropTypes.func,
};
const mapStateToProps = (state) => ({
  planets: state.planetsPage.planets,
  planetsTotalCount: state.planetsPage.planetsTotalCount,
  pageSize: state.planetsPage.pageSize,
  isFetchingPlanets: state.planetsPage.isFetchingPlanets,
  isFetchingPlanetsInfo: state.planetsPage.isFetchingPlanetsInfo,
});
export default connect(mapStateToProps, {
  getPlanets,
  deletePlanet,
  addPlanet,
  getPlanetInfo,
})(Planets);
