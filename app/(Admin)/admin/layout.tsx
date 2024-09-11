import Header from "@/components/admin/header";
import SideBar from "@/components/admin/sidebar";
import { RoleGate } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RoleGate allowedRole={UserRole.ADMIN}>
          <Header />
          <div className="flex items-start">
            <SideBar />
            {children}
          </div>
        </RoleGate>
      </body>
    </html>
  );
}
