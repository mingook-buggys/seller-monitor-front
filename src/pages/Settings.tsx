import React from 'react';
import { Bell, Clock, Lock, User } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Account Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2" />
            Notification Settings
          </h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="email-notifications" name="email-notifications" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-900">Email Notifications</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="push-notifications" name="push-notifications" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="push-notifications" className="ml-2 block text-sm text-gray-900">Push Notifications</label>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Data Collection Settings
          </h2>
          <div>
            <label htmlFor="collection-frequency" className="block text-sm font-medium text-gray-700">Data Collection Frequency</label>
            <select id="collection-frequency" name="collection-frequency" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
              <option>Every hour</option>
              <option>Every 6 hours</option>
              <option>Daily</option>
              <option>Weekly</option>
            </select>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Lock className="w-5 h-5 mr-2" />
            Privacy Settings
          </h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="data-sharing" name="data-sharing" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="data-sharing" className="ml-2 block text-sm text-gray-900">Allow data sharing for analytics</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;