import pollappLarge from 'assets/pollapp-large.png';
import pollapp1 from 'assets/pollapp-1.png';
import pollapp2 from 'assets/pollapp-2.jpg';
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
import styles from './Slack.module.css';

const title = 'Slack Polling App';
const description =
  "FOCUS Youth Organization's open-source polling app empowers Canadian charity efforts. This tool facilitates surveys and engagement, fostering transparency and informed decision-making within the organization.";
const techStack = ['Java 19', 'Bolt SDK', 'Amazon S3', 'Apache Maven'];

export const Slack = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={pollappLarge}
          srcSet={`${pollappLarge.src} 1280w, ${pollappLarge.src} 2560w`}
          placeholder={pollappLarge}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={techStack}
          url2="https://github.com/daniel-wang-design/user-portal"
          linkLabel2="View GitHub"
        />
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Make Easy Decisions</ProjectSectionHeading>
              <ProjectSectionText>
                The Slack Polling App offers versatile features, including Date/Time polls
                for scheduling, anonymous mode for both poll types, real-time result
                display, saving and deleting poll history, and comprehensive access to
                past polls with voter info and top choices.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[pollapp2]}
                placeholder={pollapp2}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[pollapp1]}
                placeholder={pollapp1}
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
