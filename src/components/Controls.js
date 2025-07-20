import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Controls({ size, setSize, sort, setSort, page }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <div className="text-gray-600">Showing {(page - 1) * size + 1} - {page * size} of ?</div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Show per page:</span>
          <Select defaultValue={String(size)} onValueChange={(val) => setSize(parseInt(val))}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Sort by:</span>
          <Select defaultValue={sort} onValueChange={setSort}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="-published_at">Newest</SelectItem>
              <SelectItem value="published_at">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}