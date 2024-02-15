'use client';
import { cn } from '@/helpers/utils';
import { forwardRef } from 'react';
import { KanbanCard } from './kanban-card';

export interface KanbanListProps
  extends React.HTMLAttributes<HTMLDivElement>,
  KanbanListType {
  index: number;
}

export const KanbanList = forwardRef<HTMLDivElement, KanbanListProps>(
  ({ className, listItems = [], listName, index, ...args }, ref) => {
    return (
      <div>
        <div className="kanban-list-details-wrapper px-2 mb-2">
          <p className="leading-snug font-medium tracking-tight text-gray-500 text-sm">
            {listName}
          </p>
        </div>
        <div
          ref={ref}
          className={cn(
            'kanban-list p-2 border-b-4 border-transparent rounded-xl bg-gray-100/80 min-w-[280px] w-fit max-w-[300px] h-[600px] overflow-y-scroll',
            className,
          )}
          {...args}>
          <div className="grid grid-cols-1 gap-2">
            {listItems.map((card: KanbanCardType, index: number) => {
              return (
                <KanbanCard key={index} index={index} draggable {...card} />
              );
            })}
          </div>
        </div>
      </div>
    );
  },
);

KanbanList.displayName = 'KanbanList';
