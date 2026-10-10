export const GetAllProjectsQuery = `query GetTestimonials {
  
  testimonials(first: 100) {
    
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
