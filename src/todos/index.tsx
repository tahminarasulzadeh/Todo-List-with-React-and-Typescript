import { useRef } from "react";
import "./app.scss";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({
  todo,
  setTodo,
  handleAdd,
  }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        className="todo"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          type="text"
          ref={inputRef}
          placeholder="Add a Todo...."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          +
        </button>
      </form>
    </div>
  );
};

export default InputField;
