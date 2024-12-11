import { gql } from '@apollo/client';

// Mutations for categories
export const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!) {
    createCategory(name: $name) {
      id
      name
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($id: String!, $name: String!) {
    updateCategory(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($id: String!) {
    deleteCategory(id: $id) {
      id
      name
    }
  }
`;

// Mutations for menuItems
export const CREATE_MENU_ITEM = gql`
  mutation CreateMenuItem(
    $description: String!
    $price: Int!
    $categoryId: String!
  ) {
    createMenuItem(
      description: $description
      price: $price
      categoryId: $categoryId
    ) {
      id
      description
      price
    }
  }
`;

export const UPDATE_MENU_ITEM = gql`
  mutation UpdateMenuItem(
    $id: String!
    $description: String!
    $price: Int!
    $categoryId: String!
  ) {
    updateMenuItem(
      id: $id
      description: $description
      price: $price
      categoryId: $categoryId
    ) {
      id
      description
      price
    }
  }
`;

export const DELETE_MENU_ITEM = gql`
  mutation DeleteMenuItem($id: String!) {
    deleteMenuItem(id: $id) {
      id
      description
      price
    }
  }
`;
