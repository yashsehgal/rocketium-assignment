import { ResponsiveControl } from '../layouts/responsive-control';
import { Input } from '../ui/input';

export default function Header() {
  return (
    <header className="py-3 border-b">
      <ResponsiveControl className="flex flex-row items-center justify-between">
        <div className="header-content-wrapper">
          <h3 className="leading-snug text-lg font-semibold tracking-tight">
            {'Engineering Team / Task Board'}
          </h3>
        </div>
        <div className="header-global-search-wrapper">
          <Input
            className="w-[420px]"
            placeholder="Search tasks by title, assignee or tags"
          />
        </div>
      </ResponsiveControl>
    </header>
  );
}
