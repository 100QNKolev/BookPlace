import { CatalogItem } from './CatalogItem/CatalogItem';
import { useBookContext } from '../../contexts/bookContext';

import styles from './Home.module.css';

export const Home = () => {
    const { books } = useBookContext();
    const allBooks = books[0] === undefined ? [] : Object.values(books[0]);
    allBooks.pop();

    let shuffled = allBooks.sort(() => 0.5 - Math.random());
    const newestBooks = shuffled.slice(0, 8);
    const suggestedBooks = shuffled.slice(9, 17);
    shuffled = allBooks.sort(() => 0.5 - Math.random());

    return (
        <div>
            <div className={styles['newestBooks']}>
                <h1>Newest Books</h1>
            </div>
            {newestBooks.map(x =>
                <CatalogItem key={x.title + x.year} {...x} />
            )}

            <div className={styles['newestBooks']}>
                <h1>Suggested Books</h1>
            </div>
            {suggestedBooks.map(x =>
                <CatalogItem key={x.title + x.year} {...x} />
            )}

            <div className={styles['newestBooks']}>
                <h1>All Books</h1>
            </div>
            {allBooks.map(x =>
                <CatalogItem key={x.title + x.year} {...x} />
            )}

            {allBooks.length === 0 && (
                <div className={styles['heading']}>
                    <h1>No books available</h1>
                </div>
            )}
        </div>
    )
};