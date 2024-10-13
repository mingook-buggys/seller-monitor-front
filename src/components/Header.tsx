import React from 'react';
import { Link } from 'react-router-dom';
import { Store, BarChart2, Settings, LogOut } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">SellerMonitor</Link>
        <div className="flex space-x-4">
          <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600">
            <Store className="w-5 h-5 mr-1" />
            Dashboard
          </Link>
          <Link to="/stores" className="flex items-center text-gray-600 hover:text-blue-600">
            <Store className="w-5 h-5 mr-1" />
            Stores
          </Link>
          <Link to="/data" className="flex items-center text-gray-600 hover:text-blue-600">
            <BarChart2 className="w-5 h-5 mr-1" />
            Data
          </Link>
          <Link to="/settings" className="flex items-center text-gray-600 hover:text-blue-600">
            <Settings className="w-5 h-5 mr-1" />
            Settings
          </Link>
          <Link to="/login" className="flex items-center text-gray-600 hover:text-blue-600">
            <LogOut className="w-5 h-5 mr-1" />
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;