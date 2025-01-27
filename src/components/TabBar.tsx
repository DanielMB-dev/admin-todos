// https://tailwindcomponents.com/component/radio-buttons-1
"use client";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

interface Props {
  tabOptions: number[];
  currentTab?: number;
}
export const TabBar = ({ tabOptions = [1, 2, 3, 4], currentTab }: Props) => {
  const [selected, setSelected] = useState(currentTab);
  const router = useRouter();
  const handleClick = (tab: number) => {
    setSelected(tab);
    setCookie("selectedTab", tab.toString());
    router.refresh();
  };
  return (
    <div
      className={`grid w-full ${
        "grid-cols-" + tabOptions.length
      }  space-x-2 rounded-xl bg-gray-200 p-2`}
    >
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input
            type="radio"
            id="1"
            className="peer  hidden"
            checked={tab === selected}
            onChange={() => {}}
          />
          <label
            onClick={() => handleClick(tab)}
            className="block transition-all cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
