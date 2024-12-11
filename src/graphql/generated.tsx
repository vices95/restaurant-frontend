/* eslint-disable no-unused-vars */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String']['output'];
  items: Array<MenuItem>;
  name: Scalars['String']['output'];
};

export type Menu = {
  __typename?: 'Menu';
  categories: Array<Category>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  price: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createMenuItem: MenuItem;
  deleteCategory: Category;
  deleteMenuItem: MenuItem;
  updateCategory: Category;
  updateMenuItem: MenuItem;
};

export type MutationCreateCategoryArgs = {
  name: Scalars['String']['input'];
};

export type MutationCreateMenuItemArgs = {
  categoryId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteMenuItemArgs = {
  id: Scalars['String']['input'];
};

export type MutationUpdateCategoryArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateMenuItemArgs = {
  categoryId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  menu: Menu;
  tables: Array<Table>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newTableState: Array<Table>;
};

export type Table = {
  __typename?: 'Table';
  id: Scalars['Int']['output'];
  request?: Maybe<Array<MenuItem>>;
  state: TableState;
};

/** States of a table */
export enum TableState {
  Attended = 'Attended',
  Empty = 'Empty',
  Waiting = 'Waiting',
}

export type CreateCategoryMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;

export type CreateCategoryMutation = {
  __typename?: 'Mutation';
  createCategory: { __typename?: 'Category'; id: string; name: string };
};

export type UpdateCategoryMutationVariables = Exact<{
  name: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;

export type UpdateCategoryMutation = {
  __typename?: 'Mutation';
  updateCategory: { __typename?: 'Category'; id: string; name: string };
};

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type DeleteCategoryMutation = {
  __typename?: 'Mutation';
  deleteCategory: { __typename?: 'Category'; id: string; name: string };
};

export type CreateMenuItemMutationVariables = Exact<{
  description: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  categoryId: Scalars['String']['input'];
}>;

export type CreateMenuItemMutation = {
  __typename?: 'Mutation';
  createMenuItem: {
    __typename?: 'MenuItem';
    id: string;
    description: string;
    price: number;
  };
};

export type UpdateMenuItemMutationVariables = Exact<{
  description: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  categoryId: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;

export type UpdateMenuItemMutation = {
  __typename?: 'Mutation';
  updateMenuItem: {
    __typename?: 'MenuItem';
    id: string;
    description: string;
    price: number;
  };
};

export type DeleteMenuItemMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type DeleteMenuItemMutation = {
  __typename?: 'Mutation';
  deleteMenuItem: {
    __typename?: 'MenuItem';
    id: string;
    description: string;
    price: number;
  };
};

export type GetMenuQueryVariables = Exact<{ [key: string]: never }>;

export type GetMenuQuery = {
  __typename?: 'Query';
  menu: {
    __typename?: 'Menu';
    categories: Array<{
      __typename?: 'Category';
      id: string;
      name: string;
      items: Array<{
        __typename?: 'MenuItem';
        id: string;
        description: string;
        price: number;
      }>;
    }>;
  };
};

export type GetTablesQueryVariables = Exact<{ [key: string]: never }>;

export type GetTablesQuery = {
  __typename?: 'Query';
  tables: Array<{
    __typename?: 'Table';
    id: number;
    state: TableState;
    request?: Array<{
      __typename?: 'MenuItem';
      id: string;
      description: string;
      price: number;
    }> | null;
  }>;
};

export type NewTableStateSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type NewTableStateSubscription = {
  __typename?: 'Subscription';
  newTableState: Array<{
    __typename?: 'Table';
    id: number;
    state: TableState;
    request?: Array<{
      __typename?: 'MenuItem';
      id: string;
      description: string;
      price: number;
    }> | null;
  }>;
};

export const CreateCategoryDocument = gql`
  mutation CreateCategory($name: String!) {
    createCategory(name: $name) {
      id
      name
    }
  }
`;
export type CreateCategoryMutationFn = Apollo.MutationFunction<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCategoryMutation,
    CreateCategoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCategoryMutation,
    CreateCategoryMutationVariables
  >(CreateCategoryDocument, options);
}
export type CreateCategoryMutationHookResult = ReturnType<
  typeof useCreateCategoryMutation
>;
export type CreateCategoryMutationResult =
  Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>;
export const UpdateCategoryDocument = gql`
  mutation UpdateCategory($name: String!, $id: String!) {
    updateCategory(name: $name, id: $id) {
      id
      name
    }
  }
`;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCategoryMutation,
    UpdateCategoryMutationVariables
  >(UpdateCategoryDocument, options);
}
export type UpdateCategoryMutationHookResult = ReturnType<
  typeof useUpdateCategoryMutation
>;
export type UpdateCategoryMutationResult =
  Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
>;
export const DeleteCategoryDocument = gql`
  mutation DeleteCategory($id: String!) {
    deleteCategory(id: $id) {
      id
      name
    }
  }
`;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables
>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteCategoryMutation,
    DeleteCategoryMutationVariables
  >(DeleteCategoryDocument, options);
}
export type DeleteCategoryMutationHookResult = ReturnType<
  typeof useDeleteCategoryMutation
