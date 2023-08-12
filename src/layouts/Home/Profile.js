import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';
import { useScrollToHash } from 'hooks';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there!" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Lorensl ksflkjwl jslfjk sdljksdfl sdfljdfl fljdklas lkfjl sfjdsflkf ljsdfk
      falsesdflkjflfa-flip-horizontal fjksdlfsdjaf afljlfs flkfj ljflksflf ldfkj sdflkjlf
      flkjsdf slfjf fj sf sdlfjsd lfjksdlfjsdks flskjfljksdf lfjsd jsdflksdf sklfj
      sdlfjksdfjsd lfjks jasdjfasd jfsdkjfjawioej
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Lorensl ksflkjwl jslfjk sdljksdfl sdfljdfl fljdklas lkfjl sfjdsflkf ljsdfk
      falsesdflkjflfa-flip-horizontal fjksdlfsdjaf afljlfs flkfj ljflksflf ldfkj sdflkjlf
      flkjsdf slfjf fj sf sdlfjsd lfjksdlfjsdks flskjfljksdf lfjsd jsdflksdf sklfj
      sdlfjksdfjsd lfjks jasdjfasd jfs
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="#contact"
                icon="send"
                onClick={handleScrollClick}
              >
                Contact me!
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  It&apos;s me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Picture of me."
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
