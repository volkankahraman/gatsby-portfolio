import React from 'react'
import {Link } from 'gatsby'

const Navbar = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     site {
  //       siteMetadata {
  //         copyright
  //         description
  //         title
  //       }
  //     }
  //   }
  // `);
  // const {title} = data.site.siteMetadata;
  return (
    <nav>
        <h1>Volkan Kahraman</h1>
        <div className="links">
            <Link to="/">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/projects">Portfolio Projects</Link>
        </div>
    </nav>
  )
}

export default Navbar