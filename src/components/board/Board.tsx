import BoardLayout from "../board-layout/BoardLayout";
import ThreadCard from "../thread-card/ThreadCard";

const Board: React.FC<{ title: string }> = ({ title }) => {
    return (
        <BoardLayout title={title}>
            <ThreadCard />
            <ThreadCard />
            <ThreadCard />
            <ThreadCard />
            <ThreadCard />
            <ThreadCard />
            <ThreadCard />
            <ThreadCard />
            <ThreadCard />
            <ThreadCard />
            <ThreadCard />
            <ThreadCard />
        </BoardLayout>
    );
}

export default Board;