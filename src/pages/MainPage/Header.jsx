import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useHistory, Link } from 'react-router-dom';

const Header = (props) => {
  const [hrefValue, setHrefValue] = useState('')
  let history = useHistory();


  const { window } = props;

  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navItems = [{
    menu: 'About',
    link: '#about'
  },
  // {
  //   menu: 'Why Us',
  //   page: '/why-us'
  // },
  {
    menu: 'Programs',
    link: '#programs'
  },
  {
    menu: 'Centers',
    link: '#centers'
  },
  {
    menu: 'Testimonials',
    link: '#testimonials'
  },
  {
    menu: 'Gallery',
    link: '#gallery'
  },
  {
    menu: 'Contact Us',
    link: '#contact'
  },
    // {
    //   menu: 'Register',
    //   link: '#register'
    // }
  ];


  const container = typeof window !== 'undefined' ? () => window().document.body : undefined;


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };



  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Scoregoals
      </Typography>
      <Divider />
      <Typography onClick={() => history.push('/why-us')}>Why Us</Typography>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} component="a" href={`#${item.link}`}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.menu} />
            </ListItemButton>
          </ListItem>

        ))
        }
      </List >
    </Box >
  );



  const handleMenu = (item) => {
    if (item.page) {
      history.push(item.page)
    }
    const element = document.getElementById(item.link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    console.log("type--", element);
    // history(link)


  }


  return (
    // <div className='sticky top-0 bg-gradient-to-r from-green-700 to-green-500 w-full z-1000'>
    <div className='sticky top-0 bg-navbar-texture bg-center bg-origin-content w-full z-1000'>

      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo on left */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Scoregoals
        </Typography>

        {/* menuitems on navbar */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div className='flex items-center'>
            <div className='text-white font-bold uppercase px-2 cursor-pointer text-sm' onClick={() => history.push('/why-us')}>Why Us</div>

            {navItems.map((item,) => (
              <Button key={item.menu} sx={{ color: '#fff' }} onClick={() => handleMenu(item)}>
                <span className='font-bold'>{item.menu}</span>
              </Button>
            ))}

            <a className='px-1 py-1 bg-white rounded-md' href='https://forms.gle/P9LirarxF2NjjAAYA' type="button">
              <span className=' text-green-600 font-bold text-sm uppercase px-2 cursor-pointer'>Register</span>
            </a>

          </div>
        </Box>
      </Toolbar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>


    </div>
  )
}

export default Header
