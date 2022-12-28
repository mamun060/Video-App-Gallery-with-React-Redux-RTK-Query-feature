import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// api slice
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000"
    }),
    endpoints: (builder)=>({

    })
})

