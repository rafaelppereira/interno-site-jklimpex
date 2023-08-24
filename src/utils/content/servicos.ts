import { ElementType } from "react";
import { CircleDashed } from "phosphor-react";

interface ServicesContentProps {
  icon: ElementType;
  title: string;
  content: string;
}

export const servicesContent: ServicesContentProps[] = [
  {
    icon: CircleDashed,
    title: "Atendimento médico",
    content:
      "Lorem ipsum dolor sit amet consectetur. Vitae volutpat pellentesque diam erat morbi sed diam feugiat. Eu habitasse commodo justo mauris dictum leo ut nisl blandit. Pretium hendrerit feugiat morbi pellentesque. Elementum at adipiscing aliquam integer rutrum.",
  },
  {
    icon: CircleDashed,
    title: "Procedimentos",
    content:
      "Lorem ipsum dolor sit amet consectetur. Vitae volutpat pellentesque diam erat morbi sed diam feugiat. Eu habitasse commodo justo mauris dictum leo ut nisl blandit. Pretium hendrerit feugiat morbi pellentesque. Elementum at adipiscing aliquam integer rutrum.",
  },
  {
    icon: CircleDashed,
    title: "Atendimento remoto",
    content:
      "Lorem ipsum dolor sit amet consectetur. Vitae volutpat pellentesque diam erat morbi sed diam feugiat. Eu habitasse commodo justo mauris dictum leo ut nisl blandit. Pretium hendrerit feugiat morbi pellentesque. Elementum at adipiscing aliquam integer rutrum.",
  },
];
