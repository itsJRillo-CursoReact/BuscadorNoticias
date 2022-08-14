import { Container, Grid, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { NoticiasProvider } from "./context/NoticiasProvider";

function App() {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} variant="h3" sx={{
            fontWeight:"bold"
          }} component="h1">
            News Searcher
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6}>
            <Formulario />
          </Grid>
        </Grid>
        <ListadoNoticias />
      </Container>
    </NoticiasProvider>
  );
}

export default App;
