/**
 * @file contexts/kanban-board-context.ts
 * @description Kanban board context for managing global state related to the Kanban board.
 */

import { INITIAL_KANBAN_DATA } from '@/data/initial-kanban-data';
import { createContext } from 'react';

/**
 * Type definition for the Kanban board context.
 * @typedef {Object} KanbanBoardContextType
 * @property {KanbanListType[]} kanbanData - The initial Kanban data.
 * @property {(data: KanbanListType[]) => void} setKanbanData - Function to set the Kanban data.
 * @property {KanbanListType[]} filteredKanbanData - The filtered Kanban data.
 * @property {(data: KanbanListType[]) => void} setFilteredKanbanData - Function to set the filtered Kanban data.
 * @property {string} searchQuery - The search query for filtering tasks.
 * @property {(search: string) => void} setSearchQuery - Function to set the search query.
 */
export type KanbanBoardContextType = {
  kanbanData: KanbanListType[];
  setKanbanData: (data: KanbanListType[]) => void;
  filteredKanbanData: KanbanListType[];
  setFilteredKanbanData: (data: KanbanListType[]) => void;
  searchQuery: string;
  setSearchQuery: (search: string) => void;
};

/**
 * Initial data for the Kanban board context.
 * @constant
 * @type {KanbanBoardContextType}
 */
export const INITIAL_KANBAN_CONTEXT_DATA: KanbanBoardContextType = {
  kanbanData: INITIAL_KANBAN_DATA,
  setKanbanData: () => {},
  filteredKanbanData: INITIAL_KANBAN_DATA,
  setFilteredKanbanData: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
} satisfies KanbanBoardContextType;

/**
 * Kanban board context for managing global state related to the Kanban board.
 * @constant
 * @type {React.Context<KanbanBoardContextType>}
 */
export const KanbanBoardContext: React.Context<KanbanBoardContextType> =
  createContext<KanbanBoardContextType>(INITIAL_KANBAN_CONTEXT_DATA);
