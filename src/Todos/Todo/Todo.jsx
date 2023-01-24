import React from "react";
import "./Todo.css"
import pen from "../../img/pen.svg"
import trash from "../../img/Trash.svg"

const translate=new Map([
    ["Easy", "Легко"],
    ["Normal", "Нормально"],
    ["Hard", "Сложно"],
]);

export const Todo = (props) => {
    return <div className="border">
        <div>
            <div>{props.title} </div>
            <div className="category">
                <span className={props.type}>{translate.get(props.type)}</span></div>
        </div>
        <div className="button">
            <img src={pen} alt={"pen"} className={"pen"}/>
            <img onClick={()=>props.remove(props.id)} src={trash} alt={"trash"}/>
        </div>

    </div>
}