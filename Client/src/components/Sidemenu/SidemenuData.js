 import React from 'react'
 import HomeIcon from '@mui/icons-material/Home';
 import ContactsIcon from '@mui/icons-material/Contacts';
 import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
 import WorkIcon from '@mui/icons-material/Work';
 import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
 import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
 import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
 import CalculateIcon from '@mui/icons-material/Calculate';


 export const SidemenuData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link:'/home',
    },
    {
        title: 'Basic Info',
        icon: <CreateNewFolderIcon />,
        link:'/basicinfo',
        iconClosed:<ArrowDropDownIcon />,
        iconOpened:<ArrowDropUpIcon />,
        subNav: [
            {
                title: 'Personal Info',
                icon: <ContactsIcon />,
                link:'/basicinfo/personalinfo',
            },
            {
                title: 'Family Info',
                icon: <FamilyRestroomIcon />,
                link:'/basicinfo/familyinfo',
            },
            {
                title: 'Employment Info',
                icon: <WorkIcon />,
                link:'/basicinfo/employmentinfo',
            },
            {
                title: 'Calculate TDSR',
                icon: <CalculateIcon/>,
                link:'/basicinfo/calculatetdsr'
            },
            
        ]
    },
    {
        title: 'Application',
        icon: <DriveFileMoveIcon />,
        link:'/application',
    },
    {
        title: 'Account Info',
        icon: <ManageAccountsIcon />,
        link:'/accoutinfo',
    },
   
 ]
   
 