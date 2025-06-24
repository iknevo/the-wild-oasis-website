"use client";
import { useState } from "react";
interface Props {
  users: {}[];
}
export default function Counter({ users }: Props) {
  const [count, setCount] = useState(0);
  console.log(users);
  return (
    <button onClick={() => setCount((count) => count + 1)}>{count}</button>
  );
}
