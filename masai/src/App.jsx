import  './App.css'
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  
  const News = () => {
    axios
      .get(`https://inshortsapi.vercel.app/news?category=science`)
      .then((res) => {
          console.log("res",res.data.category)
        setData(res.data.data);
      });
  };
  return (
    <div >
      <button onClick={News}>btn</button>
      {data.map((e, i) => {
        return (
          <div key={i} className="App">
            <div  className="div" >
            <h3>{e.title}</h3>
            <img src={e.imageUrl} alt="pic" />
            <p>{e.content}</p>
            <h4>{e.date}</h4>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
