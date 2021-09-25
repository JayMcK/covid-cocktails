import react from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import heroBackground from "../assets/heroBackground.png";

import LetterSelector from  './commonComponents/LetterSelector';

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    backgroundImage: `url(${heroBackground})`,
    height: "60em",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          {/* ------ Hero Block */}
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            className={classes.heroBackground}
          >
            <Grid item>
              <Typography variant="h1">Covid & Cocktails</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2">
                Home Alcholic Cocktail Making Directory
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: "5em", marginBottom: "5em" }}>
          {/* ------ Query Block */}
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h2" paragraph color="secondary">
                Fancy a cocktail today? Let us give you some fresh ideas!
              </Typography>
            </Grid>
            <Grid item align="center">
              <Typography variant="subtitle1" paragraph>
                Search by First Letter of Cocktails Name, Pick a Random Cocktail
                to try or Search by Cocktail Name.
              </Typography>
              <Typography variant="subtitle1">
                Scroll down to see your order!
              </Typography>
            </Grid>
            <LetterSelector />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
