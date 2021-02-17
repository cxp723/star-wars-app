import React, { useMemo, useState } from "react";
import Preloader from "../Preloader/Preloader";
import PropTypes from "prop-types";
import { useInfo } from "./getInfoHook";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const CardMaterialUI = React.memo(
  ({
    image,
    title,
    url,
    description,
    deleteFunc,
    isFetchingItemsInfo,
    getInfo,
  }) => {
    const isFetched = !!url;

    useInfo(getInfo, isFetched, title, url);

    const isFetching = isFetchingItemsInfo.includes(title);

    const [isLiked, setIsLiked] = useState(false);

    const info = useMemo(
      () =>
        Object.keys(description).map((item) => (
          <Typography component="p" key={item}>
            {item[0].toUpperCase() + item.slice(1)}:{" "}
            {isFetching ? <Preloader height="15" /> : description[item]}
          </Typography>
        )),
      [{ ...description }]
    );

    const classes = useStyles();

    return (
      <Grid item data-testid="card" md={4} sm={6} xs={12}>
        <Card>
          <CardActionArea>
            <CardMedia image={image} className={classes.media} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              {info}
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.actions}>
            <DeleteIcon
              onClick={() => {
                deleteFunc({ title });
              }}
              cursor="pointer"
            />
            {isLiked ? (
              <FavoriteOutlinedIcon
                color="secondary"
                onClick={() => setIsLiked(false)}
                cursor="pointer"
              />
            ) : (
              <FavoriteBorderOutlinedIcon
                color="secondary"
                onClick={() => setIsLiked(true)}
                cursor="pointer"
              />
            )}
            <ShareOutlinedIcon color="primary" cursor="pointer" />
          </CardActions>
        </Card>
      </Grid>
    );
  }
);
CardMaterialUI.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  description: PropTypes.object.isRequired,
  deleteFunc: PropTypes.func,
  isFetchingItemsInfo: PropTypes.arrayOf(PropTypes.string),
  getInfo: PropTypes.func,
};
export default CardMaterialUI;
