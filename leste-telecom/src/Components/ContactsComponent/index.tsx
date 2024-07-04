import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CardsToFilterComponent } from "../CardsToFilter";
import { CardsContacts } from "../CardsToContacts";
import ParamsContextProvider from "../Context";
import { ScrollToTopButton } from "../ButtonToFooter";

export function ContactsComponent() {
    return (
        <ParamsContextProvider>
            <Box h={"100%"}>
                <Flex overflow={"hidden"} gap={{ xs: 4, tablet: 0 }} flexDir={{ xs: 'column', tablet: 'row' }} p={"1.5rem"} h={"100%"} justify={"center"}>
                    <Box h={"100%"} flex={1}> {/* Card de filtragens */}
                        <CardsToFilterComponent />
                    </Box>

                    <Box
                        overflow={"auto"}
                        h={"34rem"}
                        p={"2rem"}
                        border={"1px solid"}
                        borderColor={"black.100"}
                        flex={4}
                    > {/* Cards de contatos */}
                        <CardsContacts />
                    </Box>
                </Flex>
            </Box>
            <ScrollToTopButton />
        </ParamsContextProvider>
    );
}
