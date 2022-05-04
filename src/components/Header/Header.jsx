import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Span, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white',gap: '2px'}}>
          <DiCssdeck size='3rem'/>
          <Span>Personal PORTFOLIO</Span>
        </a>
      </Link>
    </Div1>
  </Container>
);

export default Header;
