import { createContext, useState, ReactNode } from 'react';


interface ChallengesContextData {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({children }: ChallengesProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp(){
    setLevel( level + 1 )
  }

  function startNewChallenge(){
    
  }

  return (
  <ChallengesContext.Provider
    value={{
      level,
      levelUp,
      challengesCompleted,
      currentExperience,
      startNewChallenge
    }}
    >
      {children}
  </ChallengesContext.Provider>
  )
}