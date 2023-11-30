import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { insightService } from "../services/insightService";

function InsightsView() {
  const byGender = insightService.byGender();
  const byLanguage = insightService.byLanguage();

  return (
    <>
      <div className="p-wrap w-full h-full">
        <h1 className="text-primary-dark-darker my-6 text-xl font-bold">
          Análise dos Contatos
        </h1>
        <h1 className="text-lg text-charcoal-green">Gênero</h1>
        <div className="mt-4 mb-8 flex item-start">
          <BarChart width={312} height={192} data={byGender}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"gender"} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="var(--c-primary)" />
          </BarChart>
        </div>
        <h1 className="text-lg text-charcoal-green">Idioma</h1>
        <div className="max-w-md md:max-w-none overflow-x-auto">
          <BarChart width={816} height={256} data={byLanguage}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"language"} />
            <YAxis interval={1} />
            <Tooltip />
            <Bar dataKey="count" fill="var(--c-primary)" />
          </BarChart>
        </div>
      </div>
    </>
  );
}
export default InsightsView;
