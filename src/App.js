import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState([1, 2, 3]);

  const add = () => { 
    (count.length) 
      ? setCount([...count, count[count.length-1]+1])
      : setCount([1])
  };

  const dell = (row) => {
    (row) 
      ? setCount(count.filter((num) => num !== row))
      : setCount(count.filter((num) => num !== count[0]))
  }

  return (
    <div>
      <button onClick={() => dell()}>Удалить</button>
      <ul>
        {count.map(item => (
          <li key={item}>
            {item} <button onClick={() => dell(item)}>x</button>
          </li>
        ))}
      </ul>
      <button onClick={add}>Добавить</button>
    </div>
  );
};

export default App;
