"use client";

import { useState } from "react";
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
      { label: "Dashboard", href: "/dashboard" },
      { label: "Projects", href: "/projects" },
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
    <aside className="w-64 bg-neutral-900 border-r border-neutral-800 h-full overflow-y-auto p-4">
      {menu.map((section) => (
        <div key={section.title} className="mb-4">
          <button
            onClick={() => toggleSection(section.title)}
            className="flex items-center justify-between w-full px-2 py-1.5 text-sm font-medium text-zinc-300 hover:bg-neutral-800 rounded"
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
            <ul className="pl-6 mt-2 space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "block px-2 py-1.5 text-sm text-zinc-400 rounded hover:bg-neutral-800 hover:text-white",
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
