import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 0;
`;

const AuthorContent = styled.p`
  display: flex;
  margin-right: 10px;
`;

const Avatar = styled(Image)`
  margin-bottom: 0;
  margin-right: 10px;
  width: 50px;
  border-radius: 100%;
`;

function Bio({authors}) {
    const listOfAuthors = authors.map(author => {
        return (<StaticQuery
                query={bioQuery}
                render={data => {
                    return (
                        <AuthorContent>
                            <Avatar
                                fixed={data.avatar.childImageSharp.fixed}
                                alt={author}
                                imgStyle={{
                                    borderRadius: `50%`,
                                }}
                            />
                            <p>
                                <strong>{author}</strong>
                            </p>
                        </AuthorContent>
                    )
                }}
            />
        )
    });
    return (<Wrapper>
        {listOfAuthors}
    </Wrapper>);
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Bio
