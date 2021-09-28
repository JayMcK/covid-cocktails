import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import footerBackground from "../../assets/footerBackground.png";
import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  footerBackground: {
    backgroundImage: `url(${footerBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  logo: {
    width: "3em",
    height: "3em",
    marginBottom: "1em",
    marginTop: "1em",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid item>
      <Grid
        container
        direction="column"
        className={classes.footerBackground}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <img src={logo} alt="logo" className={classes.logo} />
        </Grid>
        <Grid item>
          <Typography
            style={{ fontSize: "1.25rem", marginBottom: "1em" }}
            variant="h2"
          >
            © Jay McKenzie 2021
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
