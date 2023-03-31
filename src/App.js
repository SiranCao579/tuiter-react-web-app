import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path="/*" element={<Labs/>}/>
              <Route path="/hello" element={<HelloWorld/>}/>
              <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>
      </HashRouter>
  );
}

export default App;
