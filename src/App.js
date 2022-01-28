import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./UserList.js";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (res) {
        console.log(res.data);
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
        setError(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="h1">this is the list </h1>

      <UserList data={data} />
    </div>
  );
}

export default App;