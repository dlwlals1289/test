// import { useState } from 'react';
import { useState, version } from 'react';
import './App.css';

const hong = { name: 'Hong', hobbies: ['Bike', 'Tennis'] };

function MyButton({ onclick, className }) {
  return (
    <button onClick={onclick} className={className}>
      My Button
    </button>
  );
}

const AboutMe = ({ myinfo }) => {
  const { name, hobbies } = myinfo;
  return (
    <>
      <h2 className="border-2 border-sky-500">{name}</h2>
      <div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="text-center p-32">
      <h1 className="text-2xl border-2 border-sky-500  mb-8">Vite + React {version}</h1>
      <MyButton onclick={() => setIsLoggedIn(!IsLoggedIn)} className="bg-sky-300 mb-8" />
      {IsLoggedIn ? <AboutMe myinfo={hong} /> : <div>LoginForm</div>}
    </div>
  );
}

export default App;
