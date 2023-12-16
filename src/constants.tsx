import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <Icon icon="lucide:home" width="24" height="24" />,
    },
    {
        title: 'Crypto',
        path: '/crypto',
        icon: <Icon icon="lucide:folder" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
            { title: 'Cryptos', path: '/crypto' },
            { title: 'Trending Cryptos', path: '/trending' },
        ],
    },
    {
        title: 'Stocks',
        path: '/stocks',
        icon: <Icon icon="lucide:mail" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
            { title: 'Best Stocks to buy', path: '/expense/expense' },
        ],
    },
    {
        title: 'Expenses',
        path: '/expense',
        icon: <Icon icon="lucide:settings" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
            { title: 'Track Expenses', path: '/expense/expense' },
        ],
    },
    {
        title: 'Help',
        path: '/help',
        icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
    },
];