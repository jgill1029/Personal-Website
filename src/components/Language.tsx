import { Box } from "@chakra-ui/react";

interface Props {
  language: string;
}

const Language = ({ language }: Props) => {
  return (
    <Box
      borderRadius="full"
      bg="rgba(79, 209, 197, .25)"
      color="#81e6d9"
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
      display="inline-block"
      px={3}
      py={1}
    >
      {language}
    </Box>
  );
};

export default Language;
