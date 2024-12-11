import { gql } from '@apollo/client';

export const NEW_TABLE_STATE_SUBSCRIPTION = gql`
  subscription NewTableState {
    newTableState {
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
