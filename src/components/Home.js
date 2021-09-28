import { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import heroBackground from "../assets/heroBackground.png";
import logo from "../assets/logo.svg";

import LetterSelector from "./commonComponents/LetterSelector";
import RandomSelector from "./commonComponents/RandomSelector";
import OrderDialog from "./commonComponents/OrderDialog";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    backgroundImage: `url(${heroBackground})`,
    height: "60em",
    [theme.breakpoints.up("md")]: {
      backgroundAttachment: "fixed",
    },
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  goButton: {
    color: theme.palette.common.white,
    height: 45,
    width: 100,
    [theme.breakpoints.up("md")]: {
      marginLeft: "2em",
    },
    "&:hover": {
      backgroundColor: theme.palette.common.gold,
    },
    fontSize: "1em",
    fontWeight: "bold",
  },
  pageTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "7rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5rem",
    },
  },
  pageSubtitle: {
    marginLeft: "1em",
    marginRight: "1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

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
              <img src={logo} alt="logo" />
            </Grid>
            <Grid
              item
              style={{ marginLeft: "2em", marginRight: "2em" }}
              align="center"
            >
              <Typography variant="h1" className={classes.pageTitle}>
                Crib Cocktails
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2" className={classes.pageSubtitle}>
                Home Alcholic Cocktail Making Directory
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: "5em", marginBottom: "5em" }}>
          {/* ------ Query Block */}
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography
                variant="h2"
                paragraph
                color="secondary"
                className={classes.pageSubtitle}
                align="center"
              >
                Fancy a cocktail today? Let us give you some fresh ideas!
              </Typography>
            </Grid>
            <Grid item align="center">
              <Typography
                variant="subtitle1"
                paragraph
                className={classes.pageSubtitle}
              >
                Search by First Letter of Cocktails Name, Pick a Random Cocktail
                to try or Search by Cocktail Name.
              </Typography>
            </Grid>
            <Grid
              container
              direction={matchesSM ? "column" : "row"}
              alignItems={matchesSM ? "center" : undefined}
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
              direction={matchesSM ? "column" : "row"}
              style={{ marginTop: matchesSM ? "5em" : 0 }}
              justifyContent="center"
              alignItems={matchesSM ? "center" : "flex-end"}
            >
              <Grid item>
                <TextField
                  id="name"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  label="Cocktail Name"
                />
              </Grid>
              <Grid item style={{ marginTop: matchesSM ? "2em" : undefined }}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.goButton}
                  disabled={search.length === 0}
                  onClick={() =>
                    search.length !== 0 ? setDialogOpen(true) : null
                  }
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
