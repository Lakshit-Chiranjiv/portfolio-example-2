import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>

        <SectionTitle main>
          Hey, I am Lakshit <br />Chiranjiv Sagar
        </SectionTitle>

        <SectionText>
          Full Stack Web Developer and Blockchain Developer.<br />
          I prefer JS stacks like MERN & MEVN. <br />
          Feels good that you visited my Portfolio!!
        </SectionText>

        <Button onClick={()=>window.location='https://github.com/Lakshit-Chiranjiv'} wd={300}>
          Check out my Projects
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;