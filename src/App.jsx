import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem("");
    }
  };

  const removeItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div className="app-container">
      <h1>Add Items to List</h1>
      <div className="input-area">
        <input
          type="text"
          name="item"   // required
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter an item"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {list.map((listItem, index) => (
          <li key={index}>
            {listItem}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
