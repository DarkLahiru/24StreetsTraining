import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import {
    AppBar,
    FormControl,
    IconButton, InputLabel,
    makeStyles, MenuItem,
    NativeSelect,
    Select,
    Toolbar,
    Typography
} from "@material-ui/core";
import {
    Link
} from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse, MDBDropdownDivider
} from 'mdb-react-ui-kit';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        height: 55,
        width: 135,
        backgroundColor: "black",
        color: "white"
    },
    appbar: {
        backgroundColor: "white",
        color: "black",

    },

    img: {
        width: 143,
        height: 35.75,

    },
    btn: {
        margin: 15,
    },
    nlink: {
        padding:0,
        marginTop: 0,
        marginBottom: 0,
        color: "black",
        margin: theme.spacing(3),

    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    '@global': {
        // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiSelect-select.MuiSelect-select': {
            padding:0,
        },
    },

}));


export default function Navbar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div>

            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <Link to="/page/imageSlider"> <img src={"/images/logo.png"} alt={"Company Logo"}
                                                       className={classes.img}/></Link>
                    <div style={{margin: "auto"}}>
                        <Link to="/page/about" className={classes.nlink}>Home</Link>
                        <Link to="/page/about" className={classes.nlink}>Free IELTS Training Class</Link>
                        <Button color="default" onMouseOver={handleOpen}  className={classes.nlink}>Courses</Button>
                        <Select
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={'Courses'}
                            //onChange={handleChange}
                            inputProps={{'aria-label': 'Without label'}}
                            disableUnderline
                            disabled
                        >
                            <MenuItem value={10}>IELTS</MenuItem>
                            <MenuItem value={20}>OET</MenuItem>

                        </Select>
                        <Link to="/page/about" className={classes.nlink}>Free Resources</Link>
                    </div>
                    <div className={classes.btn}>
                        <Button variant="contained" color="default" className={classes.button}
                                startIcon={<AccountCircleIcon/>} onClick={handleOpen}>Login</Button>
                        <Button variant="contained" color="default" className={classes.button}
                                startIcon={<PersonIcon/>}>Register</Button>
                        <Button variant="contained" color="default" className={classes.button}
                                startIcon={<ArrowForwardIcon/>}>Free DEMO</Button>
                    </div>
                </Toolbar>
            </AppBar>

            {/*<MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'><img src={"/images/logo.png"} alt={"Company Logo"}
                                                  className={classes.img}/></MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavSecond(!showNavSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavSecond}>
                        <MDBNavbarNav  className='mb-2 mb-lg-0' >
                            <MDBNavbarLink active aria-current='page' href='#'>
                                Home
                            </MDBNavbarLink>
                            <MDBNavbarLink href='#'>Free IELTS Training Class</MDBNavbarLink>
                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link'>Courses</MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink href="#">IELTS</MDBDropdownLink>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink href="#">OET</MDBDropdownLink>
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>
                            <MDBNavbarLink href='#'>Free Resources</MDBNavbarLink>
                            <MDBNavbarItem >
                                <Button variant="contained" color="default"
                                        startIcon={<AccountCircleIcon/>}>Login</Button>
                            </MDBNavbarItem>
                            <MDBNavbarItem >
                                <Button variant="contained" color="default"
                                        startIcon={<PersonIcon/>}>Register</Button>
                            </MDBNavbarItem>
                            <div style={{backgroundColor:"yellow" , width:"20%" , justifyContent:'center'}}>
                                <MDBNavbarItem>
                                    <Button variant="contained" color="default"
                                            startIcon={<ArrowForwardIcon/>}>Free DEMO</Button>
                                </MDBNavbarItem>
                            </div>

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>*/}


        </div>
    );
};


