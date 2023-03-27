import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

interface NavbarProps {
  isOpen: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const NavbarContainer = styled.div<NavbarProps>`
  width: ${({ isOpen }) => isOpen ? '20rem' : '4.5rem'};
  height: 130vh;
  background-color: #0e3358;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
`;



export const Icon = styled.button<NavbarProps>`
  position: absolute;
  top: 5rem;
  left: ${({ isOpen }) => isOpen ? '14.3rem' : '3.85rem'};
  width: 1.4rem;
  height: 1.4rem;
  padding: 2px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarHeader = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
  border: 1px solid #FFFFFF;
  background-color: #FFFFFF;
  border-radius: 20px;
`;

export const UserPhotoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #0e3358;
  background-color: #FFFFFF;
`;

export const UserPhotoIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-radius: 50%;
  background-color: #163f62;
  margin-top: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const UserIcon = styled(FaUser)`
  color: #0e3358;
  font-size: 5rem;
`;


export const NavbarLogo = styled.img<NavbarProps>`
  width: ${({ isOpen }) => isOpen ? '123px' : '55px'};
  height: 53.15px;
  transition: all 0.3s ease-in-out;
`;

export const NavbarMenu = styled.div`
  width: 100%;
  margin-top: 1.2rem;
`;

export const NavbarMenuItem = styled(NavLink)<NavbarProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.4rem;
  text-decoration: none;
  height: 3.5rem;

  .icon {
    color: ${({ theme }) => theme.colors.default };
  }

  span {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
    font-family: 'Exo', sans-serif;
    font-size: 13pt;
    color: ${({ theme }) => theme.colors.default };
    animation: ${fadeIn} 2s;
  }

  &.active {
   
    background-color: #10385c;
    .icon {
      color: ${({ theme }) => theme.colors.primary };
    }
    span {
      color: ${({ theme }) => theme.colors.primary };
    }
    &::before {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const NavbarFooter = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
`;

export const ProfileContainer = styled.div<NavbarProps>`
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  margin-left: 0.8rem;
  gap: 0.8rem;
  margin-top: 2rem;
`;

export const ProfileImage = styled.img<NavbarProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: ${({ isOpen, theme }) => !isOpen ? '1.5px solid #0BA25E' : `1.5px solid ${theme.colors.secondary}`};
  padding: 1.2px;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileName = styled.span`
  font-family: 'Exo', sans-serif;
  font-size: 12pt;
  color: ${({ theme }) => theme.colors.default };
`;

export const ProfileOccupation = styled.span`
  font-family: 'Exo', sans-serif;
  font-size: 12pt;
  color: ${({ theme }) => theme.colors.default };
`;

