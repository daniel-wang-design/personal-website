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

const isChromeBrowser = () => {
  const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  return /Chrome/.test(userAgent) && !/Edg/.test(userAgent);
};

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
  const [isChrome, setIsChrome] = useState(true);

  useEffect(() => {
    setIsChrome(isChromeBrowser());
  }, []);

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
      { rootMargin: '0px 0px -10% 0px' }
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
      {isChrome && <div className={styles.warningBanner}>Some Elements Were Not Rendered | Chrome Functionality Limited | Use Edge Instead</div>}
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
        isChrome={isChrome}
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
        isChrome={isChrome}
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
        buttonLink="/mobile"
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
        isChrome={isChrome}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Slack Polling App"
        description="An open-source app for Slack workplaces to allow users to create polls"
        buttonText="View project"
        buttonLink="/slack"
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
        isChrome={isChrome}
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
        buttonLink="/portfolio"
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
        isChrome={isChrome}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Personal Website"
        description="My first personal website showcasing some of my past projects and experience"
        buttonText="View project"
        buttonLink="/oldwebsite"
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
        isChrome={isChrome}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="about"
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
