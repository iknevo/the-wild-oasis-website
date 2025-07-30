"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");
  const nationalID = String(formData.get("nationalID")).trim();
  const [nationality, countryFlag] = (
    formData.get("nationality") as string
  ).split("%");
  if (!/^\d{6,12}$/.test(nationalID)) {
    throw new Error("Please provide a valid National ID!");
  }
  const updatedData = {
    nationality,
    nationalID,
    countryFlag,
  };

  const { error } = await supabase
    .from("guests")
    .update(updatedData)
    .eq("id", session.user.guestId);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }
  revalidatePath("/account/profile");
}
