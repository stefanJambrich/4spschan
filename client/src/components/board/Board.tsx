import { useEffect, useState } from "react";
import BoardLayout from "../board-layout/BoardLayout";
import ThreadCard from "../thread-card/ThreadCard";
import axios from 'axios';
import URL from '../../constants/URL.json';

const Board: React.FC<{ title: string, board: string }> = ({ title, board }) => {
    const [threads, setThreads] = useState([]);

    const createThreads = async () => {
        threads.forEach((thread: any) => {
            return <ThreadCard props={thread} />
        });
    }

    useEffect(() => {
        axios.get(`${URL.URl}:${URL.PORT}/${URL.API}/thread/${board}/all`).then((data) => {
            setThreads(data.data);
        });
    }, [])

    return (
        <BoardLayout title={title}>
            <div>
                {
                    threads.map((thread: any) => {
                        return <ThreadCard props={thread} />
                    })
                }
            </div>
        </BoardLayout>
    );
}

export default Board;