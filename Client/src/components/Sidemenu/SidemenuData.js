 import React from 'react'
 import HomeIcon from '@mui/icons-material/Home';
 import ContactsIcon from '@mui/icons-material/Contacts';
 import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
 import WorkIcon from '@mui/icons-material/Work';
 import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
 import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

 export const SidemenuData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link:'/home',
    },
    {
        title: 'Add File',
        icon: <CreateNewFolderIcon />,
        link:'/personalinfo',
        iconClosed:<ArrowDropDownIcon />,
        iconOpened:<ArrowDropUpIcon />,
        subNav: [
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
    },
    {
        title: 'Account Info',
        icon: <ManageAccountsIcon />,
        link:'/accoutinfo',
    },
   
 ]
   
 