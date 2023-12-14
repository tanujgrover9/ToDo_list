"use client";
import React, { useState } from "react";
import "./globals.css";
import logo from "../dribbble_todoist_icon-01.png";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };
  const deletHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task Avaliable</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-10">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-4xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semithin">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deletHandler(i);
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black  p-5 text-5xl font-bold  list">ToDo LIST.📝</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 rounded border-2 m-8 px-4 py-2 text1"
          placeholder="Enter Task Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="text-2xl border-zinc-800 rounded border-2 m-8 px-4 py-2 text2"
          placeholder="Enter Discription Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        ></input>
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5 btn">
          Add Task +
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200 taskadd">
        <ol>
          <li>{renderTask}</li>
        </ol>
      </div>
    </>
  );
};

export default page;
