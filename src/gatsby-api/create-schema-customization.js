module.exports = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Post implements Node {
      tree: PostTree
      html: String
      stack: [Tech!]!
      locale: String
      translations(status: String = "published", locales: [String!]): [Post]!
      tableOfContents: String!
      excerpt: String!
      headings: [PostHeading!]!
    }

    type PostTree {
      children(status: String = "published", locale: String): [Post]!
      next: Post
      prev: Post
      parent: Post
    }
    type Tech implements Node {
      title: String!
      summary: String
      types: [String!]!
      locale: String!
      original: Boolean!
      logo: String
      websites: [String!]!
      slug: String!
    }

    type PostHeading {
      depth: Int!
      value: String!
      slug: String!
    }
  `

  createTypes(typeDefs)
}
