
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const NoticeDetail = () => {
  const {noticeID} = useParams()
  const {data} = useSelector(state => state.noticeR)
                                            // 얘는 숫자가 아니기 때문에 넘버로 감싸야함
  const notice = data.find(item => item.id === Number(noticeID))
  const {id, title, content, date} = notice
  
  const navigate = useNavigate()
  const onGo = () => {
    navigate('/notice')
  }

    return (
        <>
          <div className="inner">
            <h2> {title} </h2>
            <div className="notice-con">
                <p> {content} </p>
                <p> {date} </p>
            </div>
            <button onClick={()=>onGo()}>목록으로</button>
          </div>
        </>
    );
};

export default NoticeDetail;