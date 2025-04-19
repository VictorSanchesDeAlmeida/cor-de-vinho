"use server";

import { CreateServerClient } from "@/lib/supabase/server";

const supabase = await CreateServerClient();

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return {
    success: !!user,
    user: user,
  };
}

export async function getUserProfile() {
  "use cache";
  const { user } = await getUser();

  const data = await supabase
    .from("users")
    .select("*")
    .eq("id", user!.id)
    .single<{
      first_name: string;
      last_name: string;
    }>();

  return data;
}
