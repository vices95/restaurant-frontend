import { gql } from '@apollo/client';

export const GET_TABLES = gql`
  query GetTables {
    tables {
      id
      state
      request {
        id
        description
        price
      }
    }
  }
`;
