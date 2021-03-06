import React, { useEffect, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import AddForm from '../../components/AddForm/AddForm';
import Container from '../../components/Container/Container';
import Preloader from '../../components/Preloader/Preloader';
import {
  getPlanets,
  deletePlanet,
  addPlanet,
  deleteError,
} from '../../redux/reducers/planets-reducer/planets-actions';
import Card from '../../components/Card/Card';
import planetsImages from '../../assets/images/planets/planets-images';
import Paginator from '../../components/Paginator/Paginator';
import QueryString from 'qs';
import planetsStateSelector from './../../redux/reducers/planets-reducer/planets-selectors';
import { withRouter } from 'react-router';
import { usePlanetInfo } from '../../components/Card/getInfoHooks';
import { useCallback } from 'react';
import Message from '../../components/Message/Message';

const fields = ['name', 'diameter', 'climate', 'gravity'];

const Planets = (routerProps) => {
  const dispatch = useDispatch();

  const {
    planets,
    isFetchingPlanets,
    isFetchingPlanetsInfo,
    planetsTotalCount,
    pageSize,
    errors,
  } = useSelector(planetsStateSelector, shallowEqual);

  const deletePlanetFunc = (name) => dispatch(deletePlanet(name));
  const addPlanetFunc = (planet) => dispatch(addPlanet(planet));
  const getPlanetsFunc = (page) => dispatch(getPlanets(page));
  const deleteErrorFunc = (error) => dispatch(deleteError(error));

  const deleteErrorCallback = useCallback(() => {
    deleteErrorFunc('fetchingDataError');
  }, []);

  const currentPage = useMemo(
    () =>
      QueryString.parse(routerProps.location.search, {
        ignoreQueryPrefix: true,
      }).page?.toString(),
    [routerProps.location.search],
  );

  const reloadData = useCallback(() => {
    deleteErrorFunc('fetchingDataError');
    getPlanetsFunc(currentPage);
  }, [currentPage]);

  if (!currentPage) {
    routerProps.history.push('/planets?page=1');
  }

  const addPlanetCallback = useCallback((planet) => {
    addPlanetFunc(planet);
  }, []);

  useEffect(() => {
    getPlanetsFunc(currentPage);
  }, [routerProps.location.search]);

  const onPageChanged = useCallback((page) => {
    routerProps.history.push('/planets?page=' + page);
  }, []);

  const planetsList = useMemo(
    () =>
      planets.map((planet) => (
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
          deleteFunc={deletePlanetFunc}
          isFetchingItemsInfo={isFetchingPlanetsInfo}
          useInfo={usePlanetInfo}
        />
      )),
    [planets, isFetchingPlanetsInfo],
  );

  return (
    <Container>
      {isFetchingPlanets ? (
        <Preloader />
      ) : (
        <>
          {errors.fetchingDataError ? (
            <Message
              error
              closeFunc={deleteErrorCallback}
              onButtonClick={reloadData}
              buttonText="Try again"
            >
              {errors.fetchingDataError}
            </Message>
          ) : (
            <>
              {planets.length > 0 && (
                <>
                  <h1>Planets:</h1>
                  {planetsList}
                </>
              )}

              {planetsTotalCount > pageSize && (
                <Paginator
                  currentPage={Number(currentPage)}
                  totalCount={planetsTotalCount}
                  pageSize={pageSize}
                  onPageSelect={onPageChanged}
                />
              )}

              <AddForm addFunc={addPlanetCallback} title="planet" fields={fields} />
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default withRouter(Planets);
