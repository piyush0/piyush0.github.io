import React from 'react';
import Layout from '../../components/Layout';
import {SectionTitle, Paragraph, Pill} from '../../styles';
import {WorkItem, WorkTitle, JobTitle} from './styles';

const Work = ({user}) => {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May',
        'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ];

    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Freelance</SectionTitle>
                <ul>
                    {user.other.map((work, i) => (
                        <WorkItem key={i}>
                            <WorkTitle>{work.position}</WorkTitle>
                            <div>
                                <JobTitle>{work.organization}</JobTitle> <span>{work.location}</span>
                                <span> &sdot; </span>
                                <span>
                  {months[work.start.month - 1] + ', ' + work.start.year} to {work.end.year ? months[work.end.month - 1] + ', ' + work.end.year : 'Present'}
                </span>
                            </div>
                            <Paragraph>{work.summary}</Paragraph>

                            {work.highlights.map((highlight) => (
                                <li dangerouslySetInnerHTML={{__html: highlight}}></li>
                            ))}

                        </WorkItem>
                    ))}
                </ul>
            </div>


            <SectionTitle>Languages</SectionTitle>
            <div>
                {user.languages.map(language => (
                    <Pill key={language}>{language}</Pill>
                ))}
            </div>

            <SectionTitle>Interests</SectionTitle>
            <div>
                {user.interests.map(interest => (
                    <Pill key={interest}>{interest}</Pill>
                ))}
            </div>
        </Layout>
    );
};

export default Work;
