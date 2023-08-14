import background from 'assets/portfolio-large.png';
import image1 from 'assets/portfolio1.jpg';
import image2 from 'assets/portfolio2.jpg';
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
import styles from './Portfolio.module.css';

const title = '3D Portfolio Website';
const description =
  'Step into a captivating digital realm with my personal portfolio website, infused with the dynamic allure of 3D computer graphics. Explore my journey and creative works with immersive 3D elements that redefine the way you engage with my portfolio.';
const techStack = ['Three.js', 'React', 'Next.js', 'Framer Motion'];

export const Portfolio = () => {
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
          url2="https://github.com/daniel-wang-design/personal-website"
          linkLabel2="View GitHub"
        />
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Looks Good Anywhere</ProjectSectionHeading>
              <ProjectSectionText>
                My website is set up to shine on desktops and mobiles alike. With
                responsive design, every part shifts seamlessly to match any screen size.
                So, whether you are on a computer or phone, the site keeps its awesomeness
                with clear text and sharp visuals. 
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[image2]}
                placeholder={image2}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[image1]}
                placeholder={image1}
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
