import React from "react"
import { Doughnut } from "react-chartjs-2"
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"
Chart.register(ArcElement, Tooltip, Legend)

interface SimpleDonutChartProps {
  labels: string[]
  name: string
  values: number[]
  backgroundColor?: string[]
}

export default function SimpleDonutChart({
  name,
  labels,
  values,
  backgroundColor,
}: SimpleDonutChartProps) {
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
    cutout: "50%",
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.dataset.data[context.dataIndex]
            const numberValue = value !== null ? value : "N/A"
            return `Number: ${numberValue}`
          },
        },
      },
    },
  }

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  )
}
