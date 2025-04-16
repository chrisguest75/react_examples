"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,

} from "@/components/ui/chart"

export type ChartValue = {
  time: string
  rms: number
}
export type HistoryChartProps = {
  values: ChartValue[]
}

export function HistoryChart(props: HistoryChartProps) {
  // add data to the chart
  const chartData = props.values

  const chartConfig = {
    rms: {
      label: "rms",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  return (
    <Card>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar
              dataKey="rms"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
