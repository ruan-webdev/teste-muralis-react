import { useState } from "react";
import {
  NavbarContainer,
  NavbarHeader,
  NavbarMenuItem,
  NavbarMenu,
  NavbarFooter,
  ProfileContainer,
  ProfileName,
  ProfileOccupation,
  UserPhotoIconWrapper,
  UserPhotoIcon,
  UserIcon,
} from "./styles";

import { FaUser } from "react-icons/fa";
import {BsFillFolderFill, BsFillHouseDoorFill,} from "react-icons/bs";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <NavbarContainer isOpen={isExpanded}>
      <div>
        <UserPhotoIconWrapper>
          <UserPhotoIcon>
            <UserIcon />
          </UserPhotoIcon>
        </UserPhotoIconWrapper>
      
        <ProfileContainer isOpen={isExpanded}>
          <ProfileName>Silva Junior</ProfileName>
          <ProfileOccupation>silva.junior@empresa.com</ProfileOccupation>
        </ProfileContainer>

        <NavbarMenu>
          <NavbarMenuItem to="/" isOpen={isExpanded}>
            <BsFillHouseDoorFill className="icon" size={18} />
            <span>home</span>
          </NavbarMenuItem>

          <NavbarMenuItem to="/entry-registration" isOpen={isExpanded}>
            <BsFillFolderFill className="icon" size={18} />
            <span>ingressantes</span>
          </NavbarMenuItem>
        </NavbarMenu>
      </div>
      <NavbarFooter>
      </NavbarFooter>
    </NavbarContainer>
  );
}

export default Navbar;
