export const GetOurProjects = `query GetProjects {  
projects {
    nodes {
      id: databaseId
      title
      content
      status
      featuredImage {
        node {
          featuredImage:sourceUrl
          altText
        }
      }
      projectFields{
        projectLink
      }
  	}     
  }
}`
