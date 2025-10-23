"use client";
import { BarChart, XAxis, Bar, YAxis, ResponsiveContainer } from "recharts";

export default function Charts({
  data: { salesData },
}: {
  data: { salesData: { month: string; totalSales: number }[] };
}) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={salesData}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="totalSales" fill="currentColor" />
      </BarChart>
    </ResponsiveContainer>
  );
}
