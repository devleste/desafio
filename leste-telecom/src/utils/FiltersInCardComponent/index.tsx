import { Fragment } from "react";
import { FiltersGenders } from "../filters";
import { Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { useContextGlobal } from "@/Components/Context";
import { contacts } from "@/services/getLesteTelecom";

interface FiltersComponentsProps {
    onGenderChange: (gender: string) => void;
    handleLanguageChange: (language: string) => void;
}

export const FiltersComponents: React.FC<FiltersComponentsProps> = ({ onGenderChange, handleLanguageChange }) => {
    const { selectedGender, setSelectedGender, filterByAge, setSelectedLanguage } = useContextGlobal();

    const handleGenderChangeFilter = (value: string) => {
        setSelectedGender(value);
        onGenderChange(value);
        console.log("valor clicado:", value)
    };

    const handleAgeFilterChange = (value: string) => {
        filterByAge(value);
    };

    const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedLanguage(value);
        handleLanguageChange(value);
    };

    return (
        <>
            {/* Filtragem por gênero */}
            {FiltersGenders.map((item, idx) => (
                <Fragment key={idx}>
                    <Text color={"green.green500"} mb={"0.5rem"} fontSize={"1.25rem"}>{item.title}</Text>
                    <RadioGroup value={selectedGender} onChange={handleGenderChangeFilter}>
                        <Stack>
                            <Fragment key={item.value}>
                                <Radio value={item.value}>{item.options}</Radio>
                            </Fragment>
                        </Stack>
                    </RadioGroup>
                </Fragment>
            ))}

            {/* Filtragem por Data de nascimento */}
            <Text color={"green.green500"} mb={"0.5rem"} fontSize={"1.25rem"}>Idade</Text>
            <RadioGroup defaultValue='' onChange={handleAgeFilterChange}>
                <Stack>
                    <Radio value="older">Mais de 30 anos</Radio>
                    <Radio value="younger">Menos de 30 anos</Radio>
                </Stack>
            </RadioGroup>

            {/* Filtragem por idioma */}
            <Text color={"green.green500"} mb={"0.5rem"} fontSize={"1.25rem"}>Idiomas</Text>
            <Select value={""} onChange={handleChangeLanguage}>
                {contacts.map((item, idx) => (
                    <Fragment key={idx}>
                        <option value={item.language}>{item.language}</option>
                    </Fragment>
                ))}
            </Select>
        </>
    );
};
