import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react"
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css"

export default function Projects({data}) {
    const projects = data.allMarkdownRemark.nodes;
    const contact = data.contact.siteMetadata.contact;
    console.log(data);
    return (
    <Layout>
        <div className={styles.portfolio}>
            <h2>Projects </h2>
            <h4>{contact}</h4>
        </div>
        <div className={styles.projects}>
            {projects.map(project => (
                <Link to={"/projects/"+project.frontmatter.slug} key={project.id}>
                    <div >
                    <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}/>
                        <h3>{project.frontmatter.title}</h3>
                        <p>{project.frontmatter.stack}</p>
                    </div>
                </Link> 
            ))}
        </div>
    </Layout>
    );
}


export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          slug
          title
          stack
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
          featuredImg {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        html
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
 `