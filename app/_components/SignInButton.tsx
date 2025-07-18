import Image from "next/image";
import { signInAction } from "../_lib/actions";

export default function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="border-primary-300 hover:bg-primary-900 flex cursor-pointer items-center gap-6 border px-10 py-4 text-lg font-medium transition-colors">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}
