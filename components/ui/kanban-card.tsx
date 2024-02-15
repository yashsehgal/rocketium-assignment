'use client';
import { cn } from '@/helpers/utils';
import { forwardRef } from 'react';
import { Badge } from './badge';
import { BadgeThemeForTeam } from '@/common/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sheet, SheetTrigger } from './sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export interface KanbanCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    KanbanCardType {
  index: number;
}

export const KanbanCard = forwardRef<HTMLDivElement, KanbanCardProps>(
  (
    {
      className,
      taskTitle,
      tags,
      assignees,
      ticketID,
      teamName,
      index,
      ...args
    },
    ref,
  ) => {
    return (
      <motion.div
        initial={{
          y: (index + 1) * 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          bounce: 0.65,
        }}
        whileTap={{
          rotate: -4,
        }}>
        <Sheet>
          <SheetTrigger asChild>
            <div
              ref={ref}
              className={cn(
                'kanban-card bg-white rounded-lg shadow-sm py-4 px-4 cursor-pointer hover:shadow-lg transition-all active:scale-90 select-none',
                className,
              )}
              id={`${taskTitle}-${ticketID}`}
              {...args}>
              <Badge theme={BadgeThemeForTeam[teamName]} className="mb-2">
                {teamName}
              </Badge>
              <p className="kanban-card-title text-sm font-medium">
                {taskTitle}
              </p>
              <div className="my-3 flex flex-row items-center justify-between">
                <p className="kanban-card-ticket-id-wrapper text-xs uppercase text-gray-400 font-medium">
                  {`Ticket #${ticketID}`}
                </p>
                <div className="flex flex-row items-center justify-end gap-0">
                  {assignees.map(({ username, avatar }, index) => {
                    return (
                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Image
                              src={avatar}
                              alt={username}
                              width={24}
                              height={24}
                              className="rounded-full even:ml-[-4px]"
                              priority
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>@{username}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-2">
                {tags?.map((tag: string, index: number) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </div>
          </SheetTrigger>
        </Sheet>
      </motion.div>
    );
  },
);

KanbanCard.displayName = 'KanbanCard';
