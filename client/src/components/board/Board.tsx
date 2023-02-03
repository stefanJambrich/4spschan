import { useEffect, useState } from "react";
import ThreadCard from "../thread-card/ThreadCard";
import axios from 'axios';
import URL from '../../constants/URL.json';
import { Link, useLocation } from "react-router-dom";
import BoardLayout from "../board-layout/BoardLayout";

const Board: React.FC<{ title: string, board: string }> = ({ title, board }) => {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        axios.get(`${URL.URL}:${URL.PORT}/${URL.API}/thread/${board}/all`).then((data) => {
            setThreads(data.data);
        });
    }, [useLocation().pathname]);

    return (
        <BoardLayout board={board} title={title}>
            <div id="children-wrapper">
                {
                    threads.map((thread: any) => {
                        return <Link to={`/${board}/thread/${thread.id}`} id='thread-link'><ThreadCard title={thread.title} description={thread.description} img={thread.img} /></Link>
                    })
                }
            </div>
        </BoardLayout>
    );
}

export default Board;