import {
    ArcElement,
    BarController,
    BarElement,
    CategoryScale,
    Chart,
    ChartData,
    ChartOptions,
    Filler,
    LineController,
    LineElement,
    LinearScale,
    PieController,
    PointElement,
    Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { DataGraphicLanguage } from '..';
import { Box, Text } from '@chakra-ui/react';

Chart.register(
    ArcElement,
    BarController,
    BarElement,
    CategoryScale,
    LineController,
    LineElement,
    LinearScale,
    PieController,
    PointElement,
    Filler,
    Tooltip
);

export function LanguagesDataGraphic({ dataBarLanguage, optionsBarLanguage }: DataGraphicLanguage) {
    return (
        <Box p={"1rem"} bg={"black.50"} border={"1px solid"} borderColor={"black.200"} w={"100%"}>
            <Text>Idiomas</Text>
            <Box w={"100%"}>
                <Bar width={"100%"} height={"80rem"} data={dataBarLanguage} options={optionsBarLanguage} />
            </Box>
        </Box>
    )
}