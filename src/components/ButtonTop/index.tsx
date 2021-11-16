import React, { useState } from 'react';
import { ArrowUpIcon } from '../Svgs';
import { Container } from './styles';

export const ButtonTop: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
    
    window.onscroll = () => {
        handleBtnTop();
    }

    function handleBtnTop(){
        if (window.pageYOffset > 850) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }
  return (
    <Container href="#" show={show}>
      <ArrowUpIcon />
    </Container>
  );
}