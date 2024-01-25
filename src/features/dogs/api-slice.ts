import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Dog } from './dog-slice';

// type QueryParams = {
//   limit: number;
//   page: number;
// };

export const dogsApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', import.meta.env.VITE_DOG_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Dog[], number | void>({
        // TODO: come back to this and figure it out lol
        // query(queryParams: QueryParams = { limit: 10, page: 1 }) {
        //   const { limit, page } = queryParams;
        //   return `/breeds?limit=${limit}&page=${page}`;
        // },
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
      fetchBreed: builder.query<Dog, number>({
        query(breedId) {
          return `/breeds/${breedId}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery, useFetchBreedQuery } = dogsApiSlice;
