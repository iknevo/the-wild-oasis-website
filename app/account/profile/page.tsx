import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";
import { Guest } from "@/app/_types";

export const metadata = {
  title: "Update Profile",
};

export default async function Page() {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error("User is not authenticated or email is missing");
  }
  const guest: Guest = await getGuest(session.user.email);
  console.log(guest);

  return (
    <div>
      <h2 className="text-accent-400 mb-4 text-2xl font-semibold">
        Update your guest profile
      </h2>

      <p className="text-primary-200 mb-8 text-lg">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm guest={guest} key={guest.nationality}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
          defaultCountry={guest.nationality}
          key={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
