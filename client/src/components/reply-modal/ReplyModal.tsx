import axios from 'axios';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import URL from '../../constants/URL.json';
import { random } from '../../helpers/randomNum';

interface Props {
    modalIsOpen: boolean,
    setModal: Dispatch<SetStateAction<boolean>>
}

const ReplyModal: React.FC<Props> = (props: Props) => {
    const [file, setFile] = useState<Blob>();
    const inpDesc = useRef<HTMLTextAreaElement>(null);
    const { threadId } = useParams();

    const createThread = async (e: any) => {
        e.preventDefault();
        await axios.post(`${URL.URL}:${URL.PORT}/${URL.API}/reply`, {
            description: inpDesc.current?.value,
            img: file?.name,
            number: random(10000000, 99999999),
            threadId: threadId
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
        <Modal isOpen={props.modalIsOpen} contentLabel="Project Modal" id='reply-modal'
            style={{
                content: {
                    width: 'fit-content',
                    height: 'fit-content',
                    position: 'absolute',
                    border: '3px solid #27336D',
                    borderRadius: '0',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }
            }}
        >
            <button onClick={() => props.setModal(!props.modalIsOpen)} id='btn'>Close</button>
            <form>
                <textarea required placeholder='Popisek' ref={inpDesc} />
                <input required type="file" onChange={(event) => handleChange(event)} />
                <button onClick={(event) => createThread(event)} type='submit' id='btn'>Vytvořit</button>
            </form>
        </Modal>
    );
}

export default ReplyModal;