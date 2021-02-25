import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownCOntext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
  const {activechallenge, resetChallenge, completedChallenge} = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSuceeded(){
    completedChallenge()
    resetChallenge();
  }

  function handleChallengeFailed(){
    resetChallenge();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activechallenge ? (
      <div className={styles.challengeActive}>
        <header>Ganhe {activechallenge.amount}</header>
        <main>
          <img src={`icons/${activechallenge.type}.svg`} alt=""/>
          <strong>Novo Desafio</strong>
          <p>{activechallenge.description}</p>
        </main>

        <footer>
          <button
           type='button'
           className={styles.challengeFailedButton}
           onClick={handleChallengeFailed}
           >
             Falhei
           </button>
          <button
          type='button'
          className={styles.challengeSuccededButton
          }
          onClick={handleChallengeSuceeded}
          >
            Completei
          </button>
        </footer>
      </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando desafios
        </p>
      </div>)
    }
    </div>
  )
}