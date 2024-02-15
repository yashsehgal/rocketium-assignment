'use client';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ResponsiveControl } from '../layouts/responsive-control';
import { useContext } from 'react';
import { KanbanBoardContext } from '@/contexts/kanban-board-context';
import { KanbanList } from '../ui/kanban-list';

export default function KanbanView() {
  const { filteredKanbanData, setFilteredKanbanData } =
    useContext(KanbanBoardContext);

  const onDragEnd = (result: DropResult) => {
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
    const [draggedItem] = sourceList!.listItems.splice(source.index, 1);
    destinationList!.listItems.splice(destination.index, 0, draggedItem);
  };

  return (
    <div className="kanban-view py-12">
      <DragDropContext onDragEnd={onDragEnd}>
        <ResponsiveControl className="flex flex-row items-start justify-start gap-3 max-xl:overflow-x-scroll">
          {filteredKanbanData.map((list: KanbanListType, index: number) => {
            return <KanbanList key={index} index={index} {...list} />;
          })}
        </ResponsiveControl>
      </DragDropContext>
    </div>
  );
}
