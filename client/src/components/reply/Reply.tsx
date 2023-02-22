import URL from '../../constants/URL.json';

interface Props {
    description: string,
    number: number,
    img: string
}

const Reply: React.FC<Props> = (props: Props) => {
    return (
        <div id="reply-wrapper">
            {props.img ? <img src={`${URL.URL}:${URL.PORT}/${props?.img}`} alt="" /> : <></>}
            <div id="text">
                <h2>Anonymous - No.{props.number}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
 
export default Reply;