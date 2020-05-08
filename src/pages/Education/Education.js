import React from 'react';
import Layout from '../../components/Layout';
import {SectionTitle, Paragraph} from '../../styles';
import {EducationItem, Institution, Degree, Activity, Image, Title, Platform} from './styles';

const Education = ({user}) => {
    const education = user.education[0] // Just 1 degree right now
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Education</SectionTitle>
                <Institution>{education.institution}</Institution>
                <div>
                    <Degree>
                        {education.studyType}, {education.area}
                    </Degree>{' '}
                    <span> &sdot; </span>
                    <span>
                  {education.start.year} to {education.end.year}
                </span>
                </div>
                <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
                <Paragraph>{education.gpa}</Paragraph>
                <Activity>Activities</Activity>
                <Paragraph>{education.activities}</Paragraph>
                {education.images.map((image) => (
                    <Image src={image}></Image>
                ))}

                <SectionTitle>Online courses</SectionTitle>
                <ul>
                    {user.courses.online.map((course, i) => (
                        <EducationItem key={i}>
                            <Title>{course.title}</Title>
                            <div>
                                <Platform>
                                    {course.platform}
                                </Platform>{' '}
                                <span> &sdot; </span>
                                <span>
                                    {course.issue_date}
                </span>
                            </div>
                            <br/>
                            <a rel="noopener noreferrer" target="_blank"
                               href={course.certificate}>Certificate</a>
                        </EducationItem>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Education;
