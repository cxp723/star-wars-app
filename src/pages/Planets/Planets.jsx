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

const Planets = ({
  planets,
  getPlanets,
  isFetchingPlanets,
  deletePlanet,
  addPlanet,
  getPlanetInfo,
  isFetchingPlanetsInfo,
}) => {
  useEffect(() => {
    getPlanets();
  }, []);

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
  isFetchingPlanets: PropTypes.bool.isRequired,
  isFetchingPlanetsInfo: PropTypes.arrayOf(PropTypes.string),
  getPlanets: PropTypes.func,
  deletePlanet: PropTypes.func,
  addPlanet: PropTypes.func,
  getPlanetInfo: PropTypes.func,
};
const mapStateToProps = (state) => ({
  planets: state.planetsPage.planets,
  isFetchingPlanets: state.planetsPage.isFetchingPlanets,
  isFetchingPlanetsInfo: state.planetsPage.isFetchingPlanetsInfo,
});
export default connect(mapStateToProps, {
  getPlanets,
  deletePlanet,
  addPlanet,
  getPlanetInfo,
})(Planets);
