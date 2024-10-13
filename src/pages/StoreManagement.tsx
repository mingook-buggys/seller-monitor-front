import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';

const StoreManagement: React.FC = () => {
  const [stores, setStores] = useState([
    { id: 1, name: 'Electronics Hub', url: 'https://electronics-hub.com', category: 'Electronics', products: 250, revenue: '$25,000' },
    { id: 2, name: 'Fashion World', url: 'https://fashion-world.com', category: 'Fashion', products: 500, revenue: '$40,000' },
    { id: 3, name: 'Home Decor', url: 'https://home-decor.com', category: 'Home & Garden', products: 150, revenue: '$15,000' },
    { id: 4, name: 'Gadget Galaxy', url: 'https://gadget-galaxy.com', category: 'Electronics', products: 300, revenue: '$30,000' },
    { id: 5, name: 'Outdoor Adventures', url: 'https://outdoor-adventures.com', category: 'Sports & Outdoors', products: 200, revenue: '$20,000' },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Store Management</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search stores..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Add Store
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {stores.map((store) => (
              <tr key={store.id}>
                <td className="px-6 py-4 whitespace-nowrap">{store.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{store.url}</td>
                <td className="px-6 py-4 whitespace-nowrap">{store.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{store.products}</td>
                <td className="px-6 py-4 whitespace-nowrap">{store.revenue}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900">Edit</button>
                  <button className="ml-4 text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreManagement;