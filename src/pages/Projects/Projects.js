import React from 'react';
import Layout from '../../components/Layout';
import {SectionTitle, Pill} from '../../styles';
import {ProjectItem, ProjectTitle, PillContainer, PillLink} from './styles';

const Projects = ({user}) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Projects</SectionTitle>
                <ul>
                    {user.projects.map((project, i) => (
                        <ProjectItem key={i}>
                            <ProjectTitle>{project.name}</ProjectTitle>
                            <p>{project.summary}</p>

                            <PillContainer>
                                {project.website ?
                                    <Pill key='website'><PillLink target='_blank' rel='noopener noreferrer'
                                                                  href={project.website}>Website</PillLink></Pill> : null}

                                {project.githubUrl ?
                                    <Pill key='github'><PillLink target='_blank' rel='noopener noreferrer'
                                                                 href={project.githubUrl}>Github</PillLink></Pill> : null}


                            </PillContainer>
                        </ProjectItem>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Projects;
