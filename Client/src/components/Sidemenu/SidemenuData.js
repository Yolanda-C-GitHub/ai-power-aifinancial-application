 import React from 'react'
 import HomeIcon from '@mui/icons-material/Home';
 import ContactsIcon from '@mui/icons-material/Contacts';
 import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
 import WorkIcon from '@mui/icons-material/Work';




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
    },
    {
        title: 'Family Info',
        icon: <FamilyRestroomIcon />,
        link:'/familyinfo',
    },
    {
        title: 'Employment Info',
        icon: <WorkIcon />,
        link:'/employmentinfo',
    },
 ]
   
 