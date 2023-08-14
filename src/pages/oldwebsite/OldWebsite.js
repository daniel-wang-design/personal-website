import background from 'assets/personal-website-large.jpg';
import image1 from 'assets/website-1.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectTextRow,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './OldWebsite.module.css';

const title = 'My First Website';
const description =
  "This was my first website and my first React project! I created the website from scratch and included fade animations to spice things up.";
const techStack = ['React', 'TailWind CSS', 'Next.js', 'JavaScript'];

export const OldWebsite = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={background}
          srcSet={`${background.src} 1280w, ${background.src} 2560w`}
          placeholder={background}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={techStack}
          url2="https://github.com/daniel-wang-design/daniel-wang-design.github.io"
          linkLabel2="View GitHub"
        />
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Original Simple Design</ProjectSectionHeading>
              <ProjectSectionText>
                My simple website, boosted by subtle animations, effectively conveys its
                message. With clean visuals and easy navigation, it stays clear and
                engaging. Let the unobtrusive animations be your guide, leaving a
                memorable impact with its straightforward approach.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[image1, image1]}
              placeholder={image1}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
