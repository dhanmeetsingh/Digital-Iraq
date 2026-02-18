import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';


// Solution Pages
import Automation from './pages/solutions/Automation';
import CustomerEngagement from './pages/solutions/CustomerEngagement';
import ManualProcesses from './pages/solutions/ManualProcesses';
import OnlinePresence from './pages/solutions/OnlinePresence';
import OutdatedSystems from './pages/solutions/OutdatedSystems';
import SearchVisibility from './pages/solutions/SearchVisibility';

// Tech Pages
import AIChatbots from './pages/tech/AIChatbots';
import Backend from './pages/tech/Backend';
import Frontend from './pages/tech/Frontend';
import N8nAutomation from './pages/tech/N8nAutomation';

function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl text-gray-400">Page Not Found</p>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      
      // Solution Pages
      { path: 'solutions/online-presence', element: <OnlinePresence /> },
      { path: 'solutions/manual-processes', element: <ManualProcesses /> },
      { path: 'solutions/customer-engagement', element: <CustomerEngagement /> },
      { path: 'solutions/automation', element: <Automation /> },
      { path: 'solutions/outdated-systems', element: <OutdatedSystems /> },
      { path: 'solutions/search-visibility', element: <SearchVisibility /> },
      
      // Tech Pages
      { path: 'tech/frontend', element: <Frontend /> },
      { path: 'tech/backend', element: <Backend /> },
      { path: 'tech/n8n-automation', element: <N8nAutomation /> },
      { path: 'tech/ai-chatbots', element: <AIChatbots /> },
      { path: 'tech/seo', element: <AIChatbots /> }, // Reusing for now
      { path: 'tech/ago', element: <AIChatbots /> }, // Reusing for now
      
      // 404
      { path: '*', element: <NotFound /> },
    ],
  },
]);
