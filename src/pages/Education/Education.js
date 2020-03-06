import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { EducationItem, Institution, Degree, Activity, Image } from './styles';

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
                <Paragraph>{education.activities}</Paragraph>
                {education.images.map((image) => (
                    <Image src={image}></Image>
                ))}

            </EducationItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;
