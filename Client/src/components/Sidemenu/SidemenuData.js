 import React from 'react'
 import HomeIcon from '@mui/icons-material/Home';
 import ContactsIcon from '@mui/icons-material/Contacts';
 import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
 import WorkIcon from '@mui/icons-material/Work';
 import MenuIcon from '@mui/icons-material/Menu';
 import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

 export const SidemenuData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link:'/home',
    },
    {
        title: 'Personal Info',
        icon: <ContactsIcon />,
        link:'/personalinfo',
        iconClosed:<ArrowDropDownIcon />,
        iconOpened:<ArrowDropUpIcon />,
        subNav: [
            {
                title: 'Employment Info',
                icon: <WorkIcon />,
                link:'/employmentinfo',
            },
            {
                title: 'Employment Info',
                icon: <WorkIcon />,
                link:'/employmentinfo',
            },
        ]
    },
    {
        title: 'Other Info',
        icon: <FamilyRestroomIcon />,
        link:'/familyinfo',
    },
   
 ]
   
 