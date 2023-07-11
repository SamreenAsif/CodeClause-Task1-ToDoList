import React from "react";
import "./ListItem.css";
import movetoTopIcon from "../../Assert/movetoTopIcon.png";

export const ListItem = (props) => {
  const moveToTop = () => {
    props.onMoveToTop(props.index);
  };
  console.log("my list names are "+ props.name);

  const handlePriorityChange = (event) => {
    const newPriority = event.target.value;
    props.onPriorityChange(newPriority);
  };

  return (
    <>
      <div className="list-item-container">
        <li className="list-item">{props.name}</li>
        <div className="btns-container">
          <select
            htmlFor="task-priority"
            className={`select ${
              props.priority === "High"
                ? "high-priority"
                : props.priority === "Medium"
                ? "medium-priority"
                : "low-priority"
            }`}
            value={props.priority}
            onChange={handlePriorityChange}
            id="task-priority"
            name="task-priority"
          >
            {props.priority}

            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <button id="delBtn" onClick={props.onDelete}>
            Delete
          </button>
          <button className="moveToTopBtn" onClick={moveToTop}>
            <img className="image" src={movetoTopIcon} alt="Move to Top" />
          </button>
        </div>
      </div>
    </>
  );
};
