import { Metadata } from "next";
import { getUserProfile } from "./actions";
import { AdminPanel } from "./adminPanel";

export const metadata: Metadata = {
  title: "Painel de Controle",
  description: "Painel de Controle",
  openGraph: {
    title: "Painel de Controle",
    description: "Painel de Controle",
    url: "https://painel.com",
    siteName: "Painel de Controle",
    images: [{ url: "https://painel.com/og-image.png" }],
  },
};

export default async function PainelAdmPage() {
  const { data } = await getUserProfile();
  return <AdminPanel user={data!} />;
}
