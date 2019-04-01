import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {Authors} from '../components/Bio';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import Style from "../ui/style";

const Container = styled.div`
  margin-bottom: 60px;
  padding: 40px;
  box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1), 0 20px 20px 0 rgba(0,0,0,0.05);
  margin: 15px;
`;

const Tags = styled.div`

`;

const Tag = styled.span`
    font-size: ${Style.typography.xs};
    font-weight: 500;
    line-height: 14px;
    color: ${Style.colors.mossGreen};
    text-transform: uppercase;
`;

const Title = styled.h3`
    margin-bottom: 17px;
    a {
        font-size: ${Style.typography.xxxl};
        font-weight: 400;
        letter-spacing: -0.08px;
        line-height: 36px;
    }
`;

const Excerpt = styled.p`
    font-size: ${Style.typography.lg};
    line-height: 24px;
    margin-bottom: 40px;
`;


const BlogListing = ({nodes}) =>
    nodes.map(({node}) => {
        const title = node.frontmatter.title || node.fields.slug;

        const tags = node.frontmatter.tags.map((tag, index) => {
            return <Tag key={`${tag}-${index}`}> {tag} </Tag>
        });

        return (
            <Col xs={12} md={6}>
                <Container key={node.fields.slug}>
                    <Tags>
                        /{tags}
                    </Tags>

                    {/* Image */}

                    <Title>
                        <Link to={`${node.fields.collection}${node.fields.slug}`}>
                            {title}
                        </Link>
                    </Title>

                    <Excerpt dangerouslySetInnerHTML={{__html: node.excerpt}}/>

                    {node.fields.authors && <Authors authors={node.fields.authors}/>}
                    <small>{node.frontmatter.date}</small>

                </Container>
            </Col>
        )
    });


export default BlogListing;
