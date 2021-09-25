import react from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import random from "../../assets/random.svg";

const useStyles = makeStyles((theme) => ({
  selectorContainer: {
    borderRadius: 50,
    backgroundColor: theme.palette.common.gold,
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
  },
  button: {
    display: "grid",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
    borderRadius: 50,
    padding: 0,
    height: "21em",
    width: "20em",
  },
  image: {
    height: "15em",
  },
}));

export default function RandomSelector() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid
      item
    >
      <Grid
        container
        alignItems="center"
        direction="column"
        className={classes.selectorContainer}
      >
        <Grid item container component={Button} className={classes.button}>
          <Grid item>
            <Typography
              variant="h3"
              style={{
                color: theme.palette.common.white,
                marginBottom: "0.5em",
              }}
            >
              Random Cocktail Picker
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={random}
              alt="wine bottle and wine glass"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
