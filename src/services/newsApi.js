// ! the logic to fetch data from news api 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// ! define headers 
const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'cda2d30be7msheecc834c925cce9p1570eejsnfe47e9cebf8d'
}

// ! define base url
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

// ! creating a request query
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

// ! creating a specific api request
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

// ! export the query
export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;