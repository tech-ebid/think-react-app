
export default function Clock({ time }) {
  let hours = time.getHours();
  let timeClass = hours >= 0 && hours <= 6 ? "night" : "day";
  return (    
    <h1 id="time" className={timeClass}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
