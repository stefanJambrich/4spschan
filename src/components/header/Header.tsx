import logo from '../../assets/spsmb_logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header: React.FC<{ title: string }> = ({ title }) => {
    const [newThread, setNewThread] = useState<boolean>(false);

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
            <div id='new-thread-creation'>
                <button id={`${newThread ? 'new-thread-toggled-btn' : ''}`} onClick={() => setNewThread(!newThread)}>Vytvořit nový thread</button>
                <div id={`${newThread ? 'new-thread-toggled' : 'untoggled'}`}>
                    <input type="text" placeholder='Titulek threadu' />
                    <textarea placeholder='Popisek' />
                    <button>Vytvořit</button>
                </div>
            </div>
            <h1>{title}</h1>
        </div>
    );
}
 
export default Header;