import { useSelector } from 'react-redux';
import './NoticeList.css'
import NoticeItem from './NoticeItem';
 
const NoticeList = () => {
    const {data} = useSelector(state=> state.noticeR)
    return (
        <table className="noticeTable">
            <caption>게시판</caption>
            <colgroup>
                <col className="num" />
                <col className="title" />               
                <col className="date" />               
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>내용</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                 {
                    data.map(item => <NoticeItem key={item.id} item={item}/>)
                 }
           </tbody>
        </table>
    );
};

export default NoticeList;