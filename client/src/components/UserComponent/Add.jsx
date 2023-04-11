import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Hometown, setHometown] = useState("");
  const [CurrentCity, setCurrentCity] = useState("");

  const navigate = useNavigate();

  const data = {
    Name: name,
    Mobile: Mobile,
    Hometown: Hometown,
    Current_City: CurrentCity,
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("CreateUser", data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD USER</h2>
      <form  method="put"
        encType="multipart/form-data" onSubmit={submitForm} className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Name"
          required
        />
        <input
          value={Mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
          placeholder="Mobile Number"
          required
        />
        <input
          value={Hometown}
          onChange={(e) => setHometown(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Hometown"
          required/>

        <input
          value={CurrentCity}
          onChange={(e) => setCurrentCity(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Current City"
          required/>
        <button
          className="bg-sky-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
        >
          ADD USER
        </button>
      </form>
    </div>
  );
}

export default Add;
