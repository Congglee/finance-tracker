import CustomTooltip from "@/app/dashboard/_components/custom-tooltip";
import { format } from "date-fns";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface BarVariantProps {
  data: {
    date: string;
    income: number;
    expenses: number;
  }[];
}

export default function BarVariant({ data }: BarVariantProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" strokeOpacity="0.2" />
        <XAxis
          stroke="#888888"
          fontSize={12}
          axisLine={false}
          tickLine={false}
          dataKey="date"
          tickFormatter={(value) => format(value, "dd/MM")}
          tickMargin={16}
        />
        <Tooltip cursor={{ opacity: 0.1 }} content={<CustomTooltip />} />
        <Bar dataKey="income" fill="#3d82f6" className="drop-shadow-sm" />
        <Bar dataKey="expenses" fill="#f43f5e" className="drop-shadow-sm" />
      </BarChart>
    </ResponsiveContainer>
  );
}
