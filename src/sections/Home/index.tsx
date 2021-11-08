import React from 'react';
import { Header } from '../../components/Header';
import Tilt from 'react-parallax-tilt';
import { Container, Name, CartoonContainer, Cartoon } from './styles';
import { SocialMediasHome } from '../../components/SocialMediasHome';

interface HomeProps {
  themeMode: boolean;
  changeTheme: (state: boolean) => void;
}

export const Home: React.FC<HomeProps> = ({ themeMode, changeTheme }) => {
  return (
    <Container>
      <Header themeMode={themeMode} changeTheme={changeTheme} />
        <Name>Davidson Marra Rodrigues Vieira</Name>
        <Tilt glareBorderRadius="50%" glareEnable={true} glareMaxOpacity={0.4} glareColor="lightblue" glarePosition="all" perspective={2000}>
          <CartoonContainer themeMode={themeMode}>
            <Cartoon className="Tilt-inner" src="/assets/cartoon.png" />
          </CartoonContainer>
        </Tilt>
      <SocialMediasHome />
    </Container>
  );
}