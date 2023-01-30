import React, { useEffect, useState } from "react";
import TareasItem from "./TareasItem";
const Formulario = () =>{
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("tareas");
        if (data) {
            setTareas(JSON.parse(data));
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }, [tareas])
    
    //Cambiar estilo
    const onComplete = (id) =>{
        setTareas(tareas.map((item) =>{
            return item.id === Number(id) ? {...item, completed: !item.completed} : {...item};
        }))
    }
    const onDelete = (id) =>{
        setTareas([...tareas].filter(item => item.id !== id));
    }
    const addTareas = (newTarea) =>{
        let newItem = {id: +new Date(), tarea: newTarea, completed: false};
        setTareas([...tareas, newItem]);
    }
    const [tarea, setTarea] = useState("");
    const Submit = (e) =>{
        e.preventDefault();
        if (tarea.trim() !== "") {
            addTareas(tarea);
            setTarea("");
        }
    }

    // Añadir tarea
    const CambiarNombre = (e) =>{
        setTarea(e.target.value);
    }
    
    return(
        <div>
            <div className="Form">
                <h1>Gestiona tus actividades</h1>
                <form onSubmit={Submit}>
                    <input type="text" placeholder="Nueva Tarea" onChange={CambiarNombre} className="Tarea" value={tarea} />
                    <button type="submit" className="Tarea">Add</button>
                </form>
            </div>
            <div className="Listado">
            <h3>Lista de tareas</h3>
                <ul>
                    {
                        tareas.map((item, index)=> (
                            <TareasItem key={index} item = {item} onComplete = {onComplete} onDelete = {onDelete}/>
                        ))
                    }
                </ul>
            </div>
        </div>
        
    );
}
export default Formulario;
