import React from 'react'
import AutorizationPage from './AutorizationPage'

const AutorisatComponent = ({onAutorise}) => {
  return (
    <>
        <div className='bg-[#235d94] h-screen flex flex-col items-center justify-center'>
            <AutorizationPage onAutorise={onAutorise} />
            
        </div>
    
    </>
  )
}

export default AutorisatComponent