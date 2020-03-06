import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { EducationItem, Institution, Degree, Activity } from './styles';
import { Document } from 'react-pdf';

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
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
                <Paragraph><div dangerouslySetInnerHTML={{__html: education.activities}}></div></Paragraph>

            </EducationItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;
