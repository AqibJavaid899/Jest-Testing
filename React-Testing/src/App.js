import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <h2 style={{padding: '10px', textDecoration: 'underline'}}>Unit Testing in React using React-Testing-Library and Jest</h2>
      <br />
      <Input conditionalText={true} />
    </div>
  );
}

export default App;
