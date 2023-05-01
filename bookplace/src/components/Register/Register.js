import { useState } from "react";

import { useAuthContext } from "../../contexts/authContext";
import { useForm } from "../../hooks/useForm";
import { validateUser } from "../../validators/authValidator";

import styles from './Register.module.css';

export const Register = () => {

    const { onRegisterSubmit } = useAuthContext();
    const [formErrors, setFormErrors] = useState([]);

    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    const registerValidate = async (e) => {
        e.preventDefault();

        const result = await validateUser(values);
        const errors = Object.values(result);

        if (errors.length > 0) {
            setFormErrors(errors);
        }
        else {
            onSubmit(e);
        }

    };

    return (
        <div>
            {formErrors.length > 0 && (

                formErrors.map(x => (
                    <div key={x} className={styles['error']}>
                        <h2>{x}</h2>
                    </div>
                ))

            )}
            <div className={styles['logo']}></div>
            <div className={styles['register-block']}>
                <h1>Register</h1>
                <form onSubmit={registerValidate} method="POST">
                    <input type="text" placeholder="Username" value={values.username} onChange={changeHandler} name="username" id="username" />
                    <input type="password" placeholder="Password" value={values.password} onChange={changeHandler} name="password" id="password" />
                    <input type="password" placeholder="Confirm Password" value={values.confirmPassword} onChange={changeHandler} name="confirmPassword" id="confirmPassword" />
                    <input type="text" placeholder="Email" value={values.email} onChange={changeHandler} name="email" id="email" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};