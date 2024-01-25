import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY =
  'live_2bT5BKqBthx1K31p0qHlqUN6Xc1OjreSzRR6jdDP4L52AvNfslN600WFpk30wqlL';

interface Breed {
  id: string;
  name: string;
  temperament: string;
  image: {
    url: string;
  };
}

// type QueryParams = {
//   limit: number;
//   page: number;
// };

export const dogsApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        // TODO: come back to this and figure it out lol
        // query(queryParams: QueryParams = { limit: 10, page: 1 }) {
        //   const { limit, page } = queryParams;
        //   return `/breeds?limit=${limit}&page=${page}`;
        // },
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = dogsApiSlice;
