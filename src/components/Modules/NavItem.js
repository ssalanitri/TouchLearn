import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
//import StyledSideNav from '../styles-components/StyledSideNav.js';



const NavItem = ({active,path,onItemClick,css}) => {
        
    const StyledNavItem = styled.div`
        height: 70px;
        width: 75px; /* width must be same size as NavBar to center */
        text-align: center; /* Aligns <a> inside of NavIcon div */
        margin-bottom: 0;   /* Puts space between NavItems */
        a {
            font-size: 2.7em;
            color: ${active ? "white" : "#9FFFCB"};
            :hover {
                opacity: 0.7;
                text-decoration: none; /* Gets rid of underlining of icons */
            }  
        }
    `;

    const NavIcon = styled.div;

    const handleClick = () => {
        onItemClick(path);
    }

     return (
        <>
        <StyledNavItem active={active}>
            <Link to={path} className={css} onClick={handleClick}>
                <NavIcon></NavIcon>
            </Link>
        </StyledNavItem>
        </>
    )
}

export default withRouter(NavItem);

