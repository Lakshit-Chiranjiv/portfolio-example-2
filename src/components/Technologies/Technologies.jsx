import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaEthereum } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle,TechGroup,TechGroupToggleButton,TechGroupTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <TechGroup>
      <TechGroupTitle>Front-End Development <DiReact size='2rem' style={{ lineHeight: '20px' }}/></TechGroupTitle>
      <TechGroupToggleButton>Open</TechGroupToggleButton>
    </TechGroup>
    <TechGroup>
      <TechGroupTitle>Back-End Development <DiFirebase size='2rem' style={{ lineHeight: '20px' }}/></TechGroupTitle>
      <TechGroupToggleButton>Open</TechGroupToggleButton>
    </TechGroup>
    <TechGroup>
      <TechGroupTitle>Blockchain Development <FaEthereum size='2rem' style={{ lineHeight: '20px' }}/></TechGroupTitle>
      <TechGroupToggleButton>Open</TechGroupToggleButton>
    </TechGroup>
  </div>
);

export default Technologies;
