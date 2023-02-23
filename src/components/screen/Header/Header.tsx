import { useEffect, useState, useMemo } from "react";

export const Header = () => {
  const [time, setTime] = useState(() => {
    const date = new Date();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${hour}:${minute}`;
  });

  const date = useMemo(() => {
    const date = new Date();
    const day = date.getDay();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return `${week[day]} ${dayOfMonth} ${monthName[month]} ${year}`;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
      const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      setTime(`${hour}:${minute}`);
    }, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-sm font-mono bg-background border-gray-200 border-b py-1 w-full flex flex-row items-center">
      <div className="grow border-r border-gray-200 h-full flex items-center px-3">
        <p className="text-gray-200">imaimai&#39;s portfolio</p>
      </div>
      <div className="h-full flex items-center px-3">
        <p className="text-gray-200">{time}</p>
      </div>
      <div className="border-l border-gray-200 h-full flex items-center px-3">
        <p className="text-gray-200">{date}</p>
      </div>
    </div>
  );
};

export default Header;
