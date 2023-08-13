import improvallLarge from 'assets/improvall-large.png';
import improvall1 from 'assets/improvall-1.png';
import improvall2 from 'assets/improvall-2.png';
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
import styles from './Mobile.module.css';

const title = 'Improvall Mobile App';
const description =
  "Improvall, is a mobile app promoting study through competition built as part of the JACO company program. Available on Google Play Store and Apple App Store, I led a team of 4 to develop this app as our company's VP of Product and Technology.";
const techStack = ['Flutter', 'Dart', 'Firebase'];

export const Mobile = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={improvallLarge}
          srcSet={`${improvallLarge.src} 1280w, ${improvallLarge.src} 2560w`}
          placeholder={improvallLarge}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={techStack}
          url1="https://play.google.com/store/apps/details?id=ca.improvall.android"
          linkLabel1="Download today"
          url2="https://github.com/daniel-wang-design/improvall"
          linkLabel2="View GitHub"
        />
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>No More Distractions</ProjectSectionHeading>
              <ProjectSectionText>
                The app offers task reminders and focuses on uninterrupted work by
                restarting tasks when the app is closed. A productivity leaderboard
                fosters competition, while a time-hour graph highlights study habits.
                Progress on tasks is saved, allowing breaks without losing
                accomplishments. Historical data access enables reflection and growth
                tracking. This all-inclusive approach blends task management, productivity
                analysis, and historical tracking for efficient goal achievement.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[improvall1]}
                placeholder={improvall1}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[improvall2]}
                placeholder={improvall2}
                alt="Multiple user annotations on a shared layer."
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
