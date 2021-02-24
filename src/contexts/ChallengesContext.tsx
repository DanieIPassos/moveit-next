import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  currentExperience: number;
  activechallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({children }: ChallengesProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activechallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4 ,2)

  function levelUp(){
    setLevel( level + 1 )
  }

  function startNewChallenge(){
    const randomChanllengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChanllengeIndex];

    setActiveChallenge(challenge)
  }

  function resetChallenge(){
    setActiveChallenge(null);
  }

  return (
  <ChallengesContext.Provider
    value={{
      level,
      levelUp,
      challengesCompleted,
      currentExperience,
      startNewChallenge,
      activechallenge,
      experienceToNextLevel,
      resetChallenge
    }}
    >
      {children}
  </ChallengesContext.Provider>
  )
}