import Panduan from "./component/Panduan";
import Nominasi from "./component/Nominasi";
import Rangkaian from "./component/Rangkaian";

const App=()=> {
  return (
    <div className="App">
      <Rangkaian />
      <Panduan />
      <Nominasi />
    </div>
  );
}

export default App;
