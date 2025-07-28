import React from 'react';
import styles from './Card.module.css';
import Button from './Button';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick, className = '' }) => {
  return (
    <div className={`${styles.card} ${className}`} onClick={onClick}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Button text="Order Today" variant="secondary" />
    </div>
  );
};

