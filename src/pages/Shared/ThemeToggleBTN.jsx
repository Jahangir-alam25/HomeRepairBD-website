import React from 'react';
import { useDarkMood } from '../../contexts/AuthContext/ThemeContext';
import { IoIosMoon, IoIosSunny } from 'react-icons/io';

const ThemeToggleBTN = () => {
     const{darkMood, setDarkMood}=useDarkMood()
  return (
    <button onClick={()=>setDarkMood(!darkMood)} className="px-3 py-2 bg-gray-200 rounded-full transition-all dark:bg-white/10 cursor-pointer">
      {darkMood ? <IoIosSunny /> : <IoIosMoon />}
    </button>
  );
};

export default ThemeToggleBTN;