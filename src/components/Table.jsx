import React from 'react'
import AdditionalInfo from './AdditionalInfo';
import { useSelection } from '../SelectionProvider';

const Table = () => {
  const { selectedItem,showAdditionalInfo } = useSelection();
  return (
    <>
    <section className='bg-[#f1f8ff]  w-full min-h-screen'>
    

        {showAdditionalInfo && <AdditionalInfo />}
        {selectedItem ? selectedItem : ''}
    </section>
    
    </>
  )
}

export default Table