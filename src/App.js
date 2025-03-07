import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
const Dashboard = lazy(() => import("../src/Components/Dashboard"));
const Header = lazy(() => import("../src/Components/Header"));
const Footer = lazy(() => import("../src/Components/Footer"));
const Offline = lazy(() => import("../src/Components/InternetStatus"));
const Loading = lazy(() => import("../src/Components/Loading"));

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Suspense fallback={<div className="flex justify-center items-center"><Loading/></div>}>
          <Offline />
          <Header />
          <div className="flex-grow">
            <Dashboard />
          </div>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
