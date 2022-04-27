import type { NextPage } from 'next';
import Header from '@components/Header';
import { useEffect, useState } from 'react';

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

type IndexProps = {
  pinnedRepos: Array<Object>;
  publicRepos: Array<Object>;
};

const Index: NextPage = ({ pinnedRepos, publicRepos }: IndexProps) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Header active={active} setActive={setActive} />
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "scottduller") {
          pinnedItems(first: 6) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  createdAt
                  description
                  homepageUrl
                  languages(first: 10) {
                    nodes {
                      name
                      color
                    }
                  }
                  stargazerCount
                  pushedAt
                }
              }
            }
          }
          repositories(
            first: 50
            privacy: PUBLIC
            orderBy: { field: PUSHED_AT, direction: DESC }
          ) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  createdAt
                  description
                  homepageUrl
                  languages(first: 10) {
                    nodes {
                      name
                      color
                    }
                  }
                  stargazerCount
                }
                isPrivate
                pushedAt
              }
            }
          }
        }
      }
    `,
  });

  const pinnedRepos = data.user.pinnedItems.edges.map(({ node }) => node);

  const publicRepos = data.user.repositories.edges.map(({ node }) => node);

  return { props: { pinnedRepos, publicRepos } };
}
