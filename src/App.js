import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <Navbar title="TextUtlis" aboutText="About us"/>
    <div className='container my-3' >
    <TextForm heading="Enter to Anylize your Text" />
    </div>
  
  </>
  );
}

export default App;
