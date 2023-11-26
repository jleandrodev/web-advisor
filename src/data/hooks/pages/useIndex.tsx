import { Router } from "@routes/routes";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function useIndex() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [messageError, setMessageError] = useState("");

  function onBuscarCasamento(event: FormEvent) {
    event.preventDefault();
    if (search.length >= 3) {
      Router.pesquisaCasamento.push(router, search);
    } else {
      setMessageError("Digite um termo maior para a busca");
    }
  }

  return { setSearch, messageError, onBuscarCasamento };
}
