import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addMonths } from 'date-fns';

const DataComponent = ({ onDateUpdate }) => {
  const [date, setDate] = useState(null);

  const handleDateChange = (selectedDate) => {
    if (!selectedDate) {
      setDate(null);
      onDateUpdate(null);
      return;
    }

    setDate(selectedDate);
    onDateUpdate(addMonths(selectedDate, 6)); // Передаємо оновлену дату
  };

  return (
    <div className="relative ">
      <DatePicker
        className="text-center border-1 rounded border-gray-300"
        selected={date}
        onChange={handleDateChange}
        dateFormat="dd.MM.yyyy"
        popperClassName="z-20"
        portalId="root-portal"
      />
    </div>
  );
};

export default DataComponent;
