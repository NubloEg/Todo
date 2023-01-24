import React from "react";
import "./Todo.css"
import pen from "../../img/pen.svg"
import trash from "../../img/Trash.svg"
import Form from '../Form/Form.jsx'

const translate=new Map([
    ["Easy", "Легко"],
    ["Normal", "Нормально"],
    ["Hard", "Сложно"],
]);



export const Todo = (props) => {
    const [modalActive,setModalActive]=React.useState(false)

    return <div className="border">
        <Form active={modalActive} setActive={setModalActive} title={"Изменить"} edit={props.edit} postid={props.id} />
        <div>
            <div>{props.title} </div>
            <div className="category">
                <span className={props.type}>{translate.get(props.type)}</span></div>
        </div>
        <div className="button">
            <img  onClick={()=>setModalActive(true)}  src={pen} alt={"pen"} className={"pen"}/>
            <img onClick={()=>props.remove(props.id)} src={trash} alt={"trash"}/>
        </div>

    </div>
}