import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Title from "./Title";
import Navigation from "./Navigation";

interface StickyLayoutProps {
  children: ReactNode;
}

const StickyLayout: React.FC<StickyLayoutProps> = ({ children }) => {
  return (
    <Flex height="100vh" px="18vw" py="10vh">
      <Box
        width="50%"
        position="sticky"
        top="0"
        height="100vh"
        overflowY="auto"
      >
        <Title />
        <Navigation />
      </Box>
      <Box flex="1" overflowY="auto" padding="4">
        {children}
      </Box>
    </Flex>
  );
};

export default StickyLayout;
