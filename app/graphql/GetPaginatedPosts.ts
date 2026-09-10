export const GetPaginatedPosts =`query GetPaginatedPosts($first: Int!, $after: String, $search: String) {
  posts(first: $first, after: $after, where: { search: $search }) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      title
      slug
      excerpt
      date
      content
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl(size: LARGE)
        }
      }
    }
  }
}`
