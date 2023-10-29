import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./ToDoFilters.components"

const ToDoFilters = ({
    total,
    activeFilter,
    showAllToDos, 
    showActiveToDos, 
    showCompletedToDos, 
    handleClearComplete

}) => {
        
    return (
        <FiltersContainer>
            <ItemsLeft total={total} />
            <FilterButtonContainer>
                <FilterButton action={() => showAllToDos()} active={activeFilter} filter='All' />
                <FilterButton action={() => showActiveToDos()} active={activeFilter} filter='Active' />
                <FilterButton action={() => showCompletedToDos()} active={activeFilter} filter='Completed' />
            </FilterButtonContainer>

            <button onClick={() => handleClearComplete()} className="text-gray-400 hover:text-red-400 cursor-pointer transition-all duration-300 ease-in-out">
                Clear Completed
            </button>
        </FiltersContainer>
    )
}

export { ToDoFilters }