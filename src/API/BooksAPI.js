import axios from 'axios'

const API_KEY = 'AIzaSyBm3YcP6Xe2ouq4e0RJcS3gkbVSGIoL7mU'

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
})

export default class BooksAPI {
    static async getAll(query = 10, category = '', sort, startIndex = 0) {
        const response = await instance.get(`?q=${query}+subject:${category}&maxResults=30&orderBy=${sort}&startIndex=${startIndex}&key=${API_KEY}`)
        return response
    }


    static async getBookId(id) {
        const response = await instance.get(`${id}`)
        return response
    }
}