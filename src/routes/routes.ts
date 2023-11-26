import { NextRouter } from "next/router";

export const Router = {
  home: {
    name: "/",
    push: function (router: NextRouter) {
      router.push({ pathname: this.name });
    },
  },

  pesquisaCasamento: {
    name: "pesquisa-casamento",
    push: function (router: NextRouter, search?: string) {
      router.push({ pathname: this.name, query: { search } });
    },
  },
};
