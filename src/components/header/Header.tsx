import logo from '../../assets/spsmb_logo.png';
import { Link } from 'react-router-dom';

const Header: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div id="header">
            <p>
                [
                    <Link to={'/boards/prasit'}>prasit </Link>
                    /
                    <Link to={'/boards/pro'}> pro </Link>
                    /
                    <Link to={'/boards/wm'}> wm </Link>
                    /
                    <Link to={'/boards/o'}> o </Link>
                    /
                    <Link to={'/boards/r'}> r</Link>
                ]
            </p>
            <h1 id='title'>4spschan.org</h1>
            <img src={logo} alt="" id='board-logo' />
            <h1>{title}</h1>
        </div>
    );
}
 
export default Header;