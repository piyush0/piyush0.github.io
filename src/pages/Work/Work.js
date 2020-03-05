import React from 'react';
import Layout from '../../components/Layout';
import {SectionTitle, Paragraph} from '../../styles';
import {WorkItem, WorkTitle, JobTitle, WorkHighlightList} from './styles';

const Work = ({user}) => {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May',
        'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ];

    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Work</SectionTitle>
                <ul>
                    {user.work.map((work, i) => (
                        <WorkItem key={i}>
                            <WorkTitle>{work.position}</WorkTitle>
                            <div>
                                <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
                                <span> &sdot; </span>
                                <span>
                  {months[work.start.month - 1] + ', ' + work.start.year} to {work.end.year ? months[work.end.month - 1] + ', ' + work.end.year : 'Present'}
                </span>
                            </div>
                            <Paragraph>{work.summary}</Paragraph>
                            <WorkHighlightList>
                                {work.highlights.map((highlight) => (
                                    <li dangerouslySetInnerHTML={{__html: highlight}}></li>
                                ))}
                            </WorkHighlightList>
                        </WorkItem>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Work;
