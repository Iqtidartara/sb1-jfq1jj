import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface ClientInfoProps {
  client: {
    name: string;
    address: string;
    phone: string;
    email: string;
    propertyAddress: string;
    propertyType: string;
    contractType: string;
    land: string;
    house: string;
  };
}

export default function ClientInfo({ client }: ClientInfoProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-semibold">Client Information</CardTitle>
        <Button variant="outline" size="sm">+ Add Inputs</Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(client).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <Label htmlFor={key} className="text-sm font-medium">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
              </Label>
              <Input id={key} value={value} readOnly className="bg-muted" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}