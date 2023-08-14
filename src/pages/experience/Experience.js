import experiencePlaceholder from 'assets/profile-placeholder.jpg';
import experience from 'assets/profile-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Experience.module.css';

export const Experience = () => {
  return (
    <Fragment>
      <Meta title="Experience" description="My past experiences." />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: experience }}
          placeholder={experiencePlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="My Experience"
          description="Here is a list of my past co-op experience in software development as well as my social and civic involvement. I also listed some of the software development technologies I use."
          url1="https://www.linkedin.com/in/danielwang04/"
          linkLabel1="My LinkedIn"
          url2=""
          linkLabel2="My Resumé"
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Co-op Experience</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I was a <Link href="">Backend Software Developer</Link> for JANA
                    Corporation, an engineering/software development company. I&apos;ve
                    learned how to create RESTful APIS using the .NET framework and with a
                    Model-View-Controller (MVC) achitectural pattern. I also created many
                    features by writing in C# and T-SQL, utilizing SOLID Principles, and
                    finally testing my code using XUnit.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Technical Skills</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Proficient Languages</TableHeadCell>
                    <TableCell>C#, Java, Python, Transact-SQL, JavaScript</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Intermediate Languages</TableHeadCell>
                    <TableCell>C, Bash, Dart, HTML, CSS, Racket</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Frameworks</TableHeadCell>
                    <TableCell>ASP.NET Core, XUnit, Next.js, Express.js</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cloud Services</TableHeadCell>
                    <TableCell>Azure Functions</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Databases</TableHeadCell>
                    <TableCell>
                      SQL Server, Azure Blob Storage, MongoDB, AWS S3, Firebase Firestore
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Libraries</TableHeadCell>
                    <TableCell>
                      React, Tailwind CSS, Three.js, Flutter, Bolt SDK
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Environments</TableHeadCell>
                    <TableCell>Node.js</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Development Tools</TableHeadCell>
                    <TableCell>Maven, NPM</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Volunteer Experience</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I was a <Link href="">VP of Technology</Link> for Improvall, a JACO
                    company. I led a team of 4 to create a mobile app from scratch using
                    Flutter and Dart.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
