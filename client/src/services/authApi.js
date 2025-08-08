import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = localStorage.getItem("token");
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/users/login",
        method: "post",
        body,
      }),
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "/users/",
        method: "POST",
        body,
      }),
      // invalidatesTags: ["User"],
    }),

    getUsers: builder.query({
      query: () => "/users/",
      // providesTags: ["User"],
    }),

    getUser: builder.query({
      query: (id) => `/users/${id}/`,
      // providesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/users/${id}/`,
        method: "PATCH",
        body: formData,
      }),
      // invalidatesTags: ["User"],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}/`,
        method: "DELETE",
      }),
      // invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useLazyGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = authApi;
