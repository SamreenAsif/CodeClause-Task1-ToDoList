import { ToDoList } from './Components/wishlist/ToDoList';
import {SearchUser} from './Components/SearchUser/SearchUser';
import './App.css';
import { Route ,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route index element={<ToDoList />} /> 
       <Route path="blogs" element={<SearchUser/>} />
      </Routes>
    </div>
  );
}

export default App;
