import React from "react";
import { useDrag } from "react-dnd";



function DragClient({ id, first_name, last_name }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "client",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
    <div
        ref={drag}
        style={{ border: isDragging ? "7px solid red" : "0px"}}
        >{first_name} {last_name}</div>
    );
}

export default DragClient;