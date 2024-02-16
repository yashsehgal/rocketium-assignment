import { cn } from '@/helpers/utils';
import { forwardRef, ReactNode } from 'react';
import { KanbanCard } from './kanban-card';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export interface KanbanListProps extends React.HTMLAttributes<HTMLDivElement>, KanbanListType {
  index: number;
  children?: ReactNode;
}

export const KanbanList = forwardRef<HTMLDivElement, KanbanListProps>(
  ({ className, listItems = [], listName, index, ...args }, ref) => {
    return (
      <div>
        <div className="kanban-list-details-wrapper px-2 mb-2">
          <p className="leading-snug font-medium tracking-tight text-gray-500 text-sm">{listName}</p>
        </div>
        <Droppable droppableId={listName}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={cn(
                'kanban-list p-2 border-b-4 border-transparent rounded-xl bg-gray-100/80 min-w-[280px] w-fit max-w-[300px] h-[600px] overflow-y-scroll',
                className,
              )}
              {...args}>
              <div className="grid grid-cols-1 gap-2">
                {listItems.map((card: KanbanCardType, index: number) => {
                  return <>
                    <Draggable draggableId={`${card.taskTitle}-${card.ticketID}`} index={index}>
                      {(provided) => (<KanbanCard
                        key={index}
                        {...card}
                        index={index}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      />)}
                    </Draggable>
                  </>
                })}
              </div >
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  },
);

KanbanList.displayName = 'KanbanList';