>;
export type DeleteCategoryMutationResult =
  Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<
  DeleteCategoryMutation,
  DeleteCategoryMutationVariables
>;
export const CreateMenuItemDocument = gql`
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
export type CreateMenuItemMutationFn = Apollo.MutationFunction<
  CreateMenuItemMutation,
  CreateMenuItemMutationVariables
>;

/**
 * __useCreateMenuItemMutation__
 *
 * To run a mutation, you first call `useCreateMenuItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMenuItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMenuItemMutation, { data, loading, error }] = useCreateMenuItemMutation({
 *   variables: {
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useCreateMenuItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMenuItemMutation,
    CreateMenuItemMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMenuItemMutation,
    CreateMenuItemMutationVariables
  >(CreateMenuItemDocument, options);
}
export type CreateMenuItemMutationHookResult = ReturnType<
  typeof useCreateMenuItemMutation
>;
export type CreateMenuItemMutationResult =
  Apollo.MutationResult<CreateMenuItemMutation>;
export type CreateMenuItemMutationOptions = Apollo.BaseMutationOptions<
  CreateMenuItemMutation,
  CreateMenuItemMutationVariables
>;
export const UpdateMenuItemDocument = gql`
  mutation UpdateMenuItem(
    $description: String!
    $price: Int!
    $categoryId: String!
    $id: String!
  ) {
    updateMenuItem(
      description: $description
      price: $price
      categoryId: $categoryId
      id: $id
    ) {
      id
      description
      price
    }
  }
`;
export type UpdateMenuItemMutationFn = Apollo.MutationFunction<
  UpdateMenuItemMutation,
  UpdateMenuItemMutationVariables
>;

/**
 * __useUpdateMenuItemMutation__
 *
 * To run a mutation, you first call `useUpdateMenuItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMenuItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMenuItemMutation, { data, loading, error }] = useUpdateMenuItemMutation({
 *   variables: {
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      categoryId: // value for 'categoryId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateMenuItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMenuItemMutation,
    UpdateMenuItemMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateMenuItemMutation,
    UpdateMenuItemMutationVariables
  >(UpdateMenuItemDocument, options);
}
export type UpdateMenuItemMutationHookResult = ReturnType<
  typeof useUpdateMenuItemMutation
>;
export type UpdateMenuItemMutationResult =
  Apollo.MutationResult<UpdateMenuItemMutation>;
export type UpdateMenuItemMutationOptions = Apollo.BaseMutationOptions<
  UpdateMenuItemMutation,
  UpdateMenuItemMutationVariables
>;
export const DeleteMenuItemDocument = gql`
  mutation DeleteMenuItem($id: String!) {
    deleteMenuItem(id: $id) {
      id
      description
      price
    }
  }
`;
export type DeleteMenuItemMutationFn = Apollo.MutationFunction<
  DeleteMenuItemMutation,
  DeleteMenuItemMutationVariables
>;

/**
 * __useDeleteMenuItemMutation__
 *
 * To run a mutation, you first call `useDeleteMenuItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMenuItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMenuItemMutation, { data, loading, error }] = useDeleteMenuItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMenuItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMenuItemMutation,
    DeleteMenuItemMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteMenuItemMutation,
    DeleteMenuItemMutationVariables
  >(DeleteMenuItemDocument, options);
}
export type DeleteMenuItemMutationHookResult = ReturnType<
  typeof useDeleteMenuItemMutation
>;
export type DeleteMenuItemMutationResult =
  Apollo.MutationResult<DeleteMenuItemMutation>;
export type DeleteMenuItemMutationOptions = Apollo.BaseMutationOptions<
  DeleteMenuItemMutation,
  DeleteMenuItemMutationVariables
>;
export const GetMenuDocument = gql`
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

/**
 * __useGetMenuQuery__
 *
 * To run a query within a React component, call `useGetMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMenuQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMenuQuery, GetMenuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMenuQuery, GetMenuQueryVariables>(
    GetMenuDocument,
    options,
  );
}
export function useGetMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMenuQuery,
    GetMenuQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMenuQuery, GetMenuQueryVariables>(
    GetMenuDocument,
    options,
  );
}
export function useGetMenuSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetMenuQuery, GetMenuQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetMenuQuery, GetMenuQueryVariables>(
    GetMenuDocument,
    options,
  );
}
export type GetMenuQueryHookResult = ReturnType<typeof useGetMenuQuery>;
export type GetMenuLazyQueryHookResult = ReturnType<typeof useGetMenuLazyQuery>;
export type GetMenuSuspenseQueryHookResult = ReturnType<
  typeof useGetMenuSuspenseQuery
>;
export type GetMenuQueryResult = Apollo.QueryResult<
  GetMenuQuery,
  GetMenuQueryVariables
>;
export const GetTablesDocument = gql`
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

/**
 * __useGetTablesQuery__
 *
 * To run a query within a React component, call `useGetTablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTablesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTablesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTablesQuery,
    GetTablesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTablesQuery, GetTablesQueryVariables>(
    GetTablesDocument,
    options,
  );
}
export function useGetTablesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTablesQuery,
    GetTablesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTablesQuery, GetTablesQueryVariables>(
    GetTablesDocument,
    options,
  );
}
export function useGetTablesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetTablesQuery, GetTablesQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTablesQuery, GetTablesQueryVariables>(
    GetTablesDocument,
    options,
  );
}
export type GetTablesQueryHookResult = ReturnType<typeof useGetTablesQuery>;
export type GetTablesLazyQueryHookResult = ReturnType<
  typeof useGetTablesLazyQuery
>;
export type GetTablesSuspenseQueryHookResult = ReturnType<
  typeof useGetTablesSuspenseQuery
>;
export type GetTablesQueryResult = Apollo.QueryResult<
  GetTablesQuery,
  GetTablesQueryVariables
>;
export const NewTableStateDocument = gql`
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

/**
 * __useNewTableStateSubscription__
 *
 * To run a query within a React component, call `useNewTableStateSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewTableStateSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewTableStateSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewTableStateSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    NewTableStateSubscription,
    NewTableStateSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    NewTableStateSubscription,
    NewTableStateSubscriptionVariables
  >(NewTableStateDocument, options);
}
export type NewTableStateSubscriptionHookResult = ReturnType<
  typeof useNewTableStateSubscription
>;
export type NewTableStateSubscriptionResult =
  Apollo.SubscriptionResult<NewTableStateSubscription>;
