import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BoardLayout from "../board-layout/BoardLayout";
import URL from '../../constants/URL.json';
import Reply from "../reply/Reply";
import ReplyModal from "../reply-modal/ReplyModal";

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
    const [replies, setReplies] = useState<Array<ThreadReply>>([]);
    const [modalIsOpen, setModal] = useState<boolean>(false);

    useEffect(() => {
        axios.get(`${URL.URL}:${URL.PORT}/${URL.API}/thread/${threadId}`).then((data) => {
            setThread(data.data);
            setReplies(data.data.reply_tables);
            console.log(data.data)
        });
    }, [useLocation().pathname]);

    return (
        <BoardLayout title={props.title} board={props.board}>
            <ReplyModal setModal={setModal} modalIsOpen={modalIsOpen} />
            <div id="thread-wrapper">
                <div id="thread">
                    <img src={`${URL.URL}:${URL.PORT}/${thread?.img}`} alt="thread-image" />
                    <div id="text">
                        <div id="title">
                            <h2>{props.title} <span>Anonymous</span></h2>
                            <h2 onClick={() => setModal(!modalIsOpen)} id="number">No.{thread?.number}</h2>
                        </div>
                        <h3>{thread?.title}</h3>
                        <p>{thread?.description}</p>
                    </div>
                </div>
                <div id="replies">
                    {
                        replies ? replies.map((reply: ThreadReply) => {
                            return <Reply description={reply.description} number={reply.number} img={reply.img} />
                        }) : <p>Loading...</p>
                    }
                </div>
            </div>
        </BoardLayout>
    );
}

export default Thread;