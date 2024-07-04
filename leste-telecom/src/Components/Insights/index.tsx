import { Box, Flex } from "@chakra-ui/react";
import ParamsContextProvider, { useContextGlobal } from "../Context";
import { GendersDataGraphic } from "./gendersDataGraphic";
import { LanguagesDataGraphic } from "./languagesDataGraphic";
import { ChartData, ChartOptions } from "chart.js";
import { Fragment, useState } from "react";
import { Contact } from "@/types/interfaces/contact";
import { contacts } from "@/services/getLesteTelecom";
import { FiltersComponents } from "@/utils/FiltersInCardComponent";

export interface DataGraphic {
    dataBar: ChartData<"bar", (number | [number, number] | null)[], unknown>;
    optionsBar: ChartOptions<"bar">;
}

export interface DataGraphicLanguage {
    dataBarLanguage: ChartData<"bar", (number | [number, number] | null)[], unknown>;
    optionsBarLanguage: ChartOptions<"bar">;
}

export function InsightsComponent() {

    const males = contacts.filter(contact => contact.gender === 'M').length;
    const Female = contacts.filter(contact => contact.gender === 'F').length;

    const Indonesian = contacts.filter(contact => contact.language === 'Indonesian').length
    const Latvian = contacts.filter(contact => contact.language === 'Latvian').length
    const Persian = contacts.filter(contact => contact.language === 'Persian').length
    const Kurdish = contacts.filter(contact => contact.language === 'Kurdish').length
    const Danish = contacts.filter(contact => contact.language === 'Danish').length
    const Lithuanian = contacts.filter(contact => contact.language === 'Lithuanian').length
    const Albanian = contacts.filter(contact => contact.language === 'Albanian').length
    const Belarusian = contacts.filter(contact => contact.language === 'Belarusian').length
    const Tswana = contacts.filter(contact => contact.language === 'Tswana').length
    const NorthernSotho = contacts.filter(contact => contact.language === 'Northern Sotho').length
    const Swedish = contacts.filter(contact => contact.language === 'Swedish').length
    const Dutch = contacts.filter(contact => contact.language === 'Dutch').length
    const Thai = contacts.filter(contact => contact.language === 'Thai').length
    const Dzongkha = contacts.filter(contact => contact.language === 'Dzongkha').length
    const Aymara = contacts.filter(contact => contact.language === 'Aymara').length
    const Bosnian = contacts.filter(contact => contact.language === 'Bosnian').length
    const Catalan = contacts.filter(contact => contact.language === 'Catalan').length
    const Assamese = contacts.filter(contact => contact.language === 'Assamese').length
    const Mongolian = contacts.filter(contact => contact.language === 'Mongolian').length

   /*  console.log(contacts.map((item, idx) => {
        return item.language
    })) */


    const dataBar: ChartData<"bar", (number | [number, number] | null)[], unknown> = {
        labels: [
            'Masculino',
            'Feminino'
        ],
        datasets: [
            {
                label: 'Dados',
                data: [males, Female],
                borderWidth: 5,
                backgroundColor: ['blue', 'purple'],
                borderRadius: 0
            },
        ],
    };

    const optionsBar: ChartOptions<"bar"> = {
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Total de Receita por Mês',
                font: {
                    size: 16
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        }
    };

    const dataBarLanguage: ChartData<"bar", (number | [number, number] | null)[], unknown> = {
        labels: [
            'Indonesian',
            'Latvian',
            'Persian',
            'Kurdish',
            'Danish',
            'Lithuanian',
            "Albanian",
            "Belarusian",
            "Tswana",
            "Northern Sotho",
            "Swedish",
            "Dutch",
            "Thai",
            "Dzongkha",
            "Aymara",
            "Bosnian",
            "Catalan",
            "Assamese",
            "Mongolian",
        ],
        datasets: [
            {
                label: 'Total:',
                data: [
                    Indonesian, 
                    Latvian, 
                    Persian,
                    Kurdish,
                    Danish,
                    Lithuanian,
                    Albanian,
                    Belarusian,
                    Tswana,
                    NorthernSotho,
                    Swedish,
                    Dutch,
                    Thai,
                    Dzongkha,
                    Aymara,
                    Bosnian,
                    Catalan,
                    Assamese,
                    Mongolian
                ],
                borderColor: '#00c20d',
                borderWidth: 5,
                backgroundColor: '#00c20d',
                borderRadius: 0
            },
        ],
    };

    const optionsBarLanguage: ChartOptions<"bar"> = {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Total de Receita por Mês',
                font: {
                    size: 16
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        }
    };

    return (
        <ParamsContextProvider>
            <Flex
                w={"100%"}
                flexDir={{ xs: 'column', tabletLandscape: 'row' }}
            >
                <Box flex={1} p={"1rem"}> {/* BOX DE GENEROS */}
                    <GendersDataGraphic
                        dataBar={dataBar}
                        optionsBar={optionsBar}
                    />
                </Box>

                <Box flex={1} p={"1rem"}> {/* BOX DE IDIOMAS */}
                    <LanguagesDataGraphic
                        dataBarLanguage={dataBarLanguage}
                        optionsBarLanguage={optionsBarLanguage}
                    />
                </Box>
            </Flex>
        </ParamsContextProvider>
    );
}
