import { AdminPanelLayout } from "./admin-panel-layout";

export default function PainelAdmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
