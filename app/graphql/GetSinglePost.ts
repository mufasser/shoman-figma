export const GetSinglePost = `query GetSinglePost($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    id
    title
    slug
    content
    date
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
    tags {
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
    seo {
      title
      metaDesc
    }
  }
}`
