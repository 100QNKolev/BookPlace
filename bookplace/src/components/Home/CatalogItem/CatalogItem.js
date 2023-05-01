import { useAuthContext } from '../../../contexts/authContext';

import styles from './CatalogItem.module.css';

export const CatalogItem = ({
    title,
    imageLink,
}) => {

    const { isAuthenticated } = useAuthContext();

    const removeButtonAfterClick = (e) => {
        e.target.parentNode.removeChild(e.target);
    };

    return (
        <div className={styles['post']}>
            <div className={styles['post-info']}>
                <img className={styles['image']} src={imageLink} alt='post thumbnail' />
                {isAuthenticated ? 
                <h2 className={styles['heading']}>{title} <br/> <button className={styles['button']} onClick={removeButtonAfterClick}>❤️</button> </h2>
                : <h2 className={styles['heading']}>{title}</h2>}
            </div>
        </div>
    )
};