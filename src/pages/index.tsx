import PageTitle from "@components/data-display/PageTitle";
import { TextField, Icon, Button } from "@mui/material";
import { BoxButton, HomeContainer } from "@styles/pages/index.styles";

export default function Home() {
  return (
    <HomeContainer>
      <form>
        <PageTitle
          title="Lista de Casamentos"
          subtitle="Selecione ou pesquise um casamento"
        />
        <TextField
          sx={{ mt: 3, mb: 1 }}
          label={"Pesquisar Casamento"}
          InputProps={{
            startAdornment: <Icon>search</Icon>,
          }}
          fullWidth
          required
        />
        <BoxButton>
          <Button type="submit" variant="contained">
            Buscar Casamento
          </Button>
        </BoxButton>
      </form>
    </HomeContainer>
  );
}
