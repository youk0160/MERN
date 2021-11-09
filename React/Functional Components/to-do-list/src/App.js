import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Item from './components/Item';
import Form from './components/Form';


function App() {
  const [list, setList] = useState([]);

  const addToList = (item) => {
    setList([...list,item]);
  }

  const toggleComplete = (ind) => {
    const updatedList = list.map((item,i) => {
      if(ind === i) item.complete = !item.complete;
      return item;
    });
    setList(updatedList);
  }
  
  const deleteItem = (ind) => {
    const updatedList = list.filter((item,i) => {
      return i!==ind;
    });
    setList(updatedList);
  }

  return (
    <div className="App">
      <Form onNewSubmit={addToList}/>
      <hr/>
      <ul className="list-group list-group-flush">
      { list.map((item,i) => <Item key={i} i={i} toggleComplete={toggleComplete} deleteItem={deleteItem} item={item}/>)}
      </ul>
    </div>
  );
}

export default App;
