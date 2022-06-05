import { BiArchive } from "react-icons/bi" 

let city = {
  name: "London",
  country: "UK"
}

function App() {
  return (
  <div className="App">
    <h1 id="codeid">{city.name} is in {city.country}</h1>,
    <h1><BiArchive /> Hello World</h1>
  </div>  );
}

export default App;
