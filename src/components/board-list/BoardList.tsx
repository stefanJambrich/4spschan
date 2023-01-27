import { Link } from 'react-router-dom';

const BoardList = () => {
    return (
        <div id="boardlist-wrapper">
            <ul>
                <li><Link to={'/boards/prasit'}>/prasit</Link> - Sítě a praxe by Zvíře</li>
                <li><Link to={'/boards/pro'}>/pro</Link> - Skoro vše o programování</li>
                <li><Link to={'/boards/wm'}>/wm</Link> - Webovky co ja vim</li>
                <li><Link to={'/boards/o'}>/o</Link> - Useless předměty</li>
                <li><Link to={'/boards/r'}>/r</Link> - Random</li>
            </ul>
        </div>
    );
}

export default BoardList;