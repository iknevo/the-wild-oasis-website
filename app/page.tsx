import { NextPage } from "next";
import Link from "next/link";
import Navigation from "./components/Navigation";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <h1>the wild oasis website</h1>
      <Link href="/cabins">cabins</Link>
    </div>
  );
};

export default Page;
