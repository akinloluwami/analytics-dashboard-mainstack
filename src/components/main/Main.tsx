import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
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

  return <div>Main</div>;
};

export default Main;
