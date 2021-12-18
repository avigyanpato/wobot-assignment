import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Input from './Input';
function App() {
  return (
    <div className="App"> 
      <img className='logo1' src="logo1.jpg"></img>
      <div className='line'></div>
      <div className='line2'></div>
      <div className='line3'></div>
      <Input/>
      <a className='anchor' href='#'>Terms of Use | Privacy Policy</a>
    </div>
  );
}

export default App;
