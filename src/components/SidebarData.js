import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

export const SidebarData =[
    {
        title: 'Home',
        path:'/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'work',
        path:'/work',
        icon: <FaIcons.FaCode />,
        cName: 'nav-text'
    },
    {
        title: 'about',
        path:'/about',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }
]