import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://fe-task-api.mainstack.io");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <div>App</div>;
};

export default App;
