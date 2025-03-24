import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const ChosedDate = () => {
const [updatedDate,setUpdatedDate]=useState(new Date())

  return (
    <>
        <DatePicker
            selected={updatedDate}
            onChange={(date)=>{setUpdatedDate(date)}}
            dateFormat="dd/MM/yyyy"
        />
    </>
  )
}

export default ChosedDate