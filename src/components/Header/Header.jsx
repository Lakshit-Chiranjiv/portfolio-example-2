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

    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Techs</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href='https://github.com/Lakshit-Chiranjiv'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/lakshit-chiranjiv-sagar-4b0b15198/'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://twitter.com/lakshit_cs'>
        <AiFillTwitterSquare size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
