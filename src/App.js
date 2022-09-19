import './App.css';
import NavBar from './components/Navbar';
import MainView from './components/Main';
import Projects from './components/ProjectsCards';
import About from './components/About';
import Footer from './components/Footer';

const App = () => (
  <>
    <NavBar />
    <MainView />
    <Projects />
    <About />
    <Footer />
  </>
);

export default App;
