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
        if (props.title==="Изменить") {
            props.edit(props.postid,post.title)
            setPost({id:0,title:"",type:""})
            props.setActive(false)
            
        }else{
            if (post.value!=="" && post.type!==""){
                let new_id=new Date().getMilliseconds()
                setPost({id:new_id,title:post.title,type:post.type})
                props.addPost(post)
                setPost({id:0,title:"",type:""})
                props.setActive(false)
               
            }
        }
        
        

    }



    

    return (

        <div className={props.active?'modal active':'modal'} onClick={()=>props.setActive(false)}>
            <div className='modal__content' onClick={e=>e.stopPropagation()}>
            
            <form>
            <h1 className='h2' >{props.title}</h1>
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