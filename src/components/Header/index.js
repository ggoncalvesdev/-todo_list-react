import { useTodoState } from "./../Context/index";
import { TodoHeadBlock } from "./styled.js";

export function Head() {
    const todos = useTodoState();
    const tarefasDesfeitas = todos.filter((todo) => !todo.done);

    const hoje = new Date();
    const date = hoje.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const dia = hoje.toLocaleTimeString("pt-BR", {
        weekday: "long",
    });

    return (
        <TodoHeadBlock>
            <h1>{date}</h1>
            <div className="day">{dia}</div>
            <div className="tasks-left">{"Tarefas para fazer: " + tarefasDesfeitas.length}</div>
        </TodoHeadBlock>
    );
}
