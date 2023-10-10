import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    //장바구니 숫자
    const {carts} = useSelector(state => state.cartR)
    return (
        <nav className="nav">
            <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/Profile">제품</Link></li>
            <li><Link to="/project">제품</Link></li>
            <li><Link to="/notice">공지사항</Link></li>
            <li><Link to="/customer">고객문의</Link></li>     

            <li><Link to="/"> 
                 장바구니 <i className="xi-cart-add"></i>{carts.length}개
                </Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;