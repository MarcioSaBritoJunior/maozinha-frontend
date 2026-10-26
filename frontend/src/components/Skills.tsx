import { AuthContext } from "@/contexts/Auth/AuthContext";
import { getCurrentUser } from "@/services/userService";
import {
  Heading,
  HStack,
  Text,
  Badge,
  Wrap,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

interface ISkillsProps {
  title: string;
}

export const Skills = ({ title }: ISkillsProps) => {
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      const response = await getCurrentUser();

      setSkills(response.skills);
    };
    loadSkills();
  }, []);

  return (
    <Flex
      flex={1}
      boxSize={100}
      bg="#fff"
      w="full"
      rounded={28}
      h={90}
      p={6}
      align="space-between"
      justify="center"
      direction="column"
      gap={3}
    >
      <HStack justify="space-between" w="full">
        <Heading as="h3" size="md" fontWeight="bold">
          {title}
        </Heading>
        <RouterLink aria-label="Ir para editar perfil" to="/editar-perfil">
          <Text fontSize="14px" color="#1F7A50" fontWeight="medium">
            Editar
          </Text>
        </RouterLink>
      </HStack>
      <Wrap direction="row" w="full" gap={2}>
        {skills.map((skill) => {
          return (
            <WrapItem>
              <Badge
                variant="solid"
                background="#E3F3EB"
                color="#155238"
                p={"6px 22px"}
                rounded="2xl"
                size="sm"
              >
                <Text fontSize={11}>{skill}</Text>
              </Badge>
            </WrapItem>
          );
        })}
      </Wrap>
    </Flex>
  );
};
