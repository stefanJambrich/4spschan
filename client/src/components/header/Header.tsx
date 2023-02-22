import logo from '../../assets/spsmb_logo.png';
import { Link } from 'react-router-dom';
import { ChangeEvent, useRef, useState } from 'react';
import axios from 'axios';
import URL from '../../constants/URL.json';
import { random } from '../../helpers/randomNum';

interface Props {
    title: string,
    board: string
}

const Header: React.FC<Props> = (props: Props) => {
    const [newThread, setNewThread] = useState<boolean>(false);
    const [file, setFile] = useState<Blob>();
    const inpTitle = useRef<HTMLInputElement>(null);
    const inpDesc = useRef<HTMLTextAreaElement>(null);

    const createThread = async (e: any) => {
        e.preventDefault();
        await axios.post(`${URL.URL}:${URL.PORT}/${URL.API}/thread`, {
            board: props.board,
            title: inpTitle.current?.value,
            description: inpDesc.current?.value,
            img: file?.name,
            number: random(10000000, 99999999)
        });

        const formData = new FormData();
        //@ts-ignore
        formData.append('img', file);
        await axios({
            method: 'post',
            url: `${URL.URL}:${URL.PORT}/${URL.API}/image`,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        //@ts-ignore
        window.location.reload(false);
    }

    const handleChange = (event: any) => {
        setFile(event?.target.files[0]);
    }

    return (
        <div id="header">
            <p>
                [
                    <Link to={'/prasit'}>prasit </Link>
                    /
                    <Link to={'/pro'}> pro </Link>
                    /
                    <Link to={'/wm'}> wm </Link>
                    /
                    <Link to={'/o'}> o </Link>
                    /
                    <Link to={'/r'}> r</Link>
                ]
            </p>
            <h1 id='title'>4spschan.org</h1>
            <img src={logo} alt="" id='board-logo' />
            <div id='new-thread-creation'>
                <button id={`${newThread ? 'new-thread-toggled-btn' : ''}`} onClick={() => setNewThread(!newThread)}>Vytvořit nový thread</button>
                <div id={`${newThread ? 'new-thread-toggled' : 'untoggled'}`}>
                    <form>
                        <input required type="text" placeholder='Titulek threadu' ref={inpTitle} />
                        <textarea required placeholder='Popisek' ref={inpDesc} />
                        <input required type="file" onChange={(event) => handleChange(event)} />
                        <button onClick={(event) => createThread(event)} type='submit'>Vytvořit</button>
                    </form>
                </div>
            </div>
            <h1>{props.title}</h1>
        </div>
    );
}

export default Header;