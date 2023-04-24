import React from "react";

export default function CitySelect() {
  return (
      <div className="flex justify-center items-center p-3 bg-rose-800 border-[1px] rounded-2xl hover:border-gray-600">
        <select id="city" className="text-xl text-white font-bold bg-transparent outline-none ">
          <option value={"Brasília"}>Brasília</option>
          <option value={"São Paulo"}>São Paulo</option>
          <option value={"Rio de Janeiro"}>Rio de Janeiro</option>
          <option value={"Salvador"}>Salvador</option>
        </select>
      </div>
  );
}
