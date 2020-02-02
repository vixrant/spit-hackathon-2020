import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
} from 'reactstrap';

import { Link, Redirect, useHistory } from 'react-router-dom';
import { getUserDetails } from '../helpers/auth';
import NavbarLoginSignUp from './NavbarLoginSignUp'
/**
 * @type {React.FC}
 */
const CustomNavbar = () => {
  const user = getUserDetails();
  const history = useHistory()
  console.log(user)
 
    return(
      (user !== null)
      ?(
      <Navbar color="primary" dark>
      {user.type.typeName === 'volunteer' ? (
        <Button className="mr-auto" tag={Link} to="/create_checkpoint">Volunteer</Button>
      ): <Button className="mr-auto" tag={Link} to="/donate/request">Volunteer</Button>
      };

      <NavbarBrand tag={Link} to="/home">FoodFeed</NavbarBrand>

      {user.type.typeName === 'volunteer'
        ?(<Dropdown>
            <DropdownToggle caret>Nearby</DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/donation_request">Restaurant</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/checkpoint">Checkpoint</DropdownItem>
            </DropdownMenu>
          </Dropdown>)
        : null
      }
      <Button className="ml-auto" tag={Link} onClick={()=>{
        localStorage.clear()
        history.push('/')
      }}>LogOut</Button>
      <Button className="ml-auto" tage={Link} to="/profile">Profile</Button>
    </Navbar>)
    :
    <Redirect to="/"/>
    
  ); 
  
};

export default CustomNavbar;
