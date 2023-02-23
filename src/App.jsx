import { useEffect, useState } from "react";
import "./App.css";
import "./Radio";
import Radio from "./Radio";

function App() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=4")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setChannels(data.channels);
      });
  }, []);

  return (
    <div className=" m-4 ">
      <h1 className=" mb-4 text-2xl underline">Sverige Radio Player</h1>
      {channels.map((channel) => {
        return <Radio channel={channel} />;
      })}
    </div>
  );
}

export default App;
