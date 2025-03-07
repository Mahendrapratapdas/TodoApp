import { useState, useEffect } from "react";

const InternetStatus = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOffline) return null; // Hide if online

  return (
    <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-center p-3 font-bold">
      ⚠️ No Internet Connection. Please check your network.
    </div>
  );
};

export default InternetStatus;