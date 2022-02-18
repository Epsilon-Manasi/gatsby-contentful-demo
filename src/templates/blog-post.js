import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../Components/Layout"
import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

export default function BlogPost({ data }) {
  const post = data.contentfulBlog;
  //console.log(post)
  const options = {
    renderNode: {
      [BLOCKS.body]: (children) => {
        return <div>{children}</div>
      },
    },
  }
  return (
    <Layout>
      <div className="blogInner py-5 container">
        <div className="row">
          <div className="col-md-12">
            <Link to="/blog" className="btn btn-secondary my-2">Back to home</Link>
            <img src={post.images.gatsbyImageData.images.fallback.src} alt="blogimage" className="mb-5" />
            <h1 className="text-secondary mb-4">{post.title}</h1>
            <div>{renderRichText(post.content, options)}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query GetSingleBlogs($slug: String) {
  contentfulBlog(slug: {eq: $slug}) {
    title
    slug
    id
    info
    images {
        gatsbyImageData
    }
    content {
      raw
    }
  }
}
`