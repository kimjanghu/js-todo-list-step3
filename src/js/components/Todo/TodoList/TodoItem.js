import { PRIORITY_TYPE } from "../../../utils/constants.js";

export default function TodoItem({ _id, contents, isCompleted, priority }) {
  const setChipView = () => {
    return `
      <select class="chip select ${setSelectboxColor(priority)}">
        <option value="0" ${checkSelected(priority, PRIORITY_TYPE.NONE)}>순위</option>
        <option value="1" ${checkSelected(priority, PRIORITY_TYPE.FIRST)}>1순위</option>
        <option value="2" ${checkSelected(priority, PRIORITY_TYPE.SECOND)}>2순위</option>
      </select>
    `;
  };

  const setSelectboxColor = () => {
    switch (priority) {
      case PRIORITY_TYPE.FIRST:
        return "primary";
      case PRIORITY_TYPE.SECOND:
        return "secondary";
      default:
        return "";
    }
  };

  const checkSelected = (value) => (priority === value ? "selected" : "");

  const checkCompleteChecked = () => (isCompleted ? "checked" : "");

  const checkCompleteClass = () => (isCompleted ? "completed" : "");

  return `
    <li data-todo-id=${_id} class="todo-list-item ${checkCompleteClass()}">
      <div class="view">
        <input class="toggle" type="checkbox" ${checkCompleteChecked()}/>
        <label class="label">
          <div class="chip-container">
            ${setChipView()}
          </div>
          ${contents}
        </label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value=${contents} />
    </li>
  `;
}
