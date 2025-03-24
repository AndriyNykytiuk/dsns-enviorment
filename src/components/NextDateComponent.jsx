import React from "react";
import { format } from "date-fns"; 

const NextDateComponent = ({ newDate }) => {
  if (!newDate || isNaN(newDate.getTime())) {
    return null; // Якщо дати немає або помилкова, не рендеримо компонент
  }

  return (
    <div className=" text-center">
      <p className="">{format(newDate, "dd/MM/yyyy")}</p>
    </div>
  );
};

export default NextDateComponent;
