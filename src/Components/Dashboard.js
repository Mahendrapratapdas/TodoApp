import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Body = lazy(() => import("./Body"));
const About = lazy(() => import("./Aboutus"));
const Loading = lazy(()=> import("./Loading"));

const Dashboard = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center"><Loading/></div>}>
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default Dashboard;