import styles from './CatalogItem.module.css';

export const CatalogItem = ({
    title,
    imageLink,
}) => {

    const removeButtonAfterClick = (e) => {
        e.target.parentNode.removeChild(e.target);
    };
    return (
        <div className={styles['post']}>
            <div className={styles['post-info']}>
                <img className={styles['image']} src={imageLink} alt='post thumbnail' />
                <h2 className={styles['heading']}>{title} <br/> <button className={styles['button']} onClick={removeButtonAfterClick}>❤️</button> </h2>
            </div>
        </div>
    )
};