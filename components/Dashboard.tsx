"use client"

import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ClientInfo from './ClientInfo';
import FinancialOverview from './FinancialOverview';
import BudgetOverview from './BudgetOverview';
import PercentageChart from './PercentageChart';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState({
    name: 'Fred Van Urk',
    address: 'Leichhart, NSW 2024',
    phone: '0403705106',
    email: 'fred@ppig.com.au',
    propertyAddress: 'Moore Creek, Tamworth',
    propertyType: 'Duplex',
    contractType: 'Split Contract',
    land: '$ 269,000',
    house: '$ 697,5000',
  });

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header name={selectedClient.name} onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <ClientInfo client={selectedClient} />
            <FinancialOverview />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <BudgetOverview />
              <PercentageChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}