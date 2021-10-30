import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex flex-col dark:bg-gray-900 dark:opacity-25">
      <Header/>
      <Home/>
      <Projects/>

      
     
    </div>
  );
}

export default App;
