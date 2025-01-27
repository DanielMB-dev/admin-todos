import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/auth/authOptions";




export default async function DashboardPage() {
  const session =await  getServerSession(authOptions)
  !session && redirect('/api/auth/signin')

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <WidgetItem />

      </div>
    </>
  );
}