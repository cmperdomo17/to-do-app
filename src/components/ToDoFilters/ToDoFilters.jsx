import { FilterButton, FilterButtonContainter, FiltersCointainer, ItemsLeft } from "./ToDoFilters.components"

const ToDoFilters = () => {
    return (
        <FiltersCointainer>
            <ItemsLeft/>
            <FilterButtonContainter>
                <FilterButton action = {() => {}} active = 'all' filter = 'All' />
                <FilterButton action = {() => {}} active = 'all' filter = 'Active' />
                <FilterButton action = {() => {}} active = 'all' filter = 'Completed' />
            </FilterButtonContainter>

            <button className = "text-gray-400 hover:text-white cursor-pointer transition-all duration-500 ease-in">
                Clear Completed
            </button>
        </FiltersCointainer>
    )
}

export { ToDoFilters }