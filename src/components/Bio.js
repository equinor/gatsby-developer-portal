import React, { Component } from "react";
import kebabCase from "lodash/kebabCase";
import styled from "styled-components";
import Image from "gatsby-image";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 0;
  flex-direction: row;
  @media (max-width: 576px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const AuthorContent = styled.div`
  display: flex;
  margin-right: 10px;
  flex-direction: column;
`;

const Avatar = styled.img`
  margin-bottom: 0;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

class Authors extends Component {
  render() {
    const { authors } = this.props;

    const list = authors && authors.map((author, index) => {
      return <Bio key={`${author}-${index}`} author={author} />;
    });

    return <Wrapper>{list}</Wrapper>;
  }
}

export { Authors };

class Bio extends Component {
  render() {
    const { author } = this.props;

    const { name, image } = author;

    return (
      <Wrapper>
        <Avatar
          src={image}
          alt={name}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <AuthorContent>
          <div className="bio-name">{`${name}`}</div>
          {false && (
            <div className="bio-email">
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          )}
          {false && <div className="bio-bio">{bio}</div>}
        </AuthorContent>
      </Wrapper>
    );
  }
}

export default Bio;
