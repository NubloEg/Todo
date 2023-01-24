import React from "react";
import "./App.css"
import plus from "./img/Plus.svg"
import Form from "./Todos/Form/Form";
import {Todo} from "./Todos/Todo/Todo";

let now = new Date().toLocaleDateString();
let nowWeek= now.split("/");


const filterDate=(m)=>{
    const mounth_word=new Map([
        ["1", "Январь"],
        ["2", "Февраль"],
        ["3", "Март"],
        ["4", "Апрель"],
        ["5", "Май"],
        ["6", "Июнь"],
        ["7", "Июль"],
        ["8", "Август"],
        ["9", "Сентябрь"],
        ["10", "Октябрь"],
        ["11", "Ноябрь"],
        ["12", "Декабрь"],
    ]);

    return mounth_word.get(m);
}

function App() {
    const [modalActive,setModalActive]=React.useState(false)
   
    const [allTodos,setAllTodos]=React.useState([
        {id:1,title:"Купить хлеб",type:"Hard"},
        {id:2,title:"Купить стул",type:"Easy"},
        {id:3,title:"Купить стул",type:"Normal"}])



    const addPost=(newPost)=>{
        debugger;
        console.log(newPost.value)
        setAllTodos([...allTodos,newPost])
       
        filterDate(nowWeek[0]);
    }

    const removeTodo=(id)=>{
        debugger;
        setAllTodos( allTodos.filter((todo)=>todo.id!==id))
       
    }

    const editTodo=(id,newTitle)=>{
        debugger;
        let new_all_todos=allTodos.filter((todo)=>{
            if (todo.id===id){
                todo.title=newTitle
            }
            return todo
        })
        setAllTodos( new_all_todos)
    }

  return (
    <div className="wrapper">
        <div className="container">
            <div className={"h1"}>
                <h1>To Do List</h1>
            </div>
            <h2>{nowWeek[1]} {filterDate(nowWeek[0])} {nowWeek[2]}</h2>
            <Form active={modalActive} setActive={setModalActive} addPost={addPost} title={"Добавить"} />
            
            {allTodos.map(el=>{
                return <Todo key={el.id}  id={el.id} title={el.title} type={el.type} remove={removeTodo} edit={editTodo}/>
            })}
            <div className="plus">
                <img src={plus} alt="add" onClick={()=>setModalActive(true)}  />
            </div>
        </div>




    </div>
  );
}


export default App;
