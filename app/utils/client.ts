import { GraphQLClient } from "graphql-request";
import { getSdk } from "../graphql/generated";

const adminSecret = process.env.GRAPHQL_ADMIN_KEY
const url = process.env.GRAPHQL_URL
const gqlClient = new GraphQLClient(url as string);
gqlClient.setHeader("x-hasura-admin-secret", adminSecret as string);
const client = getSdk(gqlClient);

export default client;
