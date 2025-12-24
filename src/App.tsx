import { useState } from 'react';
import GiftAnimation from './components/GiftAnimation';
import HomePage from './components/HomePage';
import CalendarPage from './components/CalendarPage';

type Screen = 'gift' | 'home' | 'calendar';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('gift');

  return (
    <>
      {currentScreen === 'gift' && (
        <GiftAnimation onComplete={() => setCurrentScreen('home')} />
      )}
      {currentScreen === 'home' && (
        <HomePage onOpenCalendar={() => setCurrentScreen('calendar')} />
      )}
      {currentScreen === 'calendar' && <CalendarPage />}
    </>
  );
}

export default App;
