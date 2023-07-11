import React, { useState } from "react";
import "./ToDoList.css";
import { ListItem } from "../listItems/ListItem";
import sortIcon from "../../Assert/sortIcon.png";


export const ToDoList = () => {
  const [items, setItems] = useState([]);
 
  const addItem = () => {
    const itemName = document.getElementById("itemName").value;
    if (itemName !== "") {
      const newItem = {
        name: itemName,
        priority: selectedValue,
      };
      setItems([...items, newItem]);
    }
    if (itemName === "") alert("You cannot leave this empty");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const [selectedValue, setSelectedValue] = useState("low");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const sortItems = () => {
    const sortedItems = [...items].sort((a, b) => {
      if (a.priority === b.priority) {
        return 0;
      } else if (a.priority === "High") {
        return -1;
      } else if (b.priority === "High") {
        return 1;
      } else if (a.priority === "Medium") {
        return -1;
      } else {
        return 1;
      }
    });
    setItems(sortedItems);
  };
  const moveItemToTop = (index) => {
    const item = items[index];
    const newItems = items.filter((_, i) => i !== index);
    setItems([item, ...newItems]);
  };

  const handlePriorityChange = (index, newPriority) => {
    const updatedItems = [...items];
    updatedItems[index].priority = newPriority;
    setItems(updatedItems);
  };

  return (
    <>
      <div className="list-box">
        <h2>ToDo List</h2>

        <div className="head">
          <input id="itemName" type="text" />
          <select
            value={selectedValue}
            onChange={handleSelectChange}
            id="priority"
            name="priority"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button id="addBtn" onClick={addItem}>
            Add
          </button>
          <button id="sortBtn" onClick={sortItems}>
            <img id="sortImage" src={sortIcon} alt="sort" />
          </button>
        </div>
        <ul className="list">
          {items.map((item, index) => (
            <ListItem
              key={index}
              index={index}
              name={item.name}
              priority={item.priority}
              onDelete={() => removeItem(index)}
              onMoveToTop={moveItemToTop}
              onPriorityChange={(newPriority) => handlePriorityChange(index, newPriority)}
            />
          ))}
        </ul>

      </div>
    </>
  );
};
