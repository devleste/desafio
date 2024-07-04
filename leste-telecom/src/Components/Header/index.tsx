import { Box, Flex, HStack, Img, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
    const router = useRouter();
    return (
        <HStack w={"100%"} p={"2rem"} borderBottom={"1px solid #d1d1d1"}>
            <Flex align={"center"} gap={24}>
                <Box> {/* LOGO */}
                    <Img src="/assets/logo.png" h={10} w={"100%"} objectFit={"cover"} />
                </Box>

                <Box display={"flex"} alignItems={"center"} gap={4}>
                    <Box
                        p={"0.5rem"}
                        borderRadius={"12px"}
                        bg={router.pathname === '/contacts' ? 'green.green600' : ''}
                    >
                        <Link href={"/contacts"}>
                            <Text
                                color={router?.pathname === '/contacts' ? "white" : 'black'}
                            >
                                Contatos
                            </Text>
                        </Link>
                    </Box>

                    <Box p={"0.5rem"}
                        borderRadius={"12px"}
                        bg={router.pathname === '/insights' ? 'green.green600' : ''}
                    >
                        <Link href={"/insights"}>
                            <Text color={router?.pathname === '/insights' ? "white" : 'black'}>
                                Estatísticas
                            </Text>
                        </Link>
                    </Box>
                </Box>
            </Flex>
        </HStack>
    )
}