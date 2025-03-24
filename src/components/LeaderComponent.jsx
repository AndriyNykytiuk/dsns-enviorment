import React, { useState } from 'react'
import SelectComponent from './SelectComponent'
import DataComponent from './DataComponent'
import NextDateComponent from './NextDateComponent'
const LeaderComponent = () => {
const [updatedDate,setUpdatedDate]=useState(null)
const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
                 <div className='relative z-1 grid grid-cols-5 bg-[#f1f8ff] text-center items-center border-1 border-gray-400 shadow-lg drop-shadow-xl pt-4 pb-4 pl-2 pr-2 rounded-lg mb-4'>
                    <div>
                      <h3>
                          22
                      </h3>
                    </div>
                    <div>
                      <h3>
                        <DataComponent onDateUpdate={setUpdatedDate} />
                      </h3>
                    </div>
                    <div>
                     <SelectComponent onSelect={setSelectedOption}  />
                    </div>
                    <div>
                      <h3>
                        <NextDateComponent newDate={updatedDate}/>
                      </h3>
                    </div>
                    <div>
                      <h3>
                        <a href="#"> link</a>
                      </h3>
                    </div>
                  </div>
    </>
  )
}

export default LeaderComponent