import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Hometown, setHometown] = useState("");
  const [CurrentCity, setCurrentCity] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/GetUser/${id}`).then((res) => {
      setName(res.data.Name);
      setMobile(res.data.Mobile);
      setHometown(res.data.Hometown);
      setCurrentCity(res.data.Current_City);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    Name: name,
    Mobile: Mobile,
    Hometown: Hometown,
    Current_City: CurrentCity,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:5000/UpdateUser/${id}`, data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Update User Details</h2>
      <form  method="put"
        encType="multipart/form-data" onSubmit={Update} className="w-[50%] h-full flex flex-col mt-2">
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
          required/>
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
          UPDATE USER
        </button>
      </form>
    </div>
  );
}

export default Edit;