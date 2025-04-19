import { getUser } from "@/app/painelAdm/actions";
import { Login } from "./login";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const data = await getUser();

  if (data.success) {
    return redirect("/painelAdm");
  }

  return <Login />;
}
