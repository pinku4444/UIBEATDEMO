import React,{useState,Fragment} from "react";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {mainListItems} from '../layout/list';
import icon from '../../image/icon.png';
import Typography from '@material-ui/core/Typography';
import useStyles from "../../style/dashboard";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";


const Sidebar = () => {
    
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
        console.log("open")
    };
    const handleDrawerClose = () => {
        console.log("close")
        setOpen(!open);
    };
  return (
    <Fragment>
        <AppBar
            position="absolute"
            className={clsx(classes.appBar, open && classes.appBarShift)}
        >   
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(
                    classes.menuButton,
                    open && classes.menuButtonHidden
                    )}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                
            <img src={icon} width="50" alt="Smiley face"  />
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                UIBEAT.COM
            </Typography>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
           
            </div>
            <Divider />
        
            <List>{mainListItems}</List>
            
        </Drawer>
    </Fragment>
  );
};

export default Sidebar;
