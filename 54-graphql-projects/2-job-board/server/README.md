
# Mutation examples

## updateJob

`mutation {
  updateJob(input: {
    id: "7qlvQsd9nWHkh5byjT5r7",
    title: "Senior DevOps Engineer",
    companyId: "pVbRRBQtMVw6lUAkj1k43",
    description: "We need somebody to restart the servers when they fall over."
  }) {
    id
    title
    company {
      id
      name
    }
    description
  }
}`

## createJob

`mutation CreateJobMutation($input: CreateJobInput!) {
  job: createJob(input: $input) {
    id
    title
    company {
      id
      name
    }
  }
}`
