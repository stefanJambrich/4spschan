import BoardLayout from "../board-layout/BoardLayout";

const Board: React.FC<{ title: string }> = ({ title }) => {
    return (
        <BoardLayout title={title}>
            
        </BoardLayout>
    );
}

export default Board;