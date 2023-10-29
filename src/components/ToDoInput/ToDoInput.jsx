const ToDoInput = () => {
    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
            </div>
            <input type = "text" 
            className="focus:shadow-lg font-PlayPen font-semibold focus:shadow-blue-400 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-500 ease-in-out"
            placeholder="What do you need to do?">
            </input>
        </div>
            
    )
}

export { ToDoInput }