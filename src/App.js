import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-slate-50 py-6 px-8'>
        <header>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
      </header>

      </div>
    </div>
  );
}

export default App;
