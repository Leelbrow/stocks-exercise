import { FC, JSX } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PropsWithClassName } from "../../../_shared/types/general.types";
import { StockPrices } from "../../../_shared/types/model.types";

type ChartProps = PropsWithClassName<{
  readonly data: StockPrices[];
}>;

const Chart: FC<ChartProps> = ({ data, className }): JSX.Element => {
  return (
    <ResponsiveContainer className={className} width="100%" height={400}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="high" />
        <XAxis dataKey="date" />
        <YAxis
          label={{
            value: "Highest price",
            style: { textAnchor: "middle" },
            angle: -90,
            position: "left",
            offset: -2,
          }}
        />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
