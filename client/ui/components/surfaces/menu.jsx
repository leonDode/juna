'use client'

import React, { useEffect, useState } from 'react';
import styles from './css/menu.module.css';
import { BsPencil, BsPersonCircle, BsTrash } from 'react-icons/bs'; // Importa o ícone de edição, ícone de pessoa e ícone de lixeira
import MenuItem from './MenuItem';


export default function Menu() {
    const [activeLink, setActiveLink] = useState('');

    const [imageSrc, setImageSrc] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    useEffect(() => {
        const savedImageUrl = localStorage.getItem('savedImageUrl');
        if (savedImageUrl) {
            setImageSrc(savedImageUrl);
        }
    }, []);

    const handleImageChange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
                localStorage.setItem('savedImageUrl', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageRemove = () => {
        setImageSrc('');
        localStorage.removeItem('savedImageUrl');
    };

    return (
        <div className={styles.menu}>
            <div className={styles.imagem}>
                <div className={styles.imageContainer}>
                    {imageSrc ? (
                        <img src={imageSrc} alt="Imagem de perfil" className={styles.image} />
                    ) : (
                        <BsPersonCircle className={styles.defaultIcon} />
                    )}
                </div>

                </div>

                <div className={styles.edit}>
                <label htmlFor="imageUpload" className={styles.editButton}>
                    <BsPencil size={20} />
                    <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                </label>
                {/* {imageSrc && (
                    <button className={styles.deleteButton} onClick={handleImageRemove}>
                        <BsTrash size={20} />
                    </button>
                )} */}
            </div>

            <nav>
            <MenuItem href="/dashboard-admin"  className={styles.link} activeLink={activeLink} onClick={() => handleLinkClick('/dashboard-admin')}>
                    DASHBOARD
                </MenuItem>
                <MenuItem href="/Agenda" className={styles.link} activeLink={activeLink} onClick={() => handleLinkClick('/Agenda')}>
                    AGENDA
                </MenuItem>
                <MenuItem href="/Metas"  className={styles.link} activeLink={activeLink} onClick={() => handleLinkClick('/Metas')}>
                    METAS
                </MenuItem>
                <MenuItem href="/Publicacoes" className={styles.link} activeLink={activeLink} onClick={() => handleLinkClick('/Publicacoes')}>
                    PUBLICAÇÕES
                </MenuItem>
                <MenuItem href="/Influenciadores" className={styles.link}  activeLink={activeLink} onClick={() => handleLinkClick('/Influenciadores')}>
                    INFLUENCIADORES
                </MenuItem>
                <MenuItem href="/Projetos" className={styles.link}  activeLink={activeLink} onClick={() => handleLinkClick('/Projetos')}>
                    CADASTRAR
                </MenuItem>
              
            </nav>
        </div>
    );
}
    