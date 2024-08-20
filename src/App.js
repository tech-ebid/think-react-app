import { useState, useEffect } from "react";
import "./App.css";
import Clock from "./components/Clock";
const currentTime = new Date();
function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return <Clock time={currentTime} />;
}

export default App;
