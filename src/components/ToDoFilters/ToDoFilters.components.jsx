const FiltersCointainer = ( {children} ) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
            {children}
        </div>
    )
}

const ItemsLeft = ( {Total = 0}) => {
    return (
        <p className=" text-gray-400 text-sm">
            {Total} items left
        </p>
    )
}

const FilterButtonContainter = ( {children} ) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
}

const FilterButton = ({ action, active, filter }) => {
    return (
        <button
            className={`hover:text-white cursor-pointer transition-all duration-500 ease-in-out ${
                active.toLowerCase().includes(filter.toLowerCase())
                    ? "text-blue-300"
                    : "text-gray-400"
            }`}>
            {filter}
        </button>
    );
};

export { FiltersCointainer, ItemsLeft, FilterButtonContainter, FilterButton }