/**
 * @file components/sections/kanban-view.tsx
 * @description Kanban view component for displaying and managing tasks using a Kanban board.
 */
import {
  DragDropContext,
  DragStart,
  DragUpdate,
  DropResult,
} from 'react-beautiful-dnd';
import { ResponsiveControl } from '../layouts/responsive-control';
import { useContext, useState } from 'react';
import { KanbanBoardContext } from '@/contexts/kanban-board-context';
import { KanbanList } from '../ui/kanban-list';

/**
 * Kanban view component for displaying and managing tasks using a Kanban board.
 * @function
 * @name KanbanView
 * @memberof module:components/sections
 * @returns {React.ReactElement} The KanbanView component.
 */
export default function KanbanView(): React.ReactElement {
  const { filteredKanbanData, setFilteredKanbanData, setKanbanData } =
    useContext(KanbanBoardContext);
  const [draggedItem, setDraggedItem] = useState<KanbanCardType | null>(null);
  const [draggedOverIndex, setDraggedOverIndex] = useState<number | null>(null);

  /**
   * Handles the start of a drag operation.
   * @param {DragStart} initial - The initial drag information.
   * @returns {void}
   */
  const onDragStart = (initial: DragStart): void => {
    const { source } = initial;
    const sourceList = filteredKanbanData.find(
      (list) => list.listName === source.droppableId,
    );
    const draggedTask = sourceList?.listItems[source.index];
    setDraggedItem(draggedTask || null);
  };

  /**
   * Handles updates during a drag operation.
   * @param {DragUpdate} update - The drag update information.
   * @returns {void}
   */
  const onDragUpdate = (update: DragUpdate): void => {
    const { destination } = update;
    setDraggedOverIndex(destination?.index || null);
  };

  /**
   * Handles the end of a drag operation.
   * @param {DropResult} result - The result of the drag operation.
   * @returns {void}
   */
  const onDragEnd = (result: DropResult): void => {
    // Reset state
    setDraggedItem(null);
    setDraggedOverIndex(null);

    // Dropped outside the list
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    // Update the data after dragging and dropping
    const updatedKanbanData = [...filteredKanbanData];
    const sourceList = updatedKanbanData.find(
      (list) => list.listName === source.droppableId,
    );
    const destinationList = updatedKanbanData.find(
      (list) => list.listName === destination.droppableId,
    );
    const [draggedTask] = sourceList!.listItems.splice(source.index, 1);
    destinationList!.listItems.splice(destination.index, 0, draggedTask);

    // Update the local storage with the latest Kanban data
    localStorage.setItem('kanban', JSON.stringify(updatedKanbanData));

    // Update the state to trigger a re-render
    setFilteredKanbanData(updatedKanbanData);
  };

  return (
    <div className="kanban-view py-12">
      <DragDropContext
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}>
        <ResponsiveControl className="flex flex-row items-start justify-start gap-3 max-xl:overflow-x-scroll">
          {filteredKanbanData.map((list: KanbanListType, index: number) => {
            return <KanbanList key={index} index={index} {...list} />;
          })}
        </ResponsiveControl>
      </DragDropContext>
    </div>
  );
}
