
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-gray-100 dark:bg-gray-700 dark:text-gray-100 ' >
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
