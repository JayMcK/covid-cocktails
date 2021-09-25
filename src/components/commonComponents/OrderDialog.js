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

export default function OrderDialog({ setDialogOpen }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <DialogContent>
      <Grid container direction="column">
        <Grid item sm container direction="row">
          <Grid item>
            <IconButton
              onClick={() => setDialogOpen(false)}
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
            <Grid item>
              <IconButton className={classes.flagButton} disableRipple>
                <img src={italy} alt="italian flag" className={classes.flag} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton className={classes.flagButton} disableRipple>
                <img src={german} alt="german flag" className={classes.flag} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item align="center">
          <Typography variant="h4" paragraph color="secondary">
            Here's your order!
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setDialogOpen(false)}>close</Button>
        </Grid>
      </Grid>
    </DialogContent>
  );
}
