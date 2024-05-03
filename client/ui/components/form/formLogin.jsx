import React, { useState } from 'react';
import styles from '../css/formLogin.module.css';
import { Formik, ErrorMessage } from 'formik';
import { Eye, EyeOff } from 'lucide-react';

export default function FormLogin() {

    const initialValues = {
        email: '',
        password: ''
    };

    const [isShow, setIsShow] = useState(false)

    const handlePassword = () => setIsShow(!isShow)

    const onSubmit = (values, actions) => {
        // Lógica de envio do formulário
        console.log('Formulário enviado!', values);
        actions.setSubmitting(false);
    };

    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'O email é obrigatório';
        }
        if (!values.password) {
            errors.password = 'A senha é obrigatória';
        }
        return errors;
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
        >
            {formik => (
                <div className={styles.form}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={`${styles.formGroup} form-group`}>
                            <label htmlFor="email" className={styles.label}>E-mail</label>
                            <input
                                type="email"
                                className={`${styles.formControl} ${styles.formLabel}`}
                                id="email"
                                name="email"
                                placeholder="E-mail"
                                {...formik.getFieldProps('email')} // Adiciona os props do Formik para lidar com o estado do campo
                            />
                            <div className={styles.errorBox}>
                                <ErrorMessage component="span" name="email" className={`${styles.formError} form-error`} />
                            </div>
                        </div>
                        <div className={`${styles.formGroup} form-group`}>
                            <label htmlFor="password" className={styles.label}>Senha</label>
                            <div className={`${styles.passarea} passarea`}> {/* Adicione passarea ao styles e à classe */}
                                <input
                                    type={isShow ? "text" : "password"}
                                    className={`${styles.formControl}`}
                                    id="password"
                                    name="password"
                                    placeholder="Senha"
                                    {...formik.getFieldProps('password')}
                                />
                                <button className={`${styles.eyeButton}`} onClick={handlePassword} type='button'>
                                    {isShow ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            <div className={styles.errorBox}>
                                <ErrorMessage component="span" name="password" className={`${styles.formError} form-error`} />
                            </div>
                        </div>

                        <div className={`${styles.formCheck} form-check`}>
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Lembrar de mim</label>
                        </div>
                        <div className={styles.remind}>
                            Está interessado nos nossos serviços? <a href="./Cadastro">Fale conosco!</a>
                        </div>
                        <button type="submit" className={`${styles.btn} btn`}><strong>Entrar</strong></button>
                    </form>
                </div>
            )}
        </Formik>
    );
}
