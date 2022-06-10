import "./App.css";
import Day from "./components/Day"

export default function App() {


  const dates = Array.from({length: 28}, (x, i) => i + 1)
  return (
    <div className="App">
      <h1>React Calendar</h1>
      <div className="Calendar-Wrapper">
      {dates.map((today, id) => 
        <Day key={id} today={today}/>
      ) }
      </div>

    </div>
  );
}