import React from 'react';
import { BarChart2, ShoppingBag, Users, TrendingUp, Store } from 'lucide-react';

const Dashboard: React.FC = () => {
  const recentActivity = [
    { id: 1, action: 'New store added', store: 'Electronics Hub', time: '2 hours ago' },
    { id: 2, action: 'Price change detected', store: 'Fashion World', product: 'Summer Dress', oldPrice: '$49.99', newPrice: '$39.99', time: '4 hours ago' },
    { id: 3, action: 'New product listed', store: 'Home Decor', product: 'Vintage Wall Clock', time: '6 hours ago' },
    { id: 4, action: 'Traffic spike', store: 'Gadget Galaxy', increase: '200%', time: '1 day ago' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Stores" value="250" icon={<Store />} />
        <DashboardCard title="Active Products" value="1,500" icon={<ShoppingBag />} />
        <DashboardCard title="Total Revenue" value="$50,000" icon={<TrendingUp />} />
        <DashboardCard title="Unique Visitors" value="10,000" icon={<Users />} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="px-6 py-4">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500">
                  {activity.store}
                  {activity.product && ` - ${activity.product}`}
                  {activity.oldPrice && ` (${activity.oldPrice} → ${activity.newPrice})`}
                  {activity.increase && ` (${activity.increase} increase)`}
                </p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="text-blue-500">{icon}</div>
      </div>
    </div>
  );
};

export default Dashboard;