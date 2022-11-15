import { useState } from 'react';
import './App.css';
import ContactMe from './components/contact me/Contact_Me';
import Experience from './components/experience/Experience';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Works from './components/works/Works';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-slate-50 py-6 px-5'>
        <header>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
      </header>
      <Main />
      <Experience />
      <Works />
      <ContactMe />
      </div>
    </div>
  );
}

export default App;
