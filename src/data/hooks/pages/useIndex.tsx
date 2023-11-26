import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function useIndex() {
  const router = useRouter();
  const [search, setSearch] = useState<String>("");
  const [messageError, setMessageError] = useState("");

  function onBuscarCasamento(event: FormEvent) {
    event.preventDefault();
    if (search.length >= 3) {
      router.push("/pesquisa-casamento");
    } else {
      setMessageError("Digite um termo maior para a busca");
    }
  }

  return { setSearch, messageError, onBuscarCasamento };
}
