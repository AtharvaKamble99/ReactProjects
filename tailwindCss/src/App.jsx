import "./App.css";
import Card from "./components/card";
function App() {
  let myObj = {
    name: "atharva",
    year: "3rd Year",
    city: "Pune",
  };
  let arr = [8, 5, 4, 9];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind With Atharva
      </h1>
      <Card owner="atharva" btnText="Click on" />
      <Card owner="Santosh" btnText="Santosh ki ghanti" />
    </>
  );
}

export default App;
