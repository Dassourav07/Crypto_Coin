import { AppBar} from "@material-ui/core";
import {Container} from "@material-ui/core";
import {MenuItem} from "@material-ui/core";
import {Select} from "@material-ui/core";
import {Toolbar} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import { createTheme} from "@material-ui/core/styles";
import {makeStyles} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/core/styles"; 
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
  
  const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#ggg",
      },
      type: "dark",
    },
  });
  
  function Header() {
    const classes = useStyles();
    const { currency, setCurrency } = CryptoState();
  
    const history = useHistory();
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => history.push(`/`)}
                variant="h4"
                className={classes.title}
              >
                Crypto Coin
              </Typography>
              {/* <Button color="inherit">Login</Button> */}
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15 }}
                onChange={(e) => setCurrency(e.target.value)}
              >    
                <MenuItem value={"INR"}>INR</MenuItem>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem> 
                <MenuItem value={"RUB"}>RUB</MenuItem>            
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Header;