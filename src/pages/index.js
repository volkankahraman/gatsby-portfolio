import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage } from "gatsby-plugin-image";

export default function Home({data}) {
  const image = data.file.childImageSharp.gatsbyImageData
  console.log(data);
  return <Layout>
    <section className={styles.header}>
      <div>
        <h2 >Design </h2>
        <h3 >Develop & Deploy </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde blanditiis pariatur voluptatibus quod nulla, adipisci numquam non fuga a repellendus aperiam excepturi expedita sapiente! Quod animi veniam omnis esse perferendis?
        </p>
        <Link className={styles.btn} to="projects">
          Projects
        </Link>
      </div>
      <GatsbyImage image={image} alt="Banner" />
    </section>
  </Layout>
}
export const query = graphql`
  query img_qry {
    file(relativePath: {eq: "plan_2.jpg"}) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`