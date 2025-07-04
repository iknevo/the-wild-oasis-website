import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid place-items-center">
      <Spinner />
      <p>Loading...</p>
    </div>
  );
}
