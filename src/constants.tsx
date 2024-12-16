import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Budget",
    path: "/budget",
    icon: <Icon icon="carbon:piggy-bank" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Budget", path: "/budget/add" },
      { title: "View Budget", path: "/budget/view" },
    ],
  },
  {
    title: "Crypto",
    path: "/crypto",
    icon: <Icon icon="mdi:bitcoin" width="24" height="24" />,
    submenu: true,
    subMenuItems: [{ title: "Cryptos", path: "/crypto" }],
  },
  {
    title: "Stocks",
    path: "/stocks",
    icon: <Icon icon="emojione-v1:stock-chart" width="24" height="24" />,
    submenu: true,
    subMenuItems: [{ title: "Predicted Stocks", path: "/stocks/best" }],
  },
  {
    title: "Expenses",
    path: "/expense",
    icon: <Icon icon="ph:money" width="24" height="24" />,
    submenu: true,
    subMenuItems: [{ title: "Track Expenses", path: "/expense" }],
  },
  {
    title: "Logout",
    path: "/",
    icon: <Icon icon="uil:exit" width="24" height="24" />,
  },
];
