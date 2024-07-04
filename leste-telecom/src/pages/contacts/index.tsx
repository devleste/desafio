import { ContactsComponent } from "@/Components/ContactsComponent";
import ParamsContextProvider from "@/Components/Context";
import { Box } from "@chakra-ui/react";

export default function Contacts() {
    return (
        <Box>
            <ParamsContextProvider>
                <ContactsComponent />
            </ParamsContextProvider>
        </Box>
    )
}