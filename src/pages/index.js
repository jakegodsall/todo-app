import TodoItem from './../components/TodoItem';

export default function Home() {
    return (
        <div>
            <h1 className='text-3xl font-bold underline'>Hello world!</h1>
            <TodoItem>Jog around the park 3x</TodoItem>
            <TodoItem>10 minutes meditation</TodoItem>
            <TodoItem>Read for 1 hour</TodoItem>
            <TodoItem>Pick up groceries</TodoItem>
            <TodoItem>Complete Todo App on Frontend Mentor</TodoItem>
        </div>
    );
}
