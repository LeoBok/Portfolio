import { useState } from 'react';
import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-slate-50 py-6 px-5 h-screen'>
        <header>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
      </header>
      <Main />
      </div>
    </div>
  );
}

export default App;
