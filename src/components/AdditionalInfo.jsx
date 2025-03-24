import React from 'react'
import ChosedDate from './ChosedDate'


const AdditionalInfo = () => {
  return (
    <>
    <section className=' w-full bg-[#c6ddf4] '>
        <div className='flex justify-around items-center'>
                <div>
                    <h3><a href="#">"Затверджений  графік  випробування ПТО та АРО"</a></h3>
                </div>
                <div>
                    <h3><a href="#">Наказ "Про призначення комісії з випробування ПТО та АРО"</a></h3>
                </div>
                <div>
                    дата оновлення інформації <br/> 
                    <ChosedDate/>
                </div>

        </div>
    </section>
    
    </>
  )
}

export default AdditionalInfo