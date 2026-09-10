export const MutationSubmitContactForm = `mutation SubmitContactForm(
  $formId: ID!,
  $clientMutationId: String!,
  $fullname: String!,
  $companyName: String,
  $companyEmail: String,
  $phoneNumber: String,
  $servicesInterestedIn: String,
  $businessStage: String,
  $tellUsWhatYouNeed: String
) {
  submitContactForm(
    input: {
      contactFormId: $formId
      clientMutationId: $clientMutationId
      fieldValues: [
        { slug: "fullname", value: $fullname }
        { slug: "company-name", value: $companyName }
        { slug: "company-email", value: $companyEmail }
        { slug: "phone-number", value: $phoneNumber }
        { slug: "services-interested-in", value: $servicesInterestedIn }
        { slug: "business-stage", value: $businessStage }
        { slug: "tell-us-what-you-need", value: $tellUsWhatYouNeed }
      ]
    }
  ) {
    status
    message
    errors {
      field
      message
    }
  }
}`;
