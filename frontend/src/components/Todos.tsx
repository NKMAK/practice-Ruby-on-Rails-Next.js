import { use } from "react";
import { Todo } from "../types";

const Todos = ({ todos }: { todos: Promise<Todo[]> }) => {
  const posts = use(todos);

  return (
    <div style={{ border: '1px solid blue' }}>
      <h3>Todosコンポーネント</h3>
      <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>title: {post.title}</p>
              <p>content: {post.content}</p>
            </li>
          ))}
      </ul>
    </div>
  )
};

export default Todos;

