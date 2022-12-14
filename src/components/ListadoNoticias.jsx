import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

const ListadoNoticias = () => {
  const { noticias, handleChangePagina,totalNoticias, pagina} = useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 20)

  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
        sx={{
            fontWeight:"bold"
        }}
      >
        Latests News
      </Typography>

      <Grid container spacing={4}>
        {noticias.map((noticia) => (
          <Noticia noticia={noticia} key={noticia.url} />
        ))}
      </Grid>

      <Stack 
            sx={{marginY:5}}
            spacing={2} 
            direction={"row"}
            justifyContent="center"
            alignItems="center"

      >
        
        <Pagination page={pagina} count={totalPaginas} color="primary" onChange={handleChangePagina}/>
        
      </Stack>
    </>
  );
};

export default ListadoNoticias;
