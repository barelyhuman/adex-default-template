import { html, reactive } from "@arrow-js/core";
import { nanoid } from "nanoid";

const state = reactive({
  todo: "",
  todos: [
    {
      id: nanoid(),
      task: "hello",
    },
  ],
});

const onRemove = (id) => {
  state.todos = state.todos.filter((x) => x.id !== id);
};

const onEnter = (e) => {
  if (e.code === "Enter") {
    state.todos = state.todos.concat({
      id: nanoid(),
      task: state.todo,
    });
    state.todo = "";
  }
};

export default function Page() {
  return html`
    <div>
      <div>
        <input
          placeholder="new todo"
          @input="${(e) => (state.todo = e.target.value)}"
          @keyup="${(e) => onEnter(e)}"
          value="${() => state.todo}"
        />
        <pre>Preview: ${() => state.todo}</pre>
      </div>

      <div>
        <ul>
          ${() =>
            List({
              todos: state.todos,
            })}
        </ul>
      </div>
    </div>
  `;
}

function List({ todos } = {}) {
  return todos.map((todoItem) => ListItem({ todoItem }));
}

function ListItem({ todoItem } = {}) {
  return html`
    <li>${todoItem.task}</li>
    <button @click="${() => onRemove(todoItem.id)}">Remove</button>
  `;
}
