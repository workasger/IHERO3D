import React from "react";
import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Preview from "@/pages/Preview";
import Model from "@/pages/Model";
import Order from "@/pages/Order";
import Settings from "@/pages/Settings";
import Help from "@/pages/Help";
import CosmicBackground from "@/components/CosmicBackground";
import SuccessModal from "@/components/SuccessModal";
import { useAppContext } from "@/contexts/AppContext";

// Router component that handles the routes
const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/preview" component={Preview} />
      <Route path="/model" component={Model} />
      <Route path="/order" component={Order} />
      <Route path="/settings" component={Settings} />
      <Route path="/help" component={Help} />
      <Route component={NotFound} />
    </Switch>
  );
};

// Main App component
const App = () => {
  // Using the app context
  const { animationsEnabled } = useAppContext();
  
  return (
    <div className="min-h-screen bg-background cosmic-bg text-foreground font-roboto">
      {animationsEnabled && <CosmicBackground />}
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 pb-12 relative z-10">
        <AppRouter />
      </main>
      <SuccessModal />
    </div>
  );
};

export default App;