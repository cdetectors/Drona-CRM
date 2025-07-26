import React from 'react';
import { LayoutDashboard, FileText, GraduationCap, TrendingUp, BarChart3, Users, FileBarChart, FolderOpen, Megaphone, Shield as Shield2, MessageSquare, BookOpen, Activity, Shield, ChevronRight } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'cases', label: 'Cases', icon: FileText },
  { id: 'courses', label: 'Courses', icon: GraduationCap },
  { id: 'sales', label: 'Sales Funnel', icon: TrendingUp },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'contacts', label: 'Contacts', icon: Users },
  { id: 'documents', label: 'Documents', icon: FolderOpen },
  { id: 'marketing', label: 'Marketing', icon: Megaphone },
  { id: 'incident-response', label: 'Incident Response', icon: Shield2 },
  { id: 'communications', label: 'Communications', icon: MessageSquare },
  { id: 'knowledge-base', label: 'Knowledge Base', icon: BookOpen },
  { id: 'audit-logs', label: 'Audit Logs', icon: Activity },
  { id: 'reports', label: 'Reports', icon: FileBarChart },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-slate-900 text-white shadow-2xl">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-cyan-600 rounded-lg">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Dronashield</h1>
            <p className="text-slate-400 text-sm">Cyber Forensics CRM</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 hover:bg-slate-800 ${
                isActive 
                  ? 'bg-slate-800 border-r-4 border-cyan-500 text-cyan-400' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
              {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          );
        })}
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700">
        <div className="text-center text-slate-400 text-sm">
          <p>© 2025 Dronashield</p>
          <p>Cyber Forensics Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;