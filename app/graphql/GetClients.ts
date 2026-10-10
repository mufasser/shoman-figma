export const GetClients = `query GetClients($after: String) {
  clients(first: 100, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id: databaseId
      title
      status
      featuredImage {
        node {
          avatar: guid
        }
      }
    }
  }
}`;
