import { TabBar } from "@/components";
import { cookies } from "next/headers";

export const metadata = {
 title: 'Cookies Page',
 description: 'Cookies Page',
};


export default function CookiesPage() {
   const cookieStore = cookies();
  const currTab = cookieStore.get("selectedTab")?.value ??'1';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar
          tabOptions={[1,2,3]}
          currentTab={+currTab}
        />
      </div>
    </div>
  );
}


