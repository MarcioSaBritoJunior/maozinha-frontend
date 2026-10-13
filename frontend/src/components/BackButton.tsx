import { Link as RouterLink } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";

interface IBackButtonProps {
  to: string;
}

export function BackButton({ to }: IBackButtonProps) {
  const path = `/${to}`;
  return (
    <RouterLink to={path} aria-label="Voltar">
      <IconButton
        aria-label="arrow-back"
        rounded="50%"
        width="44px"
        background="#fff"
        color="#000000"
      >
        <MdArrowBack />
      </IconButton>
    </RouterLink>
  );
}
