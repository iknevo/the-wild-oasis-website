"use client";
import { useRouter } from "next/navigation";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  const router = useRouter();
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>
      <div className="flex items-center gap-4">
        <button
          onClick={reset}
          className="inline-block cursor-pointer bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        >
          Try again
        </button>
        <button
          onClick={() => router.back()}
          className="inline-block cursor-pointer bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        >
          Go Back
        </button>
      </div>
    </main>
  );
}
