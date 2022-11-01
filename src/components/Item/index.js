import React from "react";
import { Trash, Check } from "phosphor-react";
import { useTodoDispatch } from "./../Context/index";
import { TodoItemBlock, CheckCircle, Text, Remove } from "./styled.js";

function Item({ id, done, text }) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({ type: "TOGGLE", id });
    const onRemove = () => dispatch({ type: "REMOVE", id });

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>
                {done && <Check />}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <Trash />
            </Remove>
        </TodoItemBlock>
    );
}

export default React.memo(Item);
