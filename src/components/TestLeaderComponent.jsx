import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { CgRemove } from "react-icons/cg";
const TestLeaderComponent = ({ data,removeLeader }) => {
  // Локальний стан для редагування
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(data);

  // Функція для оновлення значень у стані
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTestDateChange = (e)=>{
    const newTestDate=e.target.value;
    if(newTestDate){
        const testDateObj=new Date (newTestDate)
        testDateObj.setMonth(testDateObj.getMonth()+6);
        const nextTestDate= testDateObj.toISOString().split('T')[0];
        setFormData({
            ...formData,
            testDate:newTestDate,
            nextTestDate:nextTestDate,
        })
    }
  }

  return (
    <div
      className={`relative z-1 grid grid-cols-6 text-center items-center border border-gray-400 shadow-lg drop-shadow-xl pt-4 pb-4 pl-2 pr-2 rounded-lg mb-4 
        ${formData.result ? 'bg-green-400' : 'bg-red-300'}`}
    >
      {/* Якщо editMode == true, показуємо input, інакше текст */}
      <div>
        {editMode ? (
          <input
            type="text"
            name="inventoryCode"
            value={formData.inventoryCode}
            onChange={handleChange}
            className="border rounded"
          />
        ) : (
          <h3>{formData.inventoryCode}</h3>
        )}
      </div>

      <div>
        {editMode ? (
          <input
            type="date"
            name="testDate"
            value={formData.testDate}
            onChange={handleTestDateChange}
            className="border rounded"
          />
        ) : (
          <h3>{formData.testDate}</h3>
        )}
      </div>

      <div>
        {editMode ? (
          <select
            name="result"
            value={formData.result}
            onChange={(e) => setFormData({ ...formData, result: e.target.value === "true" })}
            className="border  rounded"
          >
            <option value="true">Придатні</option>
            <option value="false">Не придатні</option>
          </select>
        ) : (
          <h3>{formData.result ? "Придатні" : "Не придатні"}</h3>
        )}
      </div>

      <div>
        {editMode ? (
          <input
            type="date"
            name="nextTestDate"
            value={formData.nextTestDate}
            onChange={handleChange}
            className="border  rounded"
          />
        ) : (
          <h3>{formData.nextTestDate}</h3>
        )}
      </div>

      <div>
        {editMode ? (
          <input
            type="text"
            name="document"
            value={formData.document}
            onChange={handleChange}
            className="border  rounded"
          />
        ) : (
          <h3>
            <a href="#" className="text-blue-500 underline">
              {formData.document}
            </a>
          </h3>
        )}
      </div>

      {/* Кнопка для редагування / збереження */}
      <div>
        <button
          onClick={() => setEditMode(!editMode)}
        className='px-5'
        >
          {editMode ? <MdOutlineDoneOutline className='size-6 text-yellow-300'/> : <FaEdit className='size-6'/>}
        </button>
        <button
            onClick={()=>removeLeader(data.id)}
        > {editMode?<CgRemove className='size-5'/>:""} </button>
      </div>
    </div>
  );
};

export default TestLeaderComponent;
