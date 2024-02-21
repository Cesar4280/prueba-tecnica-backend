export const typeDefs = `#graphql
    type Project {
        id: ID!
        name: String!
        enabled: Boolean!
        time_zone: String!
        # Otros campos según sea necesario
    }
    type Query {
        getEnabledProjects: [Project]!
        getProjectById(id: ID!): Project
    }
    input CreateProjectInput {
        name: String!
        enabled: Boolean!
        time_zone: String!
        # Otros campos según sea necesario
    }
    input UpdateProjectInput {
        name: String
        enabled: Boolean
        time_zone: String
        # Otros campos según sea necesario
    }
    type Mutation {
        createProject(input: CreateProjectInput): Project
        updateProject(id: ID!, input: UpdateProjectInput): Project
        deleteProject(id: ID!): Project
    }
`;