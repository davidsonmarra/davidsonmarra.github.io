import React, { useEffect, useState } from 'react';
import { Home } from './sections/Home';
import { AboutMe } from './sections/AboutMe';
import { GlobalStyle } from './global/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './global/styles/theme';
import { ModalDataProps, Skills } from './sections/Skills';
import Modal from 'react-modal';
import { SkillsModal } from './components/SkillsModal';
import { data } from './utils/skillsCards';
import { Projects } from './sections/Projects';
import { ButtonTop } from './components/ButtonTop';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [modalData, setModalData] = useState<ModalDataProps>(data[0].modal);
  const keyTheme = "@davidsonmarra:theme";

  Modal.setAppElement('#root');

  const handleChangeMode = (state: boolean) => {
    localStorage.setItem(keyTheme, String(!state));
    setIsDarkTheme(!state);
  }

  const [isSkillsModalIsOpen, setIsSkillsModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const curentTheme = localStorage.getItem(keyTheme);
    curentTheme ? 
      curentTheme === "false" && setIsDarkTheme(false)
    : localStorage.setItem(keyTheme, String(isDarkTheme));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenSkillsModal = () => {
    setIsSkillsModalIsOpen(true);
  }

  const handleCloseSkillsModal = () => {
    setIsSkillsModalIsOpen(false);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle 
        isOpen={isSkillsModalIsOpen}
      />
      <Home 
        themeMode={isDarkTheme} 
        changeTheme={handleChangeMode}
      />
      <main>
        <ButtonTop />
        <SkillsModal
          isOpen={isSkillsModalIsOpen} 
          onRequestClose={handleCloseSkillsModal}
          modalData={modalData}
          themeMode={isDarkTheme}
        />
        <AboutMe themeMode={isDarkTheme} />
        <Skills 
          themeMode={isDarkTheme} 
          openModal={handleOpenSkillsModal}
          setModalData={setModalData}
        />
        <Projects themeMode={isDarkTheme} />
      </main>
    </ThemeProvider>
  );
}

export default App;
