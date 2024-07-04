import { contacts } from "@/services/getLesteTelecom";
import { VariablesDeleteContact } from "@/utils/modals/DeleteContact";
import { Box, Button, Flex, Img, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text } from "@chakra-ui/react";
import { Fragment } from "react";


export function InputsDeleteContacts({ contact }: VariablesDeleteContact) {
    return (
        <>
            <Img
                mb={"1rem"}
                src={contact.avatar}
                objectFit={"cover"}
                w={90}
                h={90}
                border={"1px solid"}
                borderColor={"black.200"}
                borderRadius={"50%"}
            />
            <Flex gap={4}>
                <Box>
                    <Text>First Name</Text>
                    <Input
                        readOnly
                        _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
                        mb={"1rem"}
                        type="text"
                        value={contact.first_name}
                    />
                </Box>

                <Box>
                    <Text>Last Name</Text>
                    <Input
                        readOnly
                        type="text"
                        value={contact.last_name}
                    />
                </Box>
            </Flex>

            <Text>Data de nascimento</Text>
            <Input
                name="birthday"
                value={contact.birthday}
                mb={"1rem"}
                type="text"
                placeholder="YYYY-MM-DD"
                maxLength={10}
                readOnly
                _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
            />

            <Text>Email</Text>
            <Input
                readOnly
                name="email"
                value={contact.email}
                mb={"1rem"}
                type="text"
                placeholder="Email"
                _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
            />

            <Text>Avatar URL</Text>
            <Input
                readOnly
                name="avatar"
                value={contact.avatar}
                mb={"1rem"}
                type="url"
                placeholder="Avatar URL"
                _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
            />

            <Flex gap={4} justify={"center"}>
                <Box>
                    <Text>Gênero</Text>
                    <Select
                        disabled
                        name="gender"
                        value={contact.gender}
                        placeholder="Select Gender"
                        mb={"1rem"}
                    >
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </Select>
                </Box>

                <Box>
                    <Text>Idioma</Text>
                    <Select
                        disabled
                        name="language"
                        value={contact.language}
                        mb={"1rem"}
                        _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
                    >
                        {contacts.map((item, idx) => (
                            <Fragment key={idx}>
                                <option value={item.language}>{item.language}</option>
                            </Fragment>
                        ))}
                    </Select>
                </Box>
            </Flex>
        </>
    )
}