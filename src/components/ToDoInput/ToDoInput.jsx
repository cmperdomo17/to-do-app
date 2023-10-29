import { useState } from 'react'

const ToDoInput = ( {addToDo}) => {

    const [title, setTitle] = useState('');
    
    const handleToDo = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            addToDo(title);
            setTitle('');
        }
    }

    return (
        <div className="mt-6 relative">
            {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
            </div> */}
            <input type = "text" 
            className="focus:shadow-lg font-PlayPen font-semibold focus:shadow-blue-400 pl-6 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-500 ease-in-out"
            placeholder="What do you need to do?"
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            onKeyDown={e => handleToDo(e)}>
            </input>
        </div>
            
    )
}

export { ToDoInput }