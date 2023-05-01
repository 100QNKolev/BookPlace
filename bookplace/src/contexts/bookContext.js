import { createContext, useContext, useState, useEffect } from "react";
import { bookServiceFactory } from '../services/bookService';
import { AuthContext } from "./authContext";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {

    const { token } = useContext(AuthContext);

    const [books, setBooks] = useState([]);
    const { getOne, getAll, getByName } = bookServiceFactory(token);

    useEffect(() => {
        getAll()
            .then(result => {
                setBooks(result);
            })
        // eslint-disable-next-line
    }, []);

    const getOneBook = async (postId) => {
        return await getOne(postId);
    };

    const getSearchedBooks = async (name) => {
        setBooks(await getByName(name));
    };

    const context = {
        books,
        getOneBook,
        getSearchedBooks
    };

    return (
        <>
            <BookContext.Provider value={context}>
                {children}
            </BookContext.Provider>
        </>
    );

};
export const useBookContext = () => {
    const context = useContext(BookContext);

    return context;
};