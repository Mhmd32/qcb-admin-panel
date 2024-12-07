import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, List, Globe, FileText, Ban } from 'lucide-react';

const DashboardCard = ({ icon: Icon, title, path }: { icon: any, title: string, path: string }) => {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate(path)}
      className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center space-y-4"
    >
      <Icon size={32} className="text-blue-600" />
      <span className="font-medium text-gray-800">{title}</span>
    </button>
  );
};

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard icon={Settings} title="Settings" path="/settings" />
        <DashboardCard icon={List} title="List" path="/list" />
        <DashboardCard icon={Globe} title="Web Content" path="/web-content" />
        <DashboardCard icon={FileText} title="Documents" path="/documents" />
        <DashboardCard icon={Ban} title="Excluded Web Pages" path="/excluded" />
      </div>
    </div>
  );
};