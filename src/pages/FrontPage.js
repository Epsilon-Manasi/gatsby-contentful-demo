import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const data = graphql`
  {
    allContentfulHomepages {
      nodes {
        bannerText
        bannerDescription {
          bannerDescription
        }
        bannerImage {
            id
            gatsbyImageData
        }
      }
    }
  }
`

const FrontPage = () => {
  const homedata = useStaticQuery(data);
  const banner = homedata.allContentfulHomepages.nodes[0];
  console.log(homedata)
  return (
    <>
      <section className="mainSpacing frontpage">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center">
              <article>
                <h1 className="display-3">{banner.bannerText}</h1>
                <p>{banner.bannerDescription.bannerDescription}</p>
              </article>
            </div>
            <div className="col-md-12 align-self-center">
              <figure className="mb-0">
                <img src={banner.bannerImage.gatsbyImageData.images.fallback.src} alt={banner.bannerImage.title} size={banner.bannerImage.base64} />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FrontPage
