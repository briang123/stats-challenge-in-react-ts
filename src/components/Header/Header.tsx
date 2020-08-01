import React from 'react';
import PropTypes from 'prop-types';
import logo from './../../logo.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
  load: {
    scale: 2,
    transition: {
      type: 'spring',
    },
  },
  unload: {
    scale: 0.75,
  },
};

interface IProps {
  heading: string;
  description: string;
}

export const Header = ({ heading, description }: IProps) => {
  return (
    <StyledHeader data-testid="header">
      <Logo
        src={logo}
        alt="logo"
        variants={variants}
        initial="unload"
        animate="load"
        exit="unload"
      />
      <Heading data-testid="heading">{heading}</Heading>
      {description && <Description data-testid="description">{description}</Description>}
    </StyledHeader>
  );
};

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Header.defaultProps = {
  heading: null,
  description: null,
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 20vh;
  font-size: calc(10px + 4vmin);
  background-color: var(--lightcolor);
  color: var(--darktext);
  margin-top: 25px;
  @media (min-width: 600px) {
    font-weight: bold;
    font-size: calc(10px + 2vmin);
  }
`;

const Logo = styled(motion.img)`
  height: 15vmin;
  pointer-events: none;
  @media (min-width: 600px) {
    height: 6vmin;
  }
`;

const Heading = styled.p`
  padding: 0;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 0.5em;
  width: 90vw;
  color: var(--lighttext);
  margin-bottom: 10px;
  @media (min-width: 600px) {
    margin-bottom: 0px;
    width: 60vw;
  }
`;
