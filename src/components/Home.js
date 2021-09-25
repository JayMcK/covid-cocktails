import react, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import heroBackground from "../assets/heroBackground.png";

import LetterSelector from "./commonComponents/LetterSelector";
import RandomSelector from "./commonComponents/RandomSelector";
import OrderDialog from "./commonComponents/OrderDialog";

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    backgroundImage: `url(${heroBackground})`,
    height: "60em",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  goButton: {
    color: theme.palette.common.white,
    height: "3.5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.common.gold,
    },
    fontSize: "1em",
    fontWeight: "bold",
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

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
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-around"
              style={{ marginTop: "5em" }}
            >
              <LetterSelector
                setDialogOpen={setDialogOpen}
                search={search}
                setSearch={setSearch}
              />
              <RandomSelector
                setDialogOpen={setDialogOpen}
                search={search}
                setSearch={setSearch}
              />
            </Grid>
            <Grid
              item
              container
              direction="row"
              style={{ marginTop: "5em" }}
              justifyContent="center"
            >
              <Grid item>
                <TextField
                  id="name"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    console.log(search);
                  }}
                  label="Cocktail Name"
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.goButton}
                  onClick={() => setDialogOpen(true)}
                >
                  go
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ----- Results Block */}
          <Dialog
            fullScreen
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
          >
            <OrderDialog
              search={search}
              setSearch={setSearch}
              setDialogOpen={setDialogOpen}
            />
          </Dialog>
        </Grid>
      </Grid>
    </Grid>
  );
}
