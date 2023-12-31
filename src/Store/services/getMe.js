import { host } from '../../Api/host';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DATA_TAG = { type: 'dataMe', id: 'LIST' };

export const me = createApi({
  reducerPath: 'me',
  tagTypes: ['dataMe'],
  baseQuery: fetchBaseQuery({ baseUrl: `${host}/` }),
  endpoints: (build) => ({
    getMe: build.query({
      query: (access) => ({
        url: `user`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `bearer ${access}`,
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),
    changeData: build.mutation({
      query: (dataChange) => ({
        url: `user`,
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          Authorization: `bearer ${dataChange.access}`,
        },
        body: JSON.stringify({
          role: 'user',
          email: dataChange.email,
          name: dataChange.userName,
          surname: dataChange.surname,
          phone: dataChange.phone,
          city: dataChange.city,
        }),
      }),
      invalidatesTags: [DATA_TAG],
    }),
  }),
});
export const { useGetMeQuery, useChangeDataMutation } = me;
