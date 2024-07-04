import { contacts } from "@/services/getLesteTelecom";
import { VariablesEditForm } from "@/types/interfaces/editInputsForm";
import { calculateAge } from "@/utils/calculateAge/calculateAge";
import { formatDateEditForm } from "@/utils/formatDate";
import { Box, Flex, Img, Input, Select, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export function EditInputsForm({
    contact,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    birthday,
    setBirthday,
    gender,
    setGender,
    language,
    setLanguage,
    email,
    setEmail,
    urlAvatar,
    setUrlAvatar,
    age,
    setAge
}: VariablesEditForm) {

    function handleBirthdayChange(e: React.ChangeEvent<HTMLInputElement>) {
        const formattedValue = formatDateEditForm(e.target.value);
        setBirthday(formattedValue);
    };

    function handleAgeChange(e: React.ChangeEvent<HTMLInputElement>) {
        const formattedAge = calculateAge(e.target.value);

        setAge(formattedAge);
    };

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
                        _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
                        mb={"1rem"}
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Box>

                <Box>
                    <Text>Last Name</Text>
                    <Input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Box>
            </Flex>

            <Flex justify={"center"} gap={4}>
                <Box>
                    <Text>Data de nascimento</Text>
                    <Input
                        name="birthday"
                        value={birthday}
                        onChange={handleBirthdayChange}
                        mb={"1rem"}
                        type="text"
                        placeholder="YYYY-MM-DD"
                        maxLength={10}
                        _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
                    />
                </Box>

                <Box>
                    <Text>Idade</Text>
                    <Input
                        name="birthday"
                        value={age}
                        onChange={handleAgeChange}
                        mb={"1rem"}
                        type="text"
                        placeholder="YYYY-MM-DD"
                        maxLength={2}
                        _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
                    />
                </Box>
            </Flex>

            <Text>Email</Text>
            <Input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                mb={"1rem"}
                type="text"
                placeholder="Email"
                _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
            />

            <Text>Avatar URL</Text>
            <Input
                name="avatar"
                value={urlAvatar}
                onChange={(e) => setUrlAvatar(e.target.value)}
                mb={"1rem"}
                type="url"
                placeholder="Avatar URL"
                _focus={{ outline: 0, border: '1px solid', borderColor: 'green.green600' }}
            />

            <Flex gap={4} justify={"center"}>
                <Box>
                    <Text>Gênero</Text>
                    <Select
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
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
                        name="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
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