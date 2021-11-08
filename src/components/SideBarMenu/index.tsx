import React from 'react';
import { AboutIcon } from '../Svgs/AboutIcon';
import { ContactMeIcon } from '../Svgs/ContactMeIcon';
import { HardSkillsIcon } from '../Svgs/HardSkillsIcon';
import { ProjectsIcon } from '../Svgs/ProjectsIcon';
import SwitchTheme from '../SwitchTheme';
import { Container, SideBarList, Link, SideBarItem } from './styles';


interface SideBarMenuProps {
  isSideBarOpen: boolean;
  handleOpenSideBar: (state: boolean) => void;
  themeMode: boolean;
  changeTheme: (state: boolean) => void;
}

export const SideBarMenu: React.FC<SideBarMenuProps> = ({ 
  isSideBarOpen, 
  handleOpenSideBar, 
  themeMode, 
  changeTheme 
}) => {

  return (
    <Container isSideBarOpen={isSideBarOpen}>
      <SideBarList>
        <Link href="#about" onClick={() => handleOpenSideBar(isSideBarOpen)}>
          <SideBarItem>
            <AboutIcon />
            Sobre mim
          </SideBarItem>
        </Link>
        <Link href="#skills" onClick={() => handleOpenSideBar(isSideBarOpen)}>
          <SideBarItem>
            <HardSkillsIcon />
            Habilidades
          </SideBarItem>
        </Link>
        <Link href="#projects" onClick={() => handleOpenSideBar(isSideBarOpen)}>
          <SideBarItem>
            <ProjectsIcon />
            Projetos
          </SideBarItem>
        </Link>
        <Link href="#contact" onClick={() => handleOpenSideBar(isSideBarOpen)}>
          <SideBarItem>
            <ContactMeIcon />
            Contato
          </SideBarItem>
        </Link>
        <SideBarItem >
          <SwitchTheme onClick={() => changeTheme(themeMode)}/>
        </SideBarItem>
      </SideBarList>
    </Container>
  );
}