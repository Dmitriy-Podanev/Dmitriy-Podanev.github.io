import {autorun, makeAutoObservable} from "mobx";
import {nanoid} from "nanoid";

interface ItemList {
    done: boolean,
    label: string,
    id: string,
}

class TodoList {
    constructor() {
        makeAutoObservable(this)
    }
    list: ItemList[] = []

    removeTodo = (id: string)=>{
        this.list = this.list.filter(item=> item.id !== id)
    }

    addTodo = (label: string)=>{
        const item: ItemList = {
            done: false,
            label: label,
            id: nanoid(8)
        }

        this.list.push(item)

    }

}


export default Object.freeze(new TodoList())

autorun((action)=>{
    console.log(action)})