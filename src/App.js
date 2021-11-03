import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Github from "./components/Github";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col  dark:bg-gray-900 dark:opacity-25">
      <Header/>
      <Home/>
      <Projects/>
      <Github/>
      <ContactPage/>
      <Footer/>
       </div>
  );
}

export default App;
