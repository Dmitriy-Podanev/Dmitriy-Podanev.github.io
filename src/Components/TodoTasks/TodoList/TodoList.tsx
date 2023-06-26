import todoList from "../../../store/mobx/todoList/todoList";
import {observer} from "mobx-react-lite";
import block from "bem-cn";
import './TodoList.scss'
import AddTodoInput from "../AddTodoInput/addTodoInput";

const b = block('todo-list')

const TodoList : any = ()=>{
    const {list, removeTodo} = todoList
    return (
        <div>
            <AddTodoInput/>
            <ul>
                {list && list.length > 0 ? (
                    list.map((todo)=>{
                        return (
                            <div className={b()} key={todo.id}>
                                <li className={b('item')} >
                                    {todo.label}
                                </li>
                                <button onClick={()=>removeTodo(todo.id)} className={b('btn-delete')} type={"reset"} style={{color:'red'}}>X</button>
                            </div>
                        )
                    })

                ) : null
                }
            </ul>
        </div>
    )
}

export default observer(TodoList);