import { useState } from "react";
import "./App.css";   // import styles

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem(""); // clear input
    }
  };

  return (
    <div className="app-container">
      <h1>Add to List</h1>
      <div className="input-area">
        <input
          type="text"
          name="item"   // required for Cypress test
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter an item"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {list.map((listItem, index) => (
          <li key={index}>{listItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
