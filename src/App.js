import Toolbar from "./components/ToolBar";
import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Toolbar
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
      <Gallery />
    </>
  );
}

export default App;
