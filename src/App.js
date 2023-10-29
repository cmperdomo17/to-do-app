import { ToDoInput } from './components/ToDoInput';
import { ToDo } from './components/ToDo';
import { Title } from './components/Title/index';
import { ToDoList } from './components/ToDoList';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl"> 
        <Title />
        <ToDoInput />
        <ToDoList>
          <ToDo />
          <ToDo />
          <ToDo />
          <ToDo />
        </ToDoList>
      </div>
    </div>
  );
}

export default App;
