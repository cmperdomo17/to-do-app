const ToDo = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
            <div className="flex items-center">
                <span className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>
                <p className="pl-3">
                    ToDo Item
                </p>
            </div>
            <img className = "h-6 w-6 cursor-pointer transition-all duration-300 ease-in" src = "/close-icon.svg" alt = "close icon"></img>
        </div>
    )
}

export { ToDo }