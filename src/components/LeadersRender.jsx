import React, { useState, useEffect, useCallback } from 'react';
import TestLeaderComponent from './TestLeaderComponent';
import { MdAddCard } from "react-icons/md";

const LeadersRender = () => {
  const [leaderData, setLeaderData] = useState(() => {
    const storedData = localStorage.getItem('leaderData');
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('leaderData', JSON.stringify(leaderData));
  }, [leaderData]);

  const updateLeaderData = useCallback((updatedLeader) => {
    setLeaderData(prevData =>
      prevData.map(l => (l.id === updatedLeader.id ? updatedLeader : l))
    );
  }, []); // useCallback без залежностей, оскільки setLeaderData є функцією оновлення стану

  const addNewLader = () => {
    const newLeader = {
      id: Date.now(),
      inventoryCode: '',
      testDate: '',
      result: true,
      nextTestDate: '',
      document: '',
    };
    setLeaderData([...leaderData, newLeader]);
  };

  const removeLeader = (id) => {
    const updatedLeaderData = leaderData.filter(leader => leader.id !== id);
    setLeaderData(updatedLeaderData);
  };

  return (
    <>
      <div className='p-2'>
        <div className='p-2 rounded-md bg-[#fffff0] border-gray-400 shadow-lg drop-shadow-xl'>
          <div className=''>
            <h2 className='text-2xl text-center p-5'> драбини висувні, триколінні</h2>
          </div>
          <div className='flex items-center justify-end px-10'>
            <button
              onClick={addNewLader}
            >
              <h4>додати об'єкт</h4> <MdAddCard className='size-8' />
            </button>
          </div>
          <div>
            <div className='grid grid-cols-6 p-2 items-center justify-center text-center'>
              <div>
                <h4>інв №</h4>
              </div>
              <div>
                <h4>Дата випробування</h4>
              </div>
              <div>
                <h4> результати випробування</h4>
              </div>
              <div>
                <h4>Дата наступного випробування</h4>
              </div>
              <div>
                <h4>Акт</h4>
              </div>
            </div>
            {leaderData.map((leader) => (
              <TestLeaderComponent
                key={leader.id}
                data={leader}
                onDataChange={updateLeaderData}
                removeLeader={removeLeader}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadersRender;