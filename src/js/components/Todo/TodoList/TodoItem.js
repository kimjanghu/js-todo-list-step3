export default function TodoItem({ _id, contents, isCompleted, priority }) {
  return `
    <li data-todo-id=${_id} class="todo-list-item">
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label class="label">
          <div class="chip-container">
            <select class="chip select">
              <option value="0" selected>순위</option>
              <option value="1">1순위</option>
              <option value="2">2순위</option>
            </select>
          </div>
          ${contents}
        </label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value=${contents} />
    </li>
  `;
}
