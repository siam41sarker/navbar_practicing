import { Bar, BarChart, CartesianGrid, LineChart as LCharts, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const marks = [
    { id: 1, name: "Alice", math: 85, english: 78, science: 92 },
    { id: 2, name: "Bob", math: 72, english: 81, science: 75 },
    { id: 3, name: "Charlie", math: 90, english: 88, science: 91 },
    { id: 4, name: "David", math: 65, english: 70, science: 68 },
    { id: 5, name: "Eva", math: 88, english: 92, science: 85 },
    { id: 6, name: "Frank", math: 77, english: 74, science: 80 },
    { id: 7, name: "Grace", math: 95, english: 89, science: 94 },
    { id: 8, name: "Hannah", math: 60, english: 65, science: 70 },
    { id: 9, name: "Ian", math: 82, english: 79, science: 84 },
    { id: 10, name: "Jack", math: 69, english: 73, science: 76 },
  ];
  return (
    <div className="mt-20">
      <div className="md:ml-20 ">
        <LCharts width={1200} height={400} data={marks}>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <CartesianGrid strokeDasharray="5 3"></CartesianGrid>
          <Tooltip></Tooltip>
          <Legend></Legend>
          <Line dataKey="math" stroke="blue"></Line>
          <Line dataKey="english" stroke="red"></Line>
          <Line dataKey="science" stroke="green"></Line>
        </LCharts>
      </div>
      <div className="md:ml-20 mt-20 mb-10">
        <BarChart width={1200} height={400} data={marks}>
            <CartesianGrid strokeDasharray="5 3"></CartesianGrid>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Bar dataKey="math" fill="blue"></Bar>
            <Bar dataKey="english" fill="red"></Bar>
            <Bar dataKey="science" fill="green"></Bar>
        </BarChart>
      </div>
    </div>
  );
};
export default LineChart;
