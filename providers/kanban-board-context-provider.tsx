'use client';
import { KanbanBoardContext } from '@/contexts/kanban-board-context';
import { fetchInitialKanbabData } from '@/scripts';
import { useEffect, useState } from 'react';

export default function KanbanBoardContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [kanbanData, setKanbanData] = useState<KanbanListType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Ensure code runs only on the client side
        if (typeof window !== 'undefined' && window.localStorage) {
          let response: KanbanListType[] = await fetchInitialKanbabData();
          setKanbanData(response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <KanbanBoardContext.Provider
      value={{ searchQuery, setSearchQuery, kanbanData, setKanbanData }}>
      {children}
    </KanbanBoardContext.Provider>
  );
}
