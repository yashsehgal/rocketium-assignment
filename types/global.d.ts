/**
 * Represents information about an assignee.
 * @typedef {object} AssigneeType
 * @property {string} username - The username of the assignee.
 * @property {string} avatar - The avatar URL of the assignee.
 */
declare type AssigneeType = {
  username: string;
  avatar: string;
};

/**
 * Represents the possible team names.
 * @typedef {'CHRONOS' | 'LABS' | 'PHOENIX' | 'LUMOS'} TeamNameType
 */
declare type TeamNameType = 'CHRONOS' | 'LABS' | 'PHOENIX' | 'LUMOS';

/**
 * Represents a Kanban card with task details.
 * @typedef {object} KanbanCardType
 * @property {TeamNameType} teamName - The team to which the task belongs.
 * @property {string} taskTitle - The title of the task.
 * @property {number} ticketID - The unique ID of the task.
 * @property {AssigneeType[]} assignees - An array of assignees working on the task.
 * @property {string[]} [tags] - Optional array of tags associated with the task.
 */
declare type KanbanCardType = {
  teamName: TeamNameType;
  taskTitle: string;
  ticketID: number;
  assignees: AssigneeType[];
  tags?: string[];
};

/**
 * Represents a Kanban list with a name and a collection of cards.
 * @typedef {object} KanbanListType
 * @property {string} listName - The name of the Kanban list.
 * @property {KanbanCardType[]} listItems - An array of Kanban cards in the list.
 */
declare type KanbanListType = {
  listName: string;
  listItems: KanbanCardType[];
};
