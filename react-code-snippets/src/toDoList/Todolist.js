import React, { useEffect, useState } from "react";
import "./todolist.css";

const Todolist = () => {
  const [getlist, setgetList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const getTodoList = async () => {
    let response = await fetch("https://dummyjson.com/todos");
    if (response.ok) {
      let data = await response.json();
      setgetList(data.todos);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };

  const handleDelete = (id) => {
    const updatedList = getlist.filter((data) => data.id !== id);
    setgetList(updatedList);
    console.log("id", updatedList);
  };

  const handleEdit = (id, todo) => {
    setEditingId(id);
    setEditingValue(todo);
  };

  const handleSave = (id) => {
    const updatedList = getlist.map((data) =>
      data.id === id ? { ...data, todo: editingValue } : data
    );
    setgetList(updatedList);
    setEditingId(null);
    setEditingValue("");
  };

  const renderToDoList = () => {
    return (
      getlist &&
      getlist.map((data) => {
        return (
          <div className="list-row" key={data.id}>
            {editingId === data.id ? (
              <input
                type="text"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
              />
            ) : (
              <h6>{data.todo}</h6>
            )}
            <button onClick={() => handleDelete(data.id)} className="btn">
              Delete
            </button>
            {editingId === data.id ? (
              <button onClick={() => handleSave(data.id)} className="btn">
                Save
              </button>
            ) : (
              <button onClick={() => handleEdit(data.id, data.todo)} className="btn">
                Edit
              </button>
            )}
          </div>
        );
      })
    );
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const newTodo = {
      id: getlist.length + 1,
      todo: inputValue,
    };
    setgetList([newTodo, ...getlist]);
    setInputValue(""); // Clear the input field after submission
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <>
      <div>
        <label>To DO Task</label>
        <input
          placeholder="To do task"
          value={inputValue}
          onChange={handleInput}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="list">{renderToDoList()}</div>
    </>
  );
};

export default Todolist;
