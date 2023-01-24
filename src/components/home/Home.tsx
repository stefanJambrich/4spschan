import logo from '../../assets/spsmb_logo.png'
import './main.scss'

const Home = () => {
    return (
        <div id="home-wrapper">
            <img src={logo} alt="spsmb logo" id='logo' />
            <h1>4spschan.org</h1>
        </div>
    );
}
 
export default Home;