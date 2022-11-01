import React, { useState } from "react";
import { Plus } from "phosphor-react";
import { useTodoDispatch, useTodoNextId } from "./../Context/index";
import { InsertFormPositioner, InsertForm, Input, CircleButton } from "./styled.js";

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "CREATE",
            todo: {
                id: nextId.current,
                text: value,
                done: false,
            },
        });
        setValue("");
        setOpen(false);
        nextId.current += 1;
    };

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input value={value} onChange={onChange} placeholder="Escreva sua tarefa aqui" autoFocus />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <Plus size={32} />
            </CircleButton>
        </>
    );
}
export default React.memo(TodoCreate);
