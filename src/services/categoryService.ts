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
    iconColor: "#2B4E8C",
  },
  {
    id: 3,
    name: "Jardinagem",
    icon: MdGrass,
    bgColor: "#E2F2E3",
    iconColor: "#2C6A35",
  },
  {
    id: 4,
    name: "Limpeza",
    icon: MdCleaningServices,
    bgColor: "#DDF1F3",
    iconColor: "#1C6570",
  },
  {
    id: 5,
    name: "Pequenos reparos",
    icon: MdBuild,
    bgColor: "#FBE6DE",
    iconColor: "#8A3B1E",
  },
  {
    id: 6,
    name: "Mudanças",
    icon: MdLocalShipping,
    bgColor: "#ECE6F8",
    iconColor: "#5A3E8E",
  },
  {
    id: 7,
    name: "Cuidados com animais",
    icon: MdPets,
    bgColor: "#F9E4EA",
    iconColor: "#8A2E4A",
  },
  {
    id: 8,
    name: "Eventos e fotografia",
    icon: MdCameraAlt,
    bgColor: "#F6EFD2",
    iconColor: "#6E5A11",
  },
];

export const categoryService = {
  getCategories: async (): Promise<IServiceCategory[]> => {
    return mockCategorias;
  },
};
