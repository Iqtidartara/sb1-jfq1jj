import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Percent, Calendar, PiggyBank, TrendingUp } from 'lucide-react';

const financialData = [
  { title: 'PURCHASE PRICE', value: '$96,000.00', icon: DollarSign, color: 'bg-green-500' },
  { title: 'DEPOSIT', value: '$96,000.00', icon: Percent, color: 'bg-yellow-500' },
  { title: 'WEEKLY RENT', value: '$96,000.00', icon: Calendar, color: 'bg-blue-500' },
  { title: 'MORTGAGE REPAYMENTS', value: '$96,000.00', icon: PiggyBank, color: 'bg-cyan-500' },
  { title: 'NET MONTHLY INCOME', value: '$96,000.00', icon: DollarSign, color: 'bg-pink-500' },
  { title: 'MONTHLY INCOME AFTER TAX SAVINGS', value: '$96,000.00', icon: TrendingUp, color: 'bg-purple-500' },
];

export default function FinancialOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
      {financialData.map((item, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className={`${item.color} p-3 rounded-full`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}