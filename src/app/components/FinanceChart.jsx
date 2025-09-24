"use client";
import Image from "next/image";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 60,
    expense: 10,
  },
  {
    name: "Feb",
    income: 120,
    expense: 10,
  },
  {
    name: "Mar",
    income: 600,
    expense: 100,
  },
  {
    name: "Apr",
    income: 300,
    expense: 20,
  },
  {
    name: "May",
    income: 810,
    expense: 1000,
  },
  {
    name: "Jun",
    income: 700,
    expense: 110,
  },
  {
    name: "Jul",
    income: 1600,
    expense: 1000,
  },
  {
    name: "Aug",
    income: 1200,
    expense: 900,
  },
  {
    name: "Sep",
    income: 360,
    expense: 10,
  },
  {
    name: "Oct",
    income: 1600,
    expense: 1000,
  },
  {
    name: "Nov",
    income: 360,
    expense: 10,
  },
  {
    name: "Des",
    income: 1600,
    expense: 500,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="moreDark png" width={20} height={20} />
      </div>
      {/* FinanceChart */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            alight="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#fae27c"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="expense" stroke="#c3ebfa" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
