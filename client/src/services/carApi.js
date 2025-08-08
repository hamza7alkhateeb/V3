import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Car"],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (params) => ({
        url: "/cars/",
        params,
      }),
      providesTags: ["Car"],
    }),

    getCar: builder.query({
      query: (id) => `/cars/${id}/`,
      providesTags: (result, error, id) => [{ type: "Car", id }],
    }),

    createCar: builder.mutation({
      query: (formData) => ({
        url: "/cars/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Car"],
    }),

    updateCar: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/cars/${id}/`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: (result, error, { id }) => ["Car", { type: "Car", id }],
    }),

    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/cars/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => ["Car", { type: "Car", id }],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarQuery,
  useCreateCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carApi;
