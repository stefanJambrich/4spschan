import logo from '../../assets/spsmb_logo.png'
import BoardList from '../board-list/BoardList';

const Home = () => {
    return (
        <div id="home-wrapper">
            <h1>Vítej na message boardě pro prumkaře!</h1>
            <img src={logo} alt="spsmb logo" id='logo' />
            <h1>4spschan.org</h1>
            <BoardList />
        </div>
    );
}
 
export default Home;