import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from 'react-icons/cg'
import * as BiIcons from 'react-icons/bi'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Work',
        path: '/work',
        icon: <FaIcons.FaCode />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <CgIcons.CgUserList />,
        cName: 'nav-text info-icon'
    },
    {
        title: 'Contact',
        path: 'mailto:ali6254@gmail.com',
        icon: <BiIcons.BiMailSend className='mail-icon' />,
        cName: 'nav-text '
    }

]