import React, { useState } from "react";
import './AddTask.css';
import Button from "./Button";

const AddTask = ( {handleTaskAddition} ) =>{
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) =>{
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () =>{
        handleTaskAddition(inputData)
    }

    

    return (
        <div className="add-task-container">
            <input 
                className = 'add-task-input'
                value = {inputData}
                type="text" 
                onChange = {handleInputChange}
            />
            <div className="add-task-button-container">
                <Button>Adicionar</Button>
            </div>
        </div>
    )
}

export default AddTask;