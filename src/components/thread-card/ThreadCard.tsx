import card from '../../assets/card.png';

const ThreadCard = () => {
    return (
        <div id="card-wrapper">
            <img src={card} alt="" />
            <div id="replies-img">
                <p>R: 0 /</p>
                <p> I: 0</p>
            </div>
            <h4>Asians thread:</h4>
            <p>Plksdůjlfkgjůlsadkfjglkůsdjgfůlkdsjfsdlkůgfjů</p>
        </div>
    );
}
 
export default ThreadCard;