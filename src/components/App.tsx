import * as React from "react";
import Layout from "./Layout";
import axios from "axios";
// import Posts from "./Posts";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // console.log("Loaded");
    getData();
  }, []);

  const getData = () => {
    const ENDPOINT = "https://api.dailysmarty.com/posts";
    axios(ENDPOINT).then((response: any) => {
      console.log("Resultado obtenido",response.data);      
    }).catch(error => {
      setIsLoading(false);
      console.log("Error en getData", error);
      
    })
  };

  const content = isLoading ? <div>Loading...</div> : <div>Data goes here</div>

  return <Layout>{content}</Layout>;
};

export default App;
