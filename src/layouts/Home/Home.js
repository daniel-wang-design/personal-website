import phoneFrontLarge from 'assets/phone-front-large.png';
import phoneFrontPlaceholder from 'assets/phone-front-large.png';
import phoneFrontSmall from 'assets/phone-front-large.png';
import phoneBackLarge from 'assets/phone-back-large.PNG';
import phoneBackPlaceholder from 'assets/phone-back-large.PNG';
import phoneBackSmall from 'assets/phone-back-large.PNG';
import pollAppLarge from 'assets/pollapp-large.png';
import pollAppPlaceholder from 'assets/pollapp-large.png';
import pollAppSmall from 'assets/pollapp-large.png';
import personalWebsiteLarge from 'assets/personal-website-large.jpg';
import personalWebsitePlaceholder from 'assets/personal-website-large.jpg';
import personalWebsiteSmall from 'assets/personal-website-large.jpg';
import focusyouthLarge from 'assets/focusyouth-large.png';
import websiteFront from 'assets/website-front.jpg';
import websiteBack from 'assets/website-back.jpg';
import websitePlaceholder from 'assets/website-front.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import { Contact } from './Contact';
import styles from './Home.module.css';

const disciplines = ['CS Student', 'Developer', 'Learner', 'Designer', 'Leader'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();
  const contact = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      details,
      contact,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta title="UWaterloo CS" description="Personal website of Daniel Wang" />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Digital Volunteer Portal"
        description="App created for FOCUS Youth Organization allowing executives, tutors, and volunteers to sign in and log their volunteer hours."
        buttonText="View project"
        buttonLink="/portal"
        model={{
          type: 'laptop',
          alt: '',
          textures: [
            {
              srcSet: [focusyouthLarge],
              placeholder: personalWebsitePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Improvall"
        description="A mobile app that encourages productivity created for both Android and iOS devices"
        buttonText="View Project"
        buttonLink=""
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [phoneBackSmall, phoneBackLarge],
              placeholder: phoneBackPlaceholder,
            },
            {
              srcSet: [phoneFrontSmall, phoneFrontLarge],
              placeholder: phoneFrontPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Slack Polling App"
        description="An open-source app for Slack workplaces to allow users to create polls"
        buttonText="View project"
        buttonLink=""
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [pollAppSmall, pollAppLarge],
              placeholder: pollAppPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="3D Portlio Website"
        description="My newest 3D website showcasing some of my past projects and experience"
        buttonText="View project"
        buttonLink=""
        model={{
          type: 'phone',
          alt: '',
          textures: [
            {
              srcSet: [websiteBack, websiteBack],
              placeholder: websitePlaceholder,
            },
            {
              srcSet: [websiteFront, websiteFront],
              placeholder: websitePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={4}
        title="Personal Website"
        description="My first personal website showcasing some of my past projects and experience"
        buttonText="View project"
        buttonLink=""
        model={{
          type: 'laptop',
          alt: '',
          textures: [
            {
              srcSet: [personalWebsiteSmall, personalWebsiteLarge],
              placeholder: personalWebsitePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Contact
        id="contact"
        sectionRef={contact}
        visible={visibleSections.includes(contact.current)}
      />
      <Footer />
    </div>
  );
};
