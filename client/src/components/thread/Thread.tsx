import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BoardLayout from "../board-layout/BoardLayout";
import URL from '../../constants/URL.json';
import Modal from 'react-modal';

interface Props {
    title: string,
    board: string
}

interface ThreadReply {
    title?: string,
    description: string,
    img: string,
    number: number
}

const Thread: React.FC<Props> = (props) => {
    const { threadId } = useParams();
    const [thread, setThread] = useState<ThreadReply>();
    const [reply, setReply] = useState<ThreadReply>();
    const [modalIsOpen, handleModal] = useState<boolean>(false);

    useEffect(() => {
        axios.get(`${URL.URL}:${URL.PORT}/${URL.API}/thread/${threadId}`).then((data) => {
            setThread(data.data);
            setReply(data.data.reply_tables);
        });
    }, [useLocation().pathname]);

    const handleCreate = async () => {

    }

    return (
        <BoardLayout title={props.title} board={props.board}>
            <Modal isOpen={modalIsOpen} contentLabel="Project Modal" id='project-modal'
                style={{
                    content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }}
            >

            </Modal>
            <div id="thread-wrapper">
                <div id="thread">
                    <img src={`${URL.URL}:${URL.PORT}/${thread?.img}`} alt="thread-image" />
                    <div id="text">
                        <div id="title">
                            <h2>{props.title} <span>Anonymous</span></h2>
                            <h2 onClick={() => handleModal(!modalIsOpen)} id="number">No.{thread?.number}</h2>
                        </div>
                        <h3>{thread?.title}</h3>
                        <p>{thread?.description}</p>
                    </div>
                </div>
                <div id="replies">
                    
                </div>
            </div>
        </BoardLayout>
    );
}

export default Thread;