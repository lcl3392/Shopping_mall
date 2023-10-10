import { Link } from "react-router-dom";

const NoticeItem = ({item}) => {
const {id, title, content, date} = item
    return (
        <tr>
            <td> {id}초롱이  안녕ㅎ3ㅎ </td>
            <td><Link to={`/notice/${id}`}>{title}</Link></td>
            <td>{date}</td>
        </tr>
    );
};

export default NoticeItem;
// import { Link } from "react-router-dom";

// const NoticeItem = ({item}) => {
//     const {id, title, content, date} = item
//     return (
//         <tr>
//             <td> {id} </td>
//             <td><Link to={`/notice/${id}`}>{title}</Link></td>
//             <td>{date}</td>
//         </tr>
//     );
// };

// export default NoticeItem;