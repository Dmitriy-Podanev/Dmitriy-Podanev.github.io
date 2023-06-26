import {useRef} from "react";
import todoList from '../../../store/mobx/todoList/todoList'
import {observer} from "mobx-react-lite";



 const AddTodoInput = () => {

    console.log('remder addTOdo')
    let input = useRef<HTMLInputElement>();

    const onHandlerSubmitButton = (e) => {
        e.preventDefault()
        if (!input.current) {
            return null
        }
        if (input.current.value) {
            todoList.addTodo(input.current.value)
            input.current.value = ''
        }
    }

    return (
        <div>
            <form
                onSubmit={e =>
                    onHandlerSubmitButton(e)
                }
            >
                <input
                    ref={input}
                />
                <button type="submit">+</button>
            </form>
        </div>
    )
}

export default observer(AddTodoInput)