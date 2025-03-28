import React from 'react'
import LinkComponent from './LinkComponent'
import LogoStation from '../img/LogoStation.jpeg'
const Navbar = () => {
const typeOfTeams=[
  {
    name:'1 зміна'
  },
  {
    name:'2 зміна'
  },
  {
    name:'3 зміна'
  },
  {
    name:'4 зміна'
  }
]

  return (
    <>
    <section className='flex flex-col items-center w-100 bg-[#f1f8ff] min-h-screen p-10 border-r-3 border-gray-300'>
        <div className='w-35 mb-5'>
          <img src={LogoStation} alt="Image"/>
        </div>
      
           <LinkComponent />
       
       
     
    </section>
    
    </>
  )
}

export default Navbar