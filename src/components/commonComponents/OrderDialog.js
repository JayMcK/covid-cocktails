import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import Order from "./Order";

import italy from "../../assets/italy.svg";
import german from "../../assets/german.svg";
import uk from "../../assets/uk.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  flagButton: {
    marginLeft: "0.5em",
    padding: 0,
  },
  flag: {
    width: "2em",
    height: "2em",
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    padding: 0,
  },
  appbar: {
    boxShadow: "none",
    paddingRight: 0,
  },
  closeButton: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.gold,
      color: theme.palette.common.white,
    },
    fontFamily: "Josefin Sans",
    borderRadius: 0,
    fontSize: "1.25rem",
    width: 120,
    height: 40,
    marginTop: "1em",
    marginBottom: "1em",
  },
}));

export default function OrderDialog({ setDialogOpen, search, setSearch }) {
  const classes = useStyles();

  const [language, setLanguage] = useState("english");

  const flags = [
    { name: "italian", image: italy, alt: "italian flag" },
    { name: "german", image: german, alt: "german flag" },
    { name: "english", image: uk, alt: "english flag" },
  ];

  return (
    <DialogContent>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar disableGutters>
            <Grid
              container
              item
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={3}>
                <IconButton
                  onClick={() => {
                    setDialogOpen(false);
                    setSearch("");
                  }}
                  disableRipple
                  className={classes.iconButton}
                >
                  <HighlightOffIcon
                    fontSize="large"
                    style={{ fontSize: "2.5em" }}
                    color="secondary"
                  />
                </IconButton>
              </Grid>
              <Grid
                item
                xs={9}
                container
                direction="row"
                justifyContent="flex-end"
                style={{ paddingRight: "0.5em" }}
              >
                {flags.map((flag) => (
                  <Grid item key={flag.name}>
                    <IconButton
                      className={classes.flagButton}
                      disableRipple
                      onClick={() => {
                        setLanguage(flag.name);
                        console.log("language", language);
                      }}
                    >
                      <img
                        src={flag.image}
                        alt={flag.alt}
                        className={classes.flag}
                      />
                    </IconButton>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Grid container direction="column">
        <Grid item sm container direction="row">
          <Grid
            item
            sm
            container
            direction="row"
            justifyContent="flex-end"
          ></Grid>
        </Grid>
        <Grid item align="center" style={{ marginTop: "4em" }}>
          <Typography variant="h4" paragraph color="secondary">
            Here's your order!
          </Typography>
        </Grid>
        <Order search={search} language={language} />
        <Grid item align="center">
          <Button
            variant="contained"
            onClick={() => {
              setDialogOpen(false);
              setSearch("");
            }}
            className={classes.closeButton}
          >
            close
          </Button>
        </Grid>
      </Grid>
    </DialogContent>
  );
}
