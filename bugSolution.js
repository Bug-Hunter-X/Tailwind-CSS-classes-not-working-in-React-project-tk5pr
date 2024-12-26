```javascript
//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["\./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

//globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

//index.js
import {useState} from 'react';
import './globals.css'; //Import the CSS file

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
```