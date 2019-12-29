import React from "react"
import { graphql } from "gatsby"
import Link from "../components/link"

const ClassPost = ({ data }) => {
  const { post } = data

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.updatedAt}</p>
      <ul>
        {post.tree.children.map(lesson => (
          <li key={lesson.id}>
            <Link to={lesson.slug}>
              <h4>{lesson.title}</h4>
            </Link>
          </li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export default ClassPost

export const query = graphql`
  query($slug: String!, $locale: String!, $postType: String!) {
    localizedPost: post(
      slug: { eq: $slug }
      type: { eq: $postType }
      locale: { eq: $locale }
    ) {
      html
      title
      updatedAt
      locale
      tree {
        children {
          id
          title
          slug
        }
      }
    }
    defaultPost: post(slug: { eq: $slug }, type: { eq: $postType }) {
      html
      title
      updatedAt
      locale
      tree {
        children {
          id
          title
          slug
        }
      }
    }
  }
`
