import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/authContext";

import styles from './Header.module.css';

export const Header = () => {

    const { isAuthenticated, userId } = useAuthContext();

    return (
        <nav>
            <ul className={styles['list-item']}>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/catalog">Catalog</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                {!isAuthenticated && (
                    <>
                        <li id="guest"> <Link to="/login">Login</Link> </li>
                        <li id="guest"> <Link to="/register">Register</Link> </li>
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <li id="user"> <Link to="/create">Create Post</Link> </li>
                        <li id="user"> <Link to={`/account/${userId}`}>My account</Link> </li>
                        <li id="user"> <Link to="/logout">Logout </Link> </li>
                    </>
                )}
            </ul>
        </nav>
    );
};