import focusyouthLarge from 'assets/focusyouth-large.png';
import focusyouth1 from 'assets/focusyouth-1.png';
import focusyouth2 from 'assets/focusyouth-2.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionHeading,
  ProjectSectionText,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Portal.module.css';

const title = 'Online Volunteer Portal';
const description =
  'This project simplifies volunteer hour management for executives. Upon logging in, you can effortlessly view, log, and update your hours. Authentication ensures admin-exclusive access to protected pages. Enhanced security includes automatic 1-hour sign-outs via JSON Web Tokens. Admins manage users, including approvals and edits, while a user-friendly sign-up page welcomes new volunteers to the portal.';
const techStack = [
  'MongoDB',
  'Express.js',
  'React',
  'Node.js',
  'JavaScript',
  'HTML',
  'CSS',
];

export const Portal = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={focusyouthLarge}
          srcSet={`${focusyouthLarge.src} 1280w, ${focusyouthLarge.src} 2560w`}
          placeholder={focusyouthLarge}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={techStack}
          url1="https://portal.focusyouth.ca"
          linkLabel1="View site"
          url2="https://github.com/daniel-wang-design/user-portal"
          linkLabel2="View GitHub"
        />
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Modern Day Volunteering</ProjectSectionHeading>
              <ProjectSectionText>
                Tracking volunteer hours manually is a daunting task. With potential for
                errors, lost records, and time-consuming data management, {"it's "}
                inefficient and counterproductive. Digital solutions offer a more accurate
                and streamlined alternative, freeing up resources for the actual volunteer
                work and mission of the organization.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[focusyouth2]}
                placeholder={focusyouth2}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[focusyouth1]}
                placeholder={focusyouth1}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
