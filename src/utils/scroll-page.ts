import { Dispatch } from "react";

interface RefOffsetTopProps {
  current: {
    offsetTop: number;
  };
}

// FUNC: Função para dar o scroll na página ao clicar no botão
export function scrollPage(
  refOffsetTop: RefOffsetTopProps,
  setHasToggleMenuMobile: Dispatch<boolean>,
  close?: boolean
) {
  window.scroll({
    top: refOffsetTop.current.offsetTop - 182,
    behavior: "smooth",
  });

  if (close) {
    setHasToggleMenuMobile(false);
  }
}
