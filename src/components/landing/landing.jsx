import React, { useEffect, useState } from "react";
import { todos } from "../../todos.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../navbar/navbar";

const Landing = () => {
  const [list, setList] = useState(todos);
  const [input, setInput] = useState({
    id: 1,
    name: "",
    checked: false,
  });
  const [done, setDone] = useState(0);

  const [editId, setEditId] = useState(0);

  function handleDelete(item) {
    setList(list.filter((todo) => todo.id != item.id));
  }

  function handleAdd(params) {
    setInput({ ...input, [params.target.name]: params.target.value });
  }

  function handleChange(e) {
    const id = e.target.id;
    const tmp = [...list];
    const idx = tmp.findIndex((t) => t.id == id);
    tmp[idx] = { ...tmp[idx], checked: e.target.checked };

    setList([...tmp]);
  }

  useEffect(() => {
    setDone(list.reduce((sum, cr) => (cr.checked ? sum + 1 : sum), 0));
  }, [list]);

  function handleEdit(params) {}

  function handleSubmit(params) {
    params.preventDefault();
    const id = !list.length ? 1 : list[list.length - 1].id + 1;
    setInput({ ...input, name: "" });
    setList([...list, { ...input, id }]);
  }

  return (
    <>
      <div className="bg-[#1A202C] h-screen">
        <div className="max-w-[768px] mx-auto my-0 bg-[#1A202C] text-white">
          <Navbar />
          <div className="flex flex-col py-10 px-8 gap-6">
            <div className="flex justify-center font-bold text-3xl">
              Chores ToDo List
            </div>
            {list.length != 0 ? (
              list.map((todo) => {
                return (
                  <div
                    className="w-full flex justify-between items-center gap-10"
                    key={todo.id}
                  >
                    <div>
                      <input
                        type="checkbox"
                        name="check"
                        id={todo.id}
                        defaultChecked={todo.checked}
                        onChange={handleChange}
                        className="appearance-none ring-2 ring-green-400 size-4 rounded-sm checked:bg-green-400 cursor-pointer"
                      />
                    </div>
                    <div className="grow">
                      <span>{todo.name}</span>
                    </div>
                    <div
                      onClick={(e) => {
                        handleEdit(e);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="grow border-solid border-2 border-green-400 text-green-400 rounded-md p-2 hover:text-white cursor-pointer hover:bg-green-400"
                      />
                    </div>
                    <div onClick={() => handleDelete(todo)}>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="grow border-solid border-2 border-red-400 p-2 text-red-400 rounded-md hover:bg-red-400 hover:text-white cursor-pointer hover:border-red-400"
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center items-center text-xl pt-5">
                {" "}
                Empty Items
              </div>
            )}
          </div>
          <hr />
          <div className="flex flex-col px-8 py-10">
            <div className="flex justify-center items-center pb-10 text-xl font-bold">
              Done: {done}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-base">
                Add Todo
              </label>
              <input
                type="text"
                className="h-9 rounded text-white px-3 border-solid border-2 border-[#EEEEEE] bg-[#1A202C]"
                onChange={(e) => handleAdd(e)}
                name="name"
                id="name"
              />
            </div>
            <div className="pt-6">
              <button
                className="bg-[#8DCDF2] text-black px-14 py-4 rounded-md font-medium"
                onClick={(e) => handleSubmit(e)}
              >
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
