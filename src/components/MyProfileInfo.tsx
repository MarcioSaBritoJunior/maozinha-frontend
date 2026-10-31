import {
  VStack,
  Avatar,
  Heading,
  Text,
  HStack,
  Badge,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "@/contexts/Auth/AuthContext";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiStar } from "react-icons/hi";
import { LuLogOut, LuPencil } from "react-icons/lu";

export const MyProfileInfo = () => {
  const auth = useContext(AuthContext);

  const month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julio",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const yearCreated = auth.user?.createdAt
    ? new Date(auth.user?.createdAt).getFullYear()
    : "";

  const monthCreated = auth.user?.createdAt
    ? month[new Date(auth.user?.createdAt).getMonth()].toLowerCase()
    : "";

  return (
    <VStack
      flex={1}
      background="#fff"
      gap={5}
      rounded={28}
      p={10}
      pt={20}
      pb={20}
      w={{ base: "full", md: "70%" }}
      h="-moz-fit-content"
      style={{ zoom: 0.75 }}
    >
      {/* AVATAR PERFIL */}
      <Avatar.Root
        shape="rounded"
        size="2xl"
        outlineColor="#fff"
        outlineStyle="solid"
        rounded="32px"
        outlineWidth="5px"
        background="#F6D8C5"
        boxSize="112px"
        boxShadow="xl"
      >
        <Avatar.Fallback
          name={auth.user?.name}
          fontWeight="extrabold"
          fontSize="36px"
        />
        <Avatar.Image src="" />
      </Avatar.Root>

      {/* SEÇAO COM NOME, LOCALIDADE E BADGE DE AVALIAÇÃO */}
      <VStack gap={3} w="full">
        <Heading size="2xl" fontWeight="extrabold">
          {auth.user?.name}
        </Heading>
        <HStack gap={1}>
          <MdOutlineLocationOn />
          <Text as="p" fontSize="14px" fontWeight="light">
            {auth.user?.neighborhood}, {auth.user?.city}
          </Text>
        </HStack>

        <Stack align="center">
          <Badge
            variant="solid"
            background="#FBF4E2"
            color="#000"
            p={"6px 22px"}
            rounded="2xl"
            size="md"
          >
            <HiStar color="#E0A11A" size={16} />
            <Text fontWeight="bold" fontSize="md">
              {auth.user?.averageRating ? auth.user?.averageRating : ""}{" "}
            </Text>
            <Text fontWeight="light">{`${auth.user?.totalReviews ? auth.user?.totalReviews + "avaliações" : "sem avaliação"}`}</Text>
          </Badge>
        </Stack>

        {/* KPIS DO PERFIL */}
        <HStack>
          <VStack
            flex={1}
            gap={1}
            align="center"
            justify="center"
            background="#F6F7F4"
            rounded={16}
            w={194}
            h={69}
          >
            <Heading size="xl" fontWeight="extrabold" lineHeight={1}>
              {0}
            </Heading>
            <Text fontSize="xs" lineHeight={1}>
              Serviços publicados
            </Text>
          </VStack>

          <VStack
            flex={1}
            gap={1}
            align="center"
            justify="center"
            background="#F6F7F4"
            rounded={16}
            w={194}
            h={69}
          >
            <Heading size="xl" fontWeight="extrabold" lineHeight={1}>
              {0}
            </Heading>
            <Text fontSize="xs" lineHeight={1}>
              Serviços realizados
            </Text>
          </VStack>
        </HStack>
        <Text
          fontSize="xs"
          fontWeight="light"
        >{`No mãozinha desde ${monthCreated} de ${yearCreated}`}</Text>
      </VStack>
      <Button
        w="100%"
        borderRadius="16px"
        height="56px"
        background="#1F7A50"
        fontWeight="bold"
        onClick={() => {}}
      >
        <LuPencil />
        Editar perfil
      </Button>

      <Button
        variant="plain"
        color="#9A2A23"
        fontWeight="bold"
        onClick={auth.signout}
      >
        <LuLogOut />
        Sair da conta
      </Button>
    </VStack>
  );
};
