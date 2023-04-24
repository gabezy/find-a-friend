import React from "react";

export default function StateSelect() {
  return (
    <div className="flex items-center">
      <label htmlFor="state" className="mr-6 text-base text-white">
        Busque um amigo:
      </label>
      <div className="flex justify-center items-center p-3 border-[1px] border-white rounded-2xl">
        <select
          id="state"
          className="text-xl text-white font-bold mr-2 bg-transparent cursor-pointer"
        >
          <option value={"DF"}>DF</option>
          <option value={"SP"}>SP</option>
          <option value={"RJ"}>RJ</option>
          <option value={"BA"}>BA</option>
        </select>
      </div>
    </div>
  );
}
