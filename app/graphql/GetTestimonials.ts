export const GetAllProjectsQuery = `query GetTestimonials {
  
  testimonials {
    
    nodes {
      id: databaseId
      title
      status
      testimonialFields{
        href
        date
        customer
        testimonial
        service
        rating
        designation
        outcome
      }
      featuredImage {
        node {
          avatar:guid
        }
      }
  }     
  }
}`