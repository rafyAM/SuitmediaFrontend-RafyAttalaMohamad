import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center items-center gap-2">
      <Button variant="ghost" size="sm" className="p-2" onClick={() => setPage((p) => Math.max(p - 1, 1))}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button size="sm" className="w-8 h-8 bg-orange-500 hover:bg-orange-600 text-white">
        {page}
      </Button>
      <Button variant="ghost" size="sm" className="p-2" onClick={() => setPage((p) => p + 1)}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}