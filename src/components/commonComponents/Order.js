import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Backdrop from "@material-ui/core/Backdrop";

import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "15em",
    width: "15em",
    boxShadow: theme.shadows[5],
    border: `10px solid ${theme.palette.common.gold}`,
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
      height: "12.5em",
      width: "12.5em",
    },
  },
  divider: {
    marginTop: "1em",
    marginBottom: "1em",
    color: theme.palette.common.gold,
  },
  ingredientsTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  innerDivider: {
    color: theme.palette.common.blue,
    width: "10em",
    marginTop: "1em",
    marginBottom: "1em",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Order({ search, language }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleQuery = () => {
    if (search.length === 1) {
      return `search.php?f=${search}`;
    } else if (search === "random") {
      return "random.php";
    } else {
      return `search.php?s=${search}`;
    }
  };

  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = handleQuery(search);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/${query}`)
      .then((res) => {
        //handle success
        setDrinks(res.data.drinks);
        console.log(res.data.drinks);
        setIsLoading(false);
      })
      .catch((err) => {
        //handle error
        console.log("err", err);
        setIsLoading(false);
      });
  }, [query]);

  const searchAgain = (
    <Grid item>
      <Typography>
        Sorry, no search results were found. Please try again
      </Typography>
    </Grid>
  );

  const ingredients = (drink) => {
    let array = [];
    let number = 0;
    let ingredient = `strIngredient${number}`;
    let measure = `strMeasure${number}`;

    while (drink[ingredient] !== null) {
      number++;
      ingredient = `strIngredient${number}`;
      measure = `strMeasure${number}`;
      if (drink[ingredient] === null) break;
      if (drink[ingredient] === "") break;
      let i = `${drink[ingredient]}`.trim();
      let m = `${drink[measure]}`.trim();
      console.log(i, m);
      array.push(`${m === "null" || m === null ? "" : m} ${i ? i : ""}`);
    }
    return array.map((item, index) => (
      <Grid item align="center" key={`${item}${index}`}>
        <Typography>{item}</Typography>
      </Grid>
    ));
  };

  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          <Backdrop open={isLoading} className={classes.backdrop}>
            <CircularProgress color="inherit" size={100} />
          </Backdrop>
          <Grid item>
            <Divider variant="middle" className={classes.divider} />
          </Grid>
          {drinks
            ? drinks.map((drink) => (
                <Fragment key={drink.strDrink}>
                  <Grid
                    container
                    direction={matchesSM ? "column" : "row"}
                    key={drink.idDrink}
                    alignItems="center"
                    justifyContent="space-around"
                  >
                    <Grid
                      item
                      sm
                      container
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      style={{ maxWidth: "40em" }}
                    >
                      <Grid item>
                        <Typography variant="h5" color="primary">
                          {drink.strDrink}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="h3"
                          color="secondary"
                          className={classes.ingredientsTitle}
                        >
                          Ingredients
                        </Typography>
                      </Grid>
                      <Grid item>{ingredients(drink)}</Grid>
                      <Grid item>
                        <Divider
                          variant="middle"
                          className={classes.innerDivider}
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="h3"
                          color="secondary"
                          className={classes.ingredientsTitle}
                        >
                          Method
                        </Typography>
                      </Grid>
                      <Grid item align="center">
                        <Typography variant="body1">
                          {language === "english"
                            ? drink.strInstructions
                            : language === "italian"
                            ? drink.strInstructionsIT
                            : language === "german"
                            ? drink.strInstructionsDE
                            : null}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      sm
                      container
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      style={{ maxWidth: "40em" }}
                    >
                      <Grid item>
                        <Avatar
                          alt={drink.strDrink}
                          src={drink.strDrinkThumb}
                          className={classes.image}
                        />
                      </Grid>
                      <Grid item style={{ marginTop: "1em" }}>
                        <Typography variant="body1">
                          Serve In: {drink.strGlass}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Divider variant="middle" className={classes.divider} />
                  </Grid>
                </Fragment>
              ))
            : searchAgain}
        </Grid>
      </Grid>
    </Grid>
  );
}
