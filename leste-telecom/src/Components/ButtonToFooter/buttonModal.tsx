import { useDisclosure } from "@chakra-ui/react";
import { ScrollToTopButton } from ".";
import ParamsContextProvider from "../Context";

export function RenderButtonBottom() {
    return (
        <ParamsContextProvider>
            <ScrollToTopButton />
        </ParamsContextProvider>
    )
}