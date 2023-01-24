import React from 'react';
import './Form.css'

const Form = (props) => {

    const [post,setPost]=React.useState({id:0,title:"",type:""})

    const changeCategory=(e,typeChange)=>{
        e.preventDefault()
        let new_id=new Date().getMilliseconds()
        setPost({id:new_id,title:post.title,type:typeChange})
    }

    const addPost=(e)=>{
        e.preventDefault()
        if (post.value!=="" && post.type!==""){
            let new_id=new Date().getMilliseconds()
            setPost({id:new_id,title:post.title,type:post.type})
            props.addPost(post)
            setPost({id:0,title:"",type:""})
            props.setActive(false)
           
        }

    }

    return (

        <div className={props.active?'modal active':'modal'} onClick={()=>props.setActive(false)}>
            <div className='modal__content' onClick={e=>e.stopPropagation()}>
            <form>
            <input type="text" value={post.title} onChange={(e)=>setPost({id:0,title:e.target.value,type:""})} />
            <button className='btn' onClick={(e)=>addPost(e)}>Отправить</button>
            <div className='category_btn' >
                <button className='btn ctg Easy' onClick={(e)=>changeCategory(e,"Easy")}>Легко</button>
                <button className='btn ctg Normal' onClick={(e)=>changeCategory(e,"Normal")}>Нормально</button>
                <button className='btn ctg Hard' onClick={(e)=>changeCategory(e,"Hard")}>Сложно</button>
            </div>
            </form>
            </div>
        </div>
     
    );
};

export default Form;