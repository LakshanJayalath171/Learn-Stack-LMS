"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A line chart with dots"

const chartData = [
  { month: "January", students: 186, mobile: 80 },
  { month: "February", students: 305, mobile: 200 },
  { month: "March", students: 237, mobile: 120 },
  { month: "April", students: 73, mobile: 190 },
  { month: "May", students: 209, mobile: 130 },
  { month: "June", students: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "students",
    color: "#2ED8CF",
  },
  mobile: {
    label: "Mobile",
    color: "#F59E0B",
  },
} satisfies ChartConfig

export function ChartLineDots({footerText}: {footerText?: string}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary font-bold text-lg">Students count</CardTitle>
        <CardDescription className="text-secondary font-light text-sm">
          past 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="students"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          {footerText}
        </div>
      </CardFooter>
    </Card>
  )
}
