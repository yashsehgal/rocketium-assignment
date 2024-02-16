/**
 * @file scripts/data.ts
 * @description Module for pre-loading data for the UI.
 */
import { INITIAL_KANBAN_DATA } from '@/data/initial-kanban-data';

/**
 * Asynchronously fetches the initial Kanban data from localStorage.
 * If no data is found, stores the initial data and returns it.
 * @async
 * @function
 * @name fetchInitialKanbabData
 * @returns {Promise<KanbanListType[]>} - A promise that resolves to the initial Kanban data.
 * @throws {Error} - If there is an issue with localStorage.
 * @example
 * const kanbanData = await fetchInitialKanbabData();
 */
export async function fetchInitialKanbabData(): Promise<KanbanListType[]> {
  const storedData: string | null = localStorage.getItem('kanban');

  if (!storedData) {
    const initialDataString: string = JSON.stringify(INITIAL_KANBAN_DATA);
    localStorage.setItem('kanban', initialDataString);
    return Promise.resolve(INITIAL_KANBAN_DATA);
  } else {
    let response: KanbanListType[] = JSON.parse(storedData);
    return Promise.resolve(response);
  }
}
