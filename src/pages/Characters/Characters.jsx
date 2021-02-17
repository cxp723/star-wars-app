import React, { useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import AddForm from "../../components/AddForm/AddForm";
import Preloader from "../../components/Preloader/Preloader";
import {
  getCharacters,
  deleteCharacter,
  getCharacterInfo,
  addCharacter,
} from "../../redux/reducers/characters-reducer/characters-actions";
import charactersImages from "../../assets/images/characters/characters-images";
import Pagination from "@material-ui/lab/Pagination";
import QueryString from "qs";
import { charactersStateSelector } from "./../../redux/reducers/characters-reducer/characters-selectors";
import { withRouter } from "react-router";
import CardMaterialUI from "./../../components/Card/CardMaterialUI";
import Container from "@material-ui/core/Container";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import AddFormMaterialUI from "./../../components/AddForm/AddFormMaterialUI";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4),
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  pagination: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
  },
}));

const Characters = (routerProps) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const {
    characters,
    isFetchingCharacters,
    isFetchingCharactersInfo,
    charactersTotalCount,
    pageSize,
  } = useSelector(charactersStateSelector, shallowEqual);

  const deleteCharacterFunc = (name) => dispatch(deleteCharacter(name));
  const getCharacterInfoFunc = (name, url) =>
    dispatch(getCharacterInfo(name, url));
  const addCharacterFunc = (character) => dispatch(addCharacter(character));
  const getCharactersFunc = (page) => dispatch(getCharacters(page));

  const currentPage = useMemo(
    () =>
      QueryString.parse(routerProps.location.search, {
        ignoreQueryPrefix: true,
      }).page?.toString(),
    [routerProps.location.search]
  );

  if (!currentPage) {
    routerProps.history.push("/characters?page=1");
  }

  const count = useMemo(() => Math.ceil(charactersTotalCount / pageSize), [
    pageSize,
    charactersTotalCount,
  ]);

  useEffect(() => {
    getCharactersFunc(currentPage);
  }, [routerProps.location.search]);

  const onPageChanged = (event, page) => {
    routerProps.history.push("/characters?page=" + page);
  };

  const charactersList = useMemo(
    () =>
      characters.map((character) => (
        <CardMaterialUI
          image={charactersImages[character.name] || charactersImages.noImage}
          key={character.name}
          title={character.name}
          description={{
            gender: character.gender,
            height: character.height,
            mass: character.mass,
          }}
          url={character.url || null}
          deleteFunc={deleteCharacterFunc}
          isFetchingItemsInfo={isFetchingCharactersInfo}
          getInfo={getCharacterInfoFunc}
        />
      )),
    [characters, isFetchingCharactersInfo]
  );

  return (
    <Container maxWidth="md">
      <Paper elevation={3} className={classes.container}>
        {isFetchingCharacters ? (
          <Preloader />
        ) : (
          <>
            {characters.length > 0 ? (
              <Typography variant="h4" component="h1" gutterBottom>
                Characters:
              </Typography>
            ) : null}
            <Grid container justify="center" spacing={4} justify="flex-start">
              {charactersList}
            </Grid>
            {charactersTotalCount > pageSize && (
              <Pagination
                count={count}
                page={Number(currentPage)}
                onChange={onPageChanged}
                className={classes.pagination}
                variant="outlined"
                size="small"
                color="primary"
              />
            )}
            <AddFormMaterialUI
              addFunc={addCharacterFunc}
              title="character"
              fields={["name", "gender", "height", "mass"]}
            />
          </>
        )}
      </Paper>
    </Container>
  );
};

export default withRouter(Characters);
