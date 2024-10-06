"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 2000000 },
  { name: 'Feb', value: 2500000 },
  { name: 'Mar', value: 3000000 },
  { name: 'Apr', value: 2800000 },
  { name: 'May', value: 3200000 },
  { name: 'Jun', value: 3500000 },
  { name: 'Jul', value: 3100000 },
  { name: 'Aug', value: 3400000 },
  { name: 'Sep', value: 3700000 },
  { name: 'Oct', value: 3900000 },
  { name: 'Nov', value: 4100000 },
  { name: 'Dec', value: 4300000 },
];

export default function BudgetOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Budget Overview</CardTitle>
        <Select defaultValue="lastYear">
          <SelectTrigger className="w-[120px] sm:w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lastYear">Last Year</SelectItem>
            <SelectItem value="lastMonth">Last Month</SelectItem>
            <SelectItem value="lastWeek">Last Week</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="pt-2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="hsl(var(--primary))" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}