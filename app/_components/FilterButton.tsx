import { useSearchParams } from "next/navigation";

interface Props {
  handleFilter: (x: string) => void;
  filterValue: string;
  text: string;
}
export default function FilterButton({
  handleFilter,
  filterValue,
  text,
}: Props) {
  const searchParams = useSearchParams()!;
  function isActive(value: string) {
    const activeFilter = searchParams.get("capacity") ?? "all";
    return activeFilter === value;
  }
  return (
    <button
      className={`hover:bg-primary-700 px-5 py-2 ${isActive(filterValue) ? "bg-primary-700 text-primary-50" : ""}`}
      onClick={() => handleFilter(filterValue)}
    >
      {text}
    </button>
  );
}
