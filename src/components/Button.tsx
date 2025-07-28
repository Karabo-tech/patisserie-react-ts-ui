import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '', variant = 'primary' }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

