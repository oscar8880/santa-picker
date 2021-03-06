import styles from './Footer.module.scss';
import Action from '../Action/Action';
import React from 'react';
import GithubIcon from '../Icons/GithubIcon/GithubIcon';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__LinkRow}>
        <div className={styles.Footer__Item}>
          <Action appearance="none" tagName="Link" to="/credits">
            Credits
          </Action>
        </div>
        <div className={styles.Footer__Item}>
          <Action appearance="none" tagName="Link" to="/privacy">
            Privacy
          </Action>
        </div>
      </div>

      <Action
        appearance="none"
        tagName="a"
        target="_blank"
        href="https://github.com/oscar8880/santa-picker"
      >
        <GithubIcon width={24} />
      </Action>
    </footer>
  );
};

export default Footer;
