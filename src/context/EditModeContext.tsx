import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EditModeContextType {
  editMode: boolean;
  toggleEditMode: () => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

interface EditModeProviderProps {
  children: ReactNode;
}


/**
 * Description: Context to manage the edit mode state. 
 */
export const EditModeProvider: React.FC<EditModeProviderProps> = ({ children }) => {
  const [editMode, setEditMode] = useState(true);

  const toggleEditMode = () => {
    setEditMode(prevEditMode => !prevEditMode);
  };

  return (
    <EditModeContext.Provider value={{ editMode, toggleEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
};

export const useEditMode = (): EditModeContextType => {
  const context = useContext(EditModeContext);
  if (!context) {
    throw new Error('useEditMode must be used within an EditModeProvider');
  }
  return context;
};
