import { useTodoState } from "./../Context/index";
import Item from "./../Item/index";
import { TodoListBlock } from "./styled.js";

export function List() {
    const todos = useTodoState();
    console.log(todos);

    return (
        <TodoListBlock>
            {todos.map((todo) => (
                <Item key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
            ))}
        </TodoListBlock>
    );
}
