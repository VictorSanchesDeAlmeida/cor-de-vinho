import { AdminPanelLayout } from "./adminPanelLayout";

export default function PainelAdmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
