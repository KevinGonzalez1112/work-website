// Importing React Components

import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

// Importing Material UI Components

import 
{
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography
}
from "@mui/material";

// Importing Material UI Icons

import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

// Importing Required Images

import Logo from "../assets/images/logo.png";
import EbayLogo from "../assets/images/ebay-logo.png";

// Importing Application Screens

import HomePage from "../screens/HomePage";
import BikesPage from "../screens/BikesPage";
import ReusePage from "../screens/ReusePage";
import ContactPage from "../screens/ContactPage";
import MeetTheTeamPage from "../screens/MeetTheTeamPage";

// Start of Navigation Component

const drawerWidth = 240;

const navItems = ["Home", "Bikes", "Reuse", "Our-Partners", "Meet-The-Team", "Contact"];

const Navigation = (props) =>
{
    const { window } = props;

    // Setting up Drawer Logic for Mobile View

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () =>
    {
        setMobileOpen((prevState) => !prevState);
    }

    const drawer = 
    (
        <Box onClick = { handleDrawerToggle } sx = {{ textAlign: "center" }}>
            <Typography variant = "h6" sx = {{ my: 2 }}>
                <MenuIcon />
            </Typography>
            <Divider />
            <List>
                {
                    navItems.map((item) => (
                        <ListItem key = { item } disablePadding>
                            <ListItemButton sx = {{ textAlign: "center" }}>
                                <ListItemText>
                                    <Link
                                        to = { item === "Home" ? "/" : `/${ item.toLowerCase() }` }
                                        style = {{ textDecoration: "none", color: "inherit" }}
                                    >
                                        { item }
                                    </Link>
                                </ListItemText>
                            </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    // End of Drawer Logic Set up

    return (
        <Box 
            sx = 
            {{ 
                display: "flex", 
                flexDirection: "column", 
                width: "100%"
            }}
        >

            { /* Adding the Fixed App Bar */ }

            <AppBar 
                component = "nav" 
                sx = {{ 
                    backgroundColor: 'rgba(26, 60, 52, 0.75)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: "none",
                    minHeight: { xs: "64px", sm: "64px", md: "72px", lg: "80px", xl: "88px"},
                    justifyContent: "center",
                    borderBottom: '1px solid #133409'
                }}
            >
                <Toolbar
                    sx = {{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >

                    { /* Hide Menu Icon on Desktop View but keep on Mobile */ }

                    <IconButton
                        color = "inherit"
                        aria-label = "open drawer"
                        edge = "start"
                        onClick = { handleDrawerToggle }
                        sx = {{ 
                            mr: 2, 
                            display: { sm: "none" } 
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    { /* Left Logo */ }

                    <Box 
                        sx = {{ 
                            display: { xs: "none", sm: "block", md: "block", lg: "block", xl: "block" },
                            position: "absolute",
                            left: 0,
                            top: "50%",
                            transform: 'translateY(-50%)'
                        }}
                    >
                        <img 
                            src = { Logo } 
                            alt = "Collect 4 Reuse Logo" 
                            style = {{ 
                                width: "70px", 
                                height: "auto" 
                            }} 
                        />
                    </Box>

                    { /* Center Nav Items */ }

                    <Box 
                        sx = {{ 
                            display: { xs: "none", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
                            justifyContent: "center", 
                            alignItems: "center" 
                        }}
                    >
                        {
                            navItems.map((item) => (
                                <ListItemButton
                                    key = { item }
                                    component = { Link }
                                    to = { item === "Home" ? "/" : `/${ item.toLowerCase() }` }
                                    sx = {{
                                        color: "rgba(255, 255, 255, 0.95)",
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: {
                                            lg: "1rem"
                                        },
                                        fontWeight: "bold",
                                        margin: {
                                            lg: "0 0.5vw"
                                        },
                                        "&:hover": {
                                            color: "#44BB21",
                                            backgroundColor: "transparent"
                                        }
                                    }}
                                >
                                    { item.replaceAll("-", " ") }
                                </ListItemButton>
                            ))
                        }
                    </Box>

                    { /* Right Social Media Icons */ }

                    <Box
                        sx = {{ 
                            display: { xs: "none", sm: "flex" },
                            position: "absolute",
                            right: "3vw",
                            top: "50%",
                            transform: 'translateY(-50%)'
                        }}
                    >
                        <a 
                            href = "https://www.instagram.com/collect4reuse/"
                            style = {{ 
                                color: "rgba(255, 255, 255, 0.95)",
                                marginRight: "1vw"
                            }}
                        >
                            <InstagramIcon 
                                fontSize = "medium"
                            />
                        </a>
                        <a 
                            href = "https://www.facebook.com/p/Collect-4-Retro-61573923966320/"
                            style = {{ 
                                color: "rgba(255, 255, 255, 0.95)",
                                marginRight: "1vw" 
                            }}
                        >
                            <FacebookIcon 
                                fontSize = "medium"
                            />
                        </a>
                        <a
                            href = "mailto:collectfour@gmail.com"
                            style = {{ 
                                color: "rgba(255, 255, 255, 0.95)",
                                marginRight: "1vw" 
                            }}
                        >
                            <MailOutlineIcon 
                                fontSize = "medium"
                            />
                        </a>
                    </Box>

                </Toolbar>
            </AppBar>

            { /* Adding the Drawer for Mobile View */ }

            <nav>
                <Drawer
                    container = { container }
                    variant = "temporary"
                    open = { mobileOpen }
                    onClose = { handleDrawerToggle }
                    ModalProps = {{ keepMounted: true }}
                    sx =
                    {{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
                    }}
                >
                    { drawer }
                </Drawer>
            </nav>

            {/* Main Page Content */}

            <Box
                component = "main"
                sx = 
                {{ 
                    flexGrow: 1,
                    width: "100%",
                    paddingTop: { 
                        xs: "64px", 
                        sm: "64px", 
                        md: "72px", 
                        lg: "80px", 
                        xl: "88px" 
                    },
                    minHeight: { 
                        xs: "calc(100vh - 64px)", 
                        sm: "calc(100vh - 64px)", 
                        md: "calc(100vh - 72px)", 
                        lg: "calc(100vh - 80px", 
                        xl: "calc(100vh - 88px"
                    },
                    overflowY: "auto"
                }}
            >
                <Routes>
                    <Route path = "/" element = { <HomePage /> } />
                    <Route path = "/bikes" element = { <BikesPage /> } />
                    <Route path = "/reuse" element = { <ReusePage /> } />
                    <Route path = "/contact" element = { <ContactPage /> } />
                    <Route path = "/meet-the-team" element = { <MeetTheTeamPage />} />
                 </Routes>
            </Box>
        </Box>
    )
}

export default Navigation;