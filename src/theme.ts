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
    },
  },
});

export default theme;