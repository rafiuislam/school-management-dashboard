"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 108,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#fae27c",
  },
  {
    name: "Boys",
    count: 55,
    fill: "#c3ebfa",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image
          src="/moreDark.png"
          alt="more dark icon"
          width={20}
          height={20}
        />
      </div>
      <div className="flex justify-around gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-cSky rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-cYellow rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
      {/* chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="maleFemale png"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 md:p-2"
        />
      </div>
      {/* bottom */}
    </div>
  );
};

export default CountChart;
