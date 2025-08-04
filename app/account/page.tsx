import { Session } from "next-auth";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session: Session = (await auth())!;
  return (
    <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
      Welcome! {session?.user?.name}
    </h2>
  );
}
