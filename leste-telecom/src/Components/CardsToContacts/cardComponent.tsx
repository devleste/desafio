import { Contact } from "@/types/interfaces/contact";
import { calculateAge } from "@/utils/calculateAge/calculateAge";
import { InformationModalContact } from "@/utils/modals/InformationContact";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Img, Text } from "@chakra-ui/react";
import React from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { FaBirthdayCake } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { IoManSharp, IoWomanSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export interface CardComponentProps {
    contact: Contact;
    onEdit: (contact: Contact) => void;
    onDelete: (contact: Contact) => void;
    isOpen: boolean;
    onOpen: (contact : Contact) => void;
    onClose: () => void
    handleOpenInformationsModal: (contact: Contact) => void;
};

export const CardComponent: React.FC<CardComponentProps> = ({ 
    contact, 
    onDelete, 
    onEdit, 
    isOpen, 
    onClose, 
    onOpen ,
    handleOpenInformationsModal
}) => (
    <Card
        _hover={{
            bg: 'green.green600',
            border: 'none',
            transition: '0.2s',
            color: 'white'
        }}
        borderRadius={"12px"}
        border={"1px solid"}
        borderColor={"black.200"}
        boxShadow={"none"}
    >
        <CardHeader p={"0"} display={"flex"} justifyContent={"right"}>
            <Button 
                bg={"transparent"} 
                _hover={{
                    bg: 'green.green700',
                    color: 'white'
                }} 
                p={"0.5rem"}
                onClick={() => handleOpenInformationsModal(contact)}
            >
                <IoIosInformationCircle size={24} />
            </Button>
        </CardHeader>
        <CardHeader justifyContent={"center"} display={"flex"} alignItems="center">
            <Img
                src={contact.avatar}
                h={"130px"}
                w={"130px"}
                objectFit={"cover"}
                borderRadius={"50%"}
                border={"2px solid"}
                borderColor={"black.300"}
            />
        </CardHeader>

        <CardBody mt={"-2rem"}>
            <HStack justify={"center"}>
                <Flex direction={"column"} justify={"center"}>
                    <Text mb={"0.5rem"} fontSize={"1.25rem"} textAlign={"center"}>
                        {contact.first_name} {contact.last_name}
                    </Text>

                    <Flex mb={"0.5rem"} gap={1} alignItems={"center"}>
                        <Text fontSize={"0.85rem"} display={"flex"} gap={1} alignItems={"center"} fontWeight={"500"}>
                            <FaBirthdayCake size={18} /> Data de nascimento:
                        </Text>
                        <Text gap={1} fontSize={"0.85rem"} alignItems={"center"} display={"flex"}>
                            {contact.birthday}
                        </Text>
                    </Flex>

                    <Flex gap={1} mb={"0.5rem"} align={"center"}>
                        <Text gap={1} alignItems={"center"} fontWeight={"500"} fontSize={"0.85rem"} display={"flex"}>
                            <MdEmail size={18} /> Email:
                        </Text>
                        <Text fontSize={"0.85rem"} fontWeight={"normal"}>{contact.email}</Text>
                    </Flex>

                    <Flex gap={1} mb={"0.5rem"} align={"center"}>
                        <Text gap={1} alignItems={"center"} fontWeight={"500"} fontSize={"0.85rem"} display={"flex"}>
                            <MdEmail size={18} /> Idade:
                        </Text>
                        <Text fontSize={"0.85rem"} fontWeight={"normal"}>{calculateAge(contact.birthday)}</Text>
                    </Flex>

                    <Text fontSize={"0.85rem"} alignItems={"center"} display={"flex"}>
                        Gênero: {contact.gender}
                        {contact.gender === 'M' ?
                            <IoManSharp size={24} color="blue" /> : <IoWomanSharp size={24} color="purple" />
                        }
                    </Text>
                </Flex>
            </HStack>
        </CardBody>

        <CardFooter borderTop={"1px solid"} borderTopColor={"black.200"} gap={12}>
            <Button
                gap={1}
                _hover={{
                    bg: 'green.green500',
                    color: 'white',
                    border: '1px solid white'
                }}
                w={"100%"}
                onClick={() => onEdit(contact)}
            >
                <BiEditAlt size={20} /> Editar
            </Button>

            <Button
                _hover={{
                    bg: 'red.700',
                    color: 'black.100'
                }}
                gap={1}
                w={"100%"}
                onClick={() => onDelete(contact)}
            >
                <BiTrash size={20} /> Deletar
            </Button>
        </CardFooter>
    </Card>
)