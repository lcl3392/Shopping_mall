import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, addSort } from "../store/modules/customerSlice";
const CustomerAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({ name: "", title: "", content: "", date: "" });
  const { name, title, content, date } = user;
  //작성일
  const [now, setNow] = useState(new Date());

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    user.date = `${now.getFullYear()}-0${now.getMonth() + 1}-${now.getDate()}`;
    if (!title || !content || !name) return;
    dispatch(add(user));
    dispatch(addSort());
    setUser({
      name: "",
      content: "",
      title: "",
    });
    navigate("/customer");
  };
  const onGo = (e) => {
    e.preventDefault();
    navigate("/customer");
  };
  return (
    <>
      <div className="inner">
        <h2> 고객문의 </h2>
        <form className="customer-add" onSubmit={onSubmit}>
          <p>
            <input type="text" placeholder="제목" value={title} name="title" onChange={changeInput} />
          </p>
          <p>
            <input type="text" placeholder="작성자" value={name} name="name" onChange={changeInput} />
          </p>
          <p>
            <textarea cols="100" rows="10" placeholder="문의하기" value={content} name="content" onChange={changeInput}></textarea>
          </p>
          <p>
            <button onClick={onGo}>목록으로</button>
            <button>저장하기</button>
            <button onClick={onGo}>취소하기</button>
          </p>
        </form>
      </div>
    </>
  );
};
export default CustomerAdd;