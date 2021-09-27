import react from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  selectorContainer: {
    borderRadius: 50,
    backgroundColor: theme.palette.common.blue,
    maxWidth: "30em",
    maxHeight: "20em",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
    marginBottom: "5em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20em",
      maxHeight: "30em",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "17em",
      maxHeight: "35em",
    },
  },
  button: {
    borderRadius: 50,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.blue,
    fontWeight: "bold",
    fontSize: "1rem",
    marginRight: "0.25em",
    marginLeft: "0.25em",
    marginTop: "0.25em",
    marginBottom: "0.25em",
    "&:hover": {
      backgroundColor: theme.palette.common.gold,
      color: theme.palette.common.white,
    },
  },
}));

export default function LetterSelector({ setSearch, setDialogOpen }) {
  const classes = useStyles();
  const theme = useTheme();

  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <Grid item>
      <Grid
        container
        alignItems="center"
        direction="column"
        className={classes.selectorContainer}
      >
        <Grid item align="center">
          <Typography variant="h3">First Letter of Cocktail’s Name</Typography>
        </Grid>
        <Grid container justifyContent="center">
          {letters.map((letter) => (
            <Grid item key={letter}>
              <Button
                onClick={() => {
                  setSearch(letter);
                  setDialogOpen(true);
                }}
                className={classes.button}
              >
                {letter}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
