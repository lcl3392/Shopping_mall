import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="inner">
                <h2>
                    <Link to="/">
                    <img src="https://earpearp.cafe24.com/2022_web_img/web/footer_logo.png" alt="" />
                    </Link>
                </h2>
            </div>
        </footer>
    );
};

export default Footer;