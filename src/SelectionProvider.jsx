import React, { createContext, useState, useContext } from 'react';

// 1️⃣ Створюємо контекст
const SelectionContext = createContext();

// 2️⃣ Провайдер контексту
export const SelectionProvider = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false)

    return (
        <SelectionContext.Provider value={{ 
            selectedItem, setSelectedItem,
            showAdditionalInfo, setShowAdditionalInfo 
            
            }}>
            {children}
        </SelectionContext.Provider>
    );
};

// 3️⃣ Хук для доступу до контексту
export const useSelection = () => useContext(SelectionContext);
