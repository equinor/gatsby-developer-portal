import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {Authors} from '../components/Bio';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import Style from "../ui/style";

const Container = styled.div`
  margin-bottom: 60px;
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

                <Container key={node.fields.slug}>
                <Col xs={12} md={6} mdOffset={3}>
                <Title>
                        <Link to={`${node.fields.collection}${node.fields.slug}`}>
                            {title}
                        </Link>
                    </Title>

                    <div>
                        {/* Image */}

                        <Excerpt dangerouslySetInnerHTML={{__html: node.excerpt}}/>
                    </div>


                    <Row>
                        <Col xs={12} md={6}>
                            {node.fields.authors && <Authors authors={node.fields.authors}/>}
                            <small>{node.frontmatter.date}</small>
                        </Col>
                        <Col xs={12} md={6}>
                            <Tags>
                                /{tags}
                            </Tags>
                        </Col>
                    </Row>
                    </Col>
                    <hr />
                </Container>

        )
    });


export default BlogListing;
