import PageTitle from "@components/data-display/PageTitle";
import useIndex from "@data/hooks/pages/useIndex";
import { TextField, Icon, Button } from "@mui/material";
import { BoxButton, HomeContainer } from "@styles/pages/index.styles";

export default function Home() {
  const { messageError, setSearch, onBuscarCasamento } = useIndex();
  return (
    <HomeContainer onSubmit={onBuscarCasamento}>
      <PageTitle
        title="Lista de Casamentos"
        subtitle="Selecione ou pesquise um casamento"
      />
      <TextField
        sx={{ mt: 3, mb: 1 }}
        label={"Pesquisar Casamento"}
        error={messageError.length > 0}
        helperText={messageError}
        InputProps={{
          startAdornment: <Icon>search</Icon>,
        }}
        onChange={({ target: { value } }) => setSearch(value)}
        fullWidth
        required
      />
      <BoxButton>
        <Button type="submit" variant="contained">
          Buscar Casamento
        </Button>
      </BoxButton>
    </HomeContainer>
  );
}
