import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";

import "../scss/styles.scss";
import Layout from '../Components/Layout';
import { StaticImage } from "gatsby-plugin-image";


const data = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "pdf"}}) {
    edges {
      node {
        publicURL
        name
      }
    }
  }
  allPdf {
    edges {
      node {
        content
      }
    }
  }
}
`

const Press = () => {
    const getdata = useStaticQuery(data)
    const pdfshow = getdata.allFile.edges[0].node;
    const content = getdata.allPdf.edges[0].node;
    return (
        <Layout>
            <div className='contactwrap'>
                <section className='contact'>
                    <StaticImage
                        src="../images/contact.jpg"
                        alt='contactbg'
                        className='w-100'
                    />
                </section>
                <div className='mainSpacing'>
                    <div className='container'>
                        <div className='row justify-content-center align-items-center'>
                            <div className='col-lg-10'>
                               <Link to={pdfshow.publicURL} className="display-4">{pdfshow.name}</Link>
                               <h3>Data from Sample.pdf</h3>
                               <p>{content.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Press;
