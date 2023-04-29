import './App.css';
import React,{useEffect, useState} from 'react'
import axios from 'axios'

const URL = `https://jsonplaceholder.typicode.com/users`;

function App() {
  const [data,setData] = useState([]);
  const [load,setLoading] = useState(false);

  //using axios
  useEffect(()=>{
    const loadPost = async () =>{
      setLoading(true);
      const reponse = await axios.get(URL);

      setData(reponse.data);

      setLoading(false);
      console.log("data" , reponse.data);
    }

    loadPost();
  },[])

  return (
    <div>
      {load ? 
        <h1>The page is loading .. </h1> :
        (data.map((e)=> 
          <ul key={e.id}>
            <li>{e.name}</li>
          </ul>
        ))

      }
    </div>
  );
}

export default App;
