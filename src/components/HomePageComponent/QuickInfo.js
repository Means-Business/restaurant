import React, { Component } from 'react';
import { Section, Title, SectionButton } from '../../utils';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { styles } from '../../utils';

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis
            lacinia arcu, eu tincidunt velit. Curabitur sed vehicula metus.
            Quisque aliquam pharetra venenatis. Sed a pulvinar arcu. Aliquam
            dictum orci sit amet sapien dignissim volutpat. Maecenas augue
            risus, ullamcorper sit amet eleifend condimentum, pretium a sem. Ut
            suscipit tempor arcu quis tincidunt. Vestibulum ut elementum magna.
            Donec tortor nisl, ornare eu laoreet nec, iaculis at elit. Donec a
            dolor accumsan, ultricies ex sed, auctor eros. Proin placerat eu
            urna et interdum.
          </p>
          <Link to="/about/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    );
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`;
