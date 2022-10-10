
import './App.css';
import DeveloperForm from './components/DeveloperForm';
import DeveloperList from './components/DeveloperList';
import { useReducer } from 'react';
import { Developer } from './components/Developer';
function App() {
  const [developers, dispatch] = useReducer(Developer, []);
  return (
    <div className="App">
     <DeveloperForm developerList={developers} dispatch={dispatch}/>
     <DeveloperList developerList={developers} dispatch={dispatch}/>
    </div>
  );
}

export default App;
