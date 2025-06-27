import { NextPage } from "next";

export const metadata = {
  title: "Account",
};

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome! ahmed
    </h2>
  );
};

export default Page;
