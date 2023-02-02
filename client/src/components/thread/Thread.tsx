import BoardLayout from "../board-layout/BoardLayout";

interface Props {
    title: string,
    board: string
}

const Thread: React.FC<Props> = (props) => {
    return (
        <BoardLayout title={props.title} board={props.board}>
            <div id="thread-wrapper">
                
            </div>
        </BoardLayout>
    );
}
 
export default Thread;