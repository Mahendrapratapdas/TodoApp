import { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
const Card = lazy(() => import("./Developercard"));
const Loading = lazy(()=> import("./Loading"));
const MAHENDRA_PROFILE = process.env.REACT_APP_MAHENDRA_GITHUB;
const RAJESH_PROFILE = process.env.REACT_APP_RAJESH_GITHUB;
const PRAMOD_PROFILE = process.env.REACT_APP_PRAMOD_GITHUB;

const About = () => {
    const [devData, SetDevData] = useState([]);
    localStorage.setItem("exist", "true")
    useEffect(() => {
        const fetchAPIs = async () => {
            try {
                const [response1, response2, response3] = await Promise.all([
                    axios.get(MAHENDRA_PROFILE),
                    axios.get(RAJESH_PROFILE),
                    axios.get(PRAMOD_PROFILE),
                ]);
                // Combine all responses into a single array
                SetDevData([response1.data, response2.data, response3.data]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchAPIs();
    }, [])
    return (
        <div className="flex flex-col items-center justify-center m-10">
            <h2 className="font-bold text-4xl">🚀 Meet Our Development Team 🧑‍💻</h2>
            <div className="flex flex-wrap gap-4 my-10">
                <Suspense fallback={<div className="flex justify-center items-center"><Loading/></div>}>
                    {devData.map((item, index) => (
                        <Card data={item} key={index} />
                    ))}
                </Suspense>
            </div>
        </div>
    )
}

export default About;