import './App.css';
import Navb from './component/navbar';
import BasicExample from './component/Table';
import Card from './component/card';
import Form from './component/form';

function App() {
  return (
    <div className="App">
      <Navb />
      <BasicExample />
      <Form /><br/>
      <Card />
    </div>
  );
}

export default App;
