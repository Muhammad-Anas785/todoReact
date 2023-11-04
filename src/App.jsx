import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./index.css";
const App = () => {
  const [tlist, setList] = useState("");
  const [newTlist, setnewList] = useState([]);

  const nameChange = (event) => {
    setList(event.target.value);
  };

  const showName = () => {
    setnewList((oldItems) => {
      return [...oldItems, tlist];
    });
    setList("");
  };
  const deleteItems = (id) => {
    
    setnewList((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return id !== index;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="innerDiv">
          <br />
          <h1 className="heading">ToDo List</h1>
          <input
            type="text"
            placeholder="add an items"
            className="field"
            onChange={nameChange}
            value={tlist}
          />
          <button className="btn" onClick={showName}>
            +
          </button>
          <ol>
            {/* <li>{newTlist}</li> */}
            {newTlist.map((itemVal, index) => {
              return (
                <>
                  <ToDoList
                    text={itemVal}
                    key={index}
                    id={index}
                    onSelect={deleteItems}
                  />
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
