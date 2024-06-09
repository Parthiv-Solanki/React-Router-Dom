import { useLoaderData } from "react-router-dom";

const Data = () => {
  const data = useLoaderData();

  console.log("data===>", data);
  return (
    <>
      <h1>Data</h1>
      <img src={data} />
    </>
  );
};

export default Data;

export const dataLoader = async () => {
  const response = await fetch("https://random.dog/woof.json");
  const dog = await response.json();
  return dog.url;
};
