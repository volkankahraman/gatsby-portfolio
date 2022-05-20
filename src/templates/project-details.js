import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'

const ProjectDetails = ({data}) => {
  console.log(data);
  const {html} = data.markdownRemark
  const {title, stack, featuredImg} = data.markdownRemark.frontmatter
  console.log(html);
  return (
    <Layout>
        <div>
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div>
                <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="featured" />
            </div>
            <div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
        </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug:String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        title
        stack
        featuredImg{childImageSharp{gatsbyImageData}}
      }
    }
  }
`;

export default ProjectDetails