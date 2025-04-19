import { supabase } from "@/lib/supabase/browser";

interface UserResponse {
  first_name: string;
}

export async function FindUserById({
  id,
}: {
  id: string;
}): Promise<UserResponse | null> {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("id", id)
    .single();

  if (error || !data) console.error("Erro ao buscar usuário: ", error);

  return data;
}
