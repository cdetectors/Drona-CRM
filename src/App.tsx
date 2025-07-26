import React, { useState } from 'react';
import { User, ChevronDown, Settings, Moon, Sun, Bell, HelpCircle, LogOut } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Cases from './components/Cases';
import Courses from './components/Courses';
import SalesFunnel from './components/SalesFunnel';
import Analytics from './components/Analytics';
import Contacts from './components/Contacts';
import Documents from './components/Documents';
import Marketing from './components/Marketing';
import IncidentResponse from './components/IncidentResponse';
import Communications from './components/Communications';
import KnowledgeBase from './components/KnowledgeBase';
import AuditLogs from './components/AuditLogs';
import Reports from './components/Reports';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'cases':
        return <Cases />;
      case 'courses':
        return <Courses />;
      case 'sales':
        return <SalesFunnel />;
      case 'analytics':
        return <Analytics />;
      case 'contacts':
        return <Contacts />;
      case 'documents':
        return <Documents />;
      case 'marketing':
        return <Marketing />;
      case 'incident-response':
        return <IncidentResponse />;
      case 'communications':
        return <Communications />;
      case 'knowledge-base':
        return <KnowledgeBase />;
      case 'audit-logs':
        return <AuditLogs />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 ml-64 p-6">
        {/* Header with Profile Menu */}
        <div className="flex items-center justify-end mb-6">
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all"
            >
              <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-slate-900">Sarah Johnson</p>
                <p className="text-xs text-slate-500">Senior Investigator</p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-slate-200">
                  <p className="text-sm font-medium text-slate-900">Sarah Johnson</p>
                  <p className="text-xs text-slate-500">sarah.johnson@dronashield.com</p>
                </div>
                
                <div className="py-2">
                  <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center space-x-3">
                    <User className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center space-x-3">
                    <Settings className="w-4 h-4" />
                    <span>Account Settings</span>
                  </button>
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center space-x-3"
                  >
                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center space-x-3">
                    <Bell className="w-4 h-4" />
                    <span>Notifications</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center space-x-3">
                    <HelpCircle className="w-4 h-4" />
                    <span>Help & Support</span>
                  </button>
                </div>
                
                <div className="border-t border-slate-200 pt-2">
                  <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3">
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;