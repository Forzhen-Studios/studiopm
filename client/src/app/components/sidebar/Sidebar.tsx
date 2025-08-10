"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  //   Folder,
  Settings,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const menu = [
  {
    title: "Workspace",
    icon: <LayoutDashboard className="w-4 h-4" />,
    items: [
      { label: "Home", href: "/home" },
      { label: "Tasks", href: "/tasks" },
      { label: "Projects", href: "/projects" },
      { label: "Docs", href: "/docs" },
      { label: "Resources", href: "/resources" },
      { label: "Form builder", href: "/form-builder" },
    ],
  },
  {
    title: "Settings",
    icon: <Settings className="w-4 h-4" />,
    items: [
      { label: "Profile", href: "/settings/profile" },
      { label: "Team", href: "/settings/team" },
    ],
  },
];

export default function Sidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Workspace: true,
    Settings: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="w-60 bg-[#202020] border border-neutral-700 overflow-y-auto z-50 py-10 p-4">
      <div className="flex items-center justify-center mb-10 gap-3">
        <Image
          src="/FPM-logo.svg"
          width={25}
          height={25}
          alt="Picture of the author"
        />
        <h3 className="font-semibold text-sm p-1 text-emerald-500 leading-4 border">FPM</h3>
      </div>
      {menu.map((section) => (
        <div key={section.title} className="mb-4">
          <button
            onClick={() => toggleSection(section.title)}
            className="flex items-center justify-between w-full px-2 py-1.5 text-[14px] font-semibold text-neutral-500 hover:bg-neutral-800 rounded"
          >
            <div className="flex items-center gap-2">
              {section.icon}
              {section.title}
            </div>
            {openSections[section.title] ? (
              <ChevronDown className="w-4 h-4" />
            ) : ( 
              <ChevronRight className="w-4 h-4" />
            )}
          </button>

          {openSections[section.title] && (
            <ul className="pl-3 mt-2 space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "block px-2 py-1.5 text-[14px] font-semibold text-neutral-500 rounded hover:bg-neutral-800 hover:text-white"
                      // TODO: Add logic to highlight active page
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
}
