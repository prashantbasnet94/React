import logo from './logo.svg';
import './App.css';
 import renderer from 'react-test-renderer';
import { AllCmps } from './component/index';

function App() {
  // const component = renderer.create(
  //   <Link page="http://www.facebook.com">Facebook</Link>,
  // );
  // let tree = component.toJSON();
 
  // console.log({component, tree})

  return (
    <div className="App">
      <AllCmps/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
