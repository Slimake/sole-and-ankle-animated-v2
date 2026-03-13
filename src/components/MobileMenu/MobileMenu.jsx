import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import { BREAKPOINTS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <VisuallyHidden>
            <Dialog.Title>Mobile navigation</Dialog.Title>
            <Dialog.Description>Mobile navigation</Dialog.Description>
          </VisuallyHidden>
          <Filler />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <SubLink href="/terms">Terms and Conditions</SubLink>
            <SubLink href="/privacy">Privacy Policy</SubLink>
            <SubLink href="/contact">Contact Us</SubLink>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const SlideIn = keyframes`
 from { transform: perspective(500px) rotateY(-90deg); }
 to { transform: rotateY(0deg); }
`;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: var(--color-backdrop);
  will-change: opacity;

  &[data-state="open"] {
    animation: ${FadeIn} 250ms ease-out;
  }
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  will-change: transform;
  transform-origin: center right;

  animation: ${SlideIn} 350ms cubic-bezier(0,-0.09,.65,1) backwards;
  animation-delay: 100ms;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;

  @media (min-width: ${BREAKPOINTS.phone / 16}rem)
    and (${QUERIES.tabletAndSmaller}) {
    & {
      padding: 18px 32px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  /* ${Content}[data-state="open"] & {
    animation: ${FadeIn} 100ms ease-out backwards;
    animation-delay: 400ms;
  } */
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  animation: ${FadeIn} 100ms ease-out both;
  
  &:first-of-type {
    color: var(--color-secondary);
  }
  
  &:nth-child(1) {
    animation-delay: 200ms;
  }
  &:nth-child(2) {
    animation-delay: 250ms;
  }
  &:nth-child(3) {
    animation-delay: 300ms;
  }
  &:nth-child(4) {
    animation-delay: 350ms;
  }
  &:nth-child(5) {
    animation-delay: 400ms;
  }
  &:nth-child(6) {
    animation-delay: 450ms;
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
  animation: ${FadeIn} 100ms ease-out both;

  &:nth-child(1) {
    animation-delay: 500ms;
  }
  &:nth-child(2) {
    animation-delay: 550ms;
  }
  &:nth-child(3) {
    animation-delay: 600ms;
  }
`;

export default MobileMenu;
