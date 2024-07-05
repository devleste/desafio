import React from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js"
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
)

interface HorizontalBarChartProps {
  labels: string[]
  name: string
  values: number[]
  backgroundColor?: string[]
}

export default function HorizontalBarChart({
  name,
  labels,
  values,
  backgroundColor,
}: HorizontalBarChartProps) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: name,
        data: values,
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
      },
    ],
  }

  const options = {
    indexAxis: "y",
    responsive: true,
  }

  // @ts-ignore
  return <Bar data={data} options={options} />
}
