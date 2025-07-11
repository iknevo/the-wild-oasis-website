import bg from "@/public/bg.png";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <main className="mt-24">
      <Image
        className="object-cover object-top"
        placeholder="blur"
        src={bg}
        quality={80}
        fill
        alt="Mountains and forests with two cabins"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-primary-50 mb-10 text-8xl font-normal tracking-tight">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 text-primary-800 hover:bg-accent-600 px-8 py-6 text-lg font-semibold transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
};

export default Page;
