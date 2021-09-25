import react from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import italy from "../../assets/italy.svg";
import german from "../../assets/german.svg";
import uk from "../../assets/uk.svg";

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
}));

export default function OrderDialog({ setDialogOpen, search, setSearch }) {
  const classes = useStyles();
  const theme = useTheme();

  const flags = [
    { name: "italian", image: italy, alt: "italian flag" },
    { name: "german", image: german, alt: "german flag" },
    { name: "english", image: uk, alt: "english flag" },
  ];

  return (
    <DialogContent>
      <Grid container direction="column">
        <Grid item sm container direction="row">
          <Grid item>
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
          <Grid item sm container direction="row" justifyContent="flex-end">
            {flags.map((flag) => (
              <Grid item>
                <IconButton className={classes.flagButton} disableRipple>
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
        <Grid item align="center">
          <Typography variant="h4" paragraph color="secondary">
            Here's your order!
          </Typography>
        </Grid>
        <Grid item>
          <Typography>Search: {search}</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setDialogOpen(false)}>close</Button>
        </Grid>
      </Grid>
    </DialogContent>
  );
}
