import Counter from "../components/Counter";

interface User {
  id: number;
  name: string;
}

export default async function Page({}) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return (
    <>
      <ul>
        {data.map((item: User) => (
          <li key={item.id}>
            {item.name}
            {item.id + 1}
          </li>
        ))}
      </ul>
      <Counter users={data} />
    </>
  );
}
