import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BoardLayout from "../board-layout/BoardLayout";
import URL from '../../constants/URL.json';

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

    useEffect(() => {
        axios.get(`${URL.URL}:${URL.PORT}/${URL.API}/thread/${threadId}`).then((data) => {
            setThread(data.data);
            setReply(data.data.reply_tables);
        });
    }, [useLocation().pathname]);

    return (
        <BoardLayout title={props.title} board={props.board}>
            <div id="thread-wrapper">
                <div id="thread">
                    <img src={`${URL.URL}:${URL.PORT}/${thread?.img}`} alt="thread-image" />
                    <div id="text">
                        <h2>{props.title} <span>Anonymous</span> No.{thread?.number}</h2>
                        <h3>{thread?.title}</h3>
                        <p>{thread?.description}</p>
                    </div>
                </div>
            </div>
        </BoardLayout>
    );
}

export default Thread;