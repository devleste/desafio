"use client"

import { columns } from "../components/columns"
import { DataTable } from "../components/data-table"
import { useContactStore } from "@/db/storage"
import SimpleDonutChart from "@/components/SimpleDonutChart"
import { getUniquePropertyValues } from "@/utils/getUniqueProperty"
import HorizontalBarChart from "@/components/HorizontalBarChart"

export default function Page() {
  const { contacts } = useContactStore()

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Leste Telecom
            </h2>
            <p className="text-muted-foreground">
              Aplicativo de lista de contatos
            </p>
          </div>
        </div>
        <DataTable columns={columns} data={contacts} />

        <div className="flex flex-col gap-6">
          <span className="text-xl">Dados Estatísticos</span>
          <span className="mb-7">{`Total de contatos: ${contacts.length}`}</span>

          <div className="flex flex-col items-center gap-7 md:flex-row justify-center">
            <HorizontalBarChart
              name="Número de pessoas por idioma"
              labels={getUniquePropertyValues(contacts, "language").map(
                (language) => language
              )}
              values={getUniquePropertyValues(contacts, "language").map(
                (language) =>
                  contacts.filter((contact) => contact.language === language)
                    .length
              )}
              backgroundColor={["#16A64A"]}
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <SimpleDonutChart
              name="% de pessoa por gênero"
              labels={["Masculino", "Feminino"]}
              values={[
                contacts.filter((contact) => contact.gender === "M").length,
                contacts.filter((contact) => contact.gender === "F").length,
              ]}
              backgroundColor={["blue", "violet"]}
            />
          </div>
        </div>
      </div>
    </>
  )
}
