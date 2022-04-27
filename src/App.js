import './App.css';
import NavBar from './components/Navbar';
import MainView from './components/Main';
import Projects from './components/ProjectsCards';
import About from './components/About';

const App = () => (
  <>
    <NavBar />
    <MainView />
    <Projects />
    <About />
  </>
);

export default App;
