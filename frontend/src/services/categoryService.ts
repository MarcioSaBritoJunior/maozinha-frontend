import type { ElementType } from "react";
import {
  MdHome,
  MdComputer,
  MdGrass,
  MdCleaningServices,
  MdBuild,
  MdLocalShipping,
  MdPets,
  MdCameraAlt,
} from "react-icons/md";

export interface IServiceCategory {
  id: number;
  name: string;
  icon?: ElementType;
  bgColor?: string;
  iconColor?: string;
}

const mockCategorias: IServiceCategory[] = [
  {
    id: 1,
    name: "Casa e montagem",
    icon: MdHome,
    bgColor: "#FBEBD9",
    iconColor: "#7A4A12",
  },
  {
    id: 2,
    name: "Tecnologia",
    icon: MdComputer,
    bgColor: "#E3ECFB",
    iconColor: "#7A4A12",
  },
  {
    id: 3,
    name: "Jardinagem",
    icon: MdGrass,
    bgColor: "#E2F2E3",
    iconColor: "#7A4A12",
  },
  {
    id: 4,
    name: "Limpeza",
    icon: MdCleaningServices,
    bgColor: "#DDF1F3",
    iconColor: "#7A4A12",
  },
  {
    id: 5,
    name: "Pequenos reparos",
    icon: MdBuild,
    bgColor: "#FBE6DE",
    iconColor: "#7A4A12",
  },
  {
    id: 6,
    name: "Mudanças",
    icon: MdLocalShipping,
    bgColor: "#ECE6F8",
    iconColor: "#7A4A12",
  },
  {
    id: 7,
    name: "Cuidados com animais",
    icon: MdPets,
    bgColor: "#F9E4EA",
    iconColor: "#7A4A12",
  },
  {
    id: 8,
    name: "Eventos e fotografia",
    icon: MdCameraAlt,
    bgColor: "#F6EFD2",
    iconColor: "#7A4A12",
  },
];

export const categoryService = {
  getCategories: async (): Promise<IServiceCategory[]> => {
    return mockCategorias;
  },
};
