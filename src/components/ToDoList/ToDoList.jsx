import { ToDoFilters } from "../ToDoFilters"
import { ToDo } from "../ToDo"

const ToDoList = ({ toDos, handleSetComplete, handleDelete}) => {
    return (
        <div className="font-PlayPen font-semibold flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {toDos.map(toDo => {
                return (
                    <ToDo
                        key = {toDo.id}
                        toDo = {toDo}
                        handleDelete = {handleDelete}
                        handleSetComplete = {handleSetComplete}
                    />
                )
            })}
            <ToDoFilters />
        </div>

    )
}

export { ToDoList }