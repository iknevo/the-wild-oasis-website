import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

interface Session {
  expires: string;
  user: {
    email: string;
    image: string;
    name: string;
    guestId: number;
  };
}

export default async function Page({}) {
  const session: Session = (await auth()) as Session;
  return (
    <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
      Welcome! {session?.user?.name}
      {session?.user?.guestId}
    </h2>
  );
}
