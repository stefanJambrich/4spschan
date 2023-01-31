import { useEffect, useState } from "react";
import BoardLayout from "../board-layout/BoardLayout";
import ThreadCard from "../thread-card/ThreadCard";
import axios from 'axios';

const Board: React.FC<{ title: string }> = ({ title }) => {
    const [threads, setThreads] = useState();

    const getThreads = async () => {
        await axios.get(`${process.env.URL}:${process.env.PORT}/${process.env.PORT}/`)
    }

    useEffect(() => {
        
    }, [])

    return (
        <BoardLayout title={title}>

        </BoardLayout>
    );
}

export default Board;