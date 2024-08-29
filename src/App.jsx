import Panduan from "./component/Panduan";
import Nominasi from "./component/Nominasi";
import Rangkaian from "./component/Rangkaian";
import Faq from "./component/Faq";

const App=()=> {
  return (
    <div className="App">
      <Rangkaian />
      <Panduan />
      <Nominasi />
      <Faq/>
    </div>
  );
}

export default App;
