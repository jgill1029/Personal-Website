import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  selectedNav: string;
  id: string;
}

const NavigationLine = ({ children, selectedNav, id }: Props) => {
  const isSelected = selectedNav === id;
  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      cursor="pointer"
      _before={{
        content: '""',
        position: "absolute",
        top: "50%",
        left: 0,
        width: isSelected ? "10%" : "5%",
        height: "2px",
        backgroundColor: isSelected ? "white" : "rgba(255, 255, 255, 0.6)",
        transition: "width 0.3s ease",
      }}
    >
      {children}
    </Box>
  );
};

export default NavigationLine;
