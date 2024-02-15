'use client';
import { PageContainer } from '@/components/layouts/page-container';
import KanbanView from '@/components/sections/kanban-view';
import KanbanBoardContextProvider from '@/providers/kanban-board-context-provider';

export default function Home() {
  return (
    <PageContainer>
      <KanbanBoardContextProvider>
        <KanbanView />
      </KanbanBoardContextProvider>
    </PageContainer>
  );
}
