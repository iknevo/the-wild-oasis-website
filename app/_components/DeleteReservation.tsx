"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import { deleteReservation } from "../_lib/actions";
import SpinnerMini from "./SpinnerMini";

type DeleteReservationProps = {
  bookingId: number;
  onDelete: (x: number) => void;
};

function DeleteReservation({ bookingId, onDelete }: DeleteReservationProps) {
  const [pending, start] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      start(() => onDelete(bookingId));
  }
  return (
    <button
      onClick={handleDelete}
      className="group text-primary-300 hover:bg-accent-600 hover:text-primary-900 flex flex-grow cursor-pointer items-center gap-2 px-3 text-xs font-bold uppercase transition-colors"
    >
      {pending ? (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      ) : (
        <>
          <TrashIcon className="text-primary-600 group-hover:text-primary-800 h-5 w-5 transition-colors" />
          <span className="mt-1">Delete</span>{" "}
        </>
      )}
    </button>
  );
}

export default DeleteReservation;
