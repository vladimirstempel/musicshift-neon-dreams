
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Pop", songs: 324 },
  { name: "Rock", songs: 207 },
  { name: "Hip-Hop", songs: 189 },
  { name: "Electronic", songs: 167 },
  { name: "R&B", songs: 124 },
  { name: "Jazz", songs: 68 },
  { name: "Classical", songs: 43 },
];

export function LibraryStats() {
  return (
    <Card className="synthwave-card">
      <CardHeader>
        <CardTitle>Library Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
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
            />
            <Bar 
              dataKey="songs" 
              radius={[4, 4, 0, 0]} 
              className="fill-neon-purple hover:fill-neon-pink"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
