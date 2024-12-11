import { gql } from '@apollo/client';

export const GET_MENU = gql`
  query GetMenu {
    menu {
      categories {
        id
        name
        items {
          id
          description
          price
        }
      }
    }
  }
`;
