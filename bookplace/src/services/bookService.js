import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/books';

export const bookServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const books = Object.values(result);

        return books;
    };

    const getOne = async (bookId) => {
        return await request.get(`${baseUrl}/${bookId}`);
    };

    const getByName = async (name) => {
        const query = encodeURIComponent(`title LIKE "${name}"`);

        const result = await request.get(`${baseUrl}?where=${query}`);
        const books = Object.values(result);

        return books;
    };

    return {
        getAll, 
        getOne,
        getByName
    };
};