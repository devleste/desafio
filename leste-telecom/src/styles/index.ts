import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints/breakpoint";
import { colors as colors } from "./theme/theme";

const defaultTheme = extendTheme({
    breakpoints,
    colors,
});

export { defaultTheme };