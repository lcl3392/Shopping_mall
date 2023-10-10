import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, update } from "../store/modules/customerSlice";

const CustomerEdit = () => {
    const { current } = useSelector(state => state.customerR)
    const [user, setUser] = useState(current)

    const { name, title , content, date } = user
    const [ now , setNow ] = useState( new Date()) //작성일
    const navigate  = useNavigate()
    const dispatch  = useDispatch()

    const changeInput = (e) => {
        const { name , value } = e.target
        setUser({
            ...user ,
            [name] :value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        //작성일
        user.date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate() }`

        if( !title || !content || !name ) return
        dispatch( update(user) )
        setUser({
            name:'', content:'', title:''
        })
        navigate('/customer')
    }

    const onGo  = (e)  => {
        e.preventDefault()
        navigate('/customer')
    }
    
    return (
        <>
            <div className="inner">
                <h2> 고객문의 </h2>
                <form  className="customer-add" onSubmit={onSubmit}>
                    <p>  <input type="text" placeholder="제목" value={title} name="title" onChange={ changeInput }/></p>
                    <p>  <input type="text" placeholder="작성자" value={name} name="name" onChange={ changeInput } /></p>
                    <p>
                        <textarea cols="100" rows="10"
                        placeholder="문의하기"
                        value={content} name="content"
                        onChange={ changeInput }
                        ></textarea></p>
                    <p>
                        <button onClick={ onGo }>목록으로</button>
                        <button type="submit">저장하기</button>
                        <button onClick={ onGo }>취소하기</button>
                    </p>
                </form>
            </div>
        </>
    );
};
export default CustomerEdit;