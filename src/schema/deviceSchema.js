export const typeDefs = `#graphql
    type Device {
        id: ID!
        name: String!
        type: String!
        visible: Boolean!
        # Otros campos según sea necesario
    }
    type Query {
        getEnabledDevicesByIdProject(projectId: ID!): [Device]!
        getDeviceById(id: ID!): Device
    }
    input CreateDeviceInput {
        name: String!
        type: String!
        visible: Boolean!
        # Otros campos según sea necesario
    }
    input UpdateDeviceInput {
        name: String
        type: String
        visible: Boolean
        # Otros campos según sea necesario
    }
    type Mutation {
        createDevice(projectId: ID!, input: CreateDeviceInput): Device
        updateDevice(id: ID!, input: UpdateDeviceInput): Device
        deleteDevice(id: ID!): Device
    }
`;