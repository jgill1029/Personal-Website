import { extendTheme} from "@chakra-ui/react";


const theme = extendTheme({
    components: {
        Text: {
          baseStyle: {
            color: "rgba(255, 255, 255, 0.8)",
          },
        },
      },
    fonts: {
        body: "Inter, sans-serif",
        heading: "Inter, sans-serif",
    },
  styles: {
    global: {
        body: {
            backgroundColor: "#0f172a",
            color: "white",
          },
      "ul": {
        listStyleType: "none",
        padding: 0,
      },
      "li": {
        position: "relative",
        paddingLeft: "20px",
        marginBottom: "8px",
        cursor: "pointer",
        _before: {
          content: '""',
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#3182ce",
          transition: "width 0.3s ease",
        },
        _hover: {
          _before: {
            width: "16px",
          },
        },
      },
    },
  },
});

export default theme;