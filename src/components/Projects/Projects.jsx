import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {
        projects.map(({id,title,image,description,source,tags,visit})=>(
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent style={{marginTop: '6px'}}>Tech Stack</TitleContent>
              <TagList>
                {
                  tags.map((tag,i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))
                }
              </TagList>
              <UtilityList>
                <ExternalLinks href={visit} colorVal='#007a27'>Code</ExternalLinks>
                <ExternalLinks href={source}>Demo</ExternalLinks>
              </UtilityList>
            </div>
          </BlogCard>
        ))
      }
    </GridContainer>
  </Section>
);

export default Projects;