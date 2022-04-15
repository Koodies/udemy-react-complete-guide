import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense/>
        <Expenses/>
      </header>
    </div>
  );
}

export default App;
