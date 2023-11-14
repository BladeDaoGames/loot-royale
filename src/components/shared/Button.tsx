interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

export const Button = ({ onClick, children, className }: ButtonProps) => {
    const buttonClass = `bg-beige-100 text-4xl text-white button-hover-scale button-click-shrink ${className || ''}`;
    return (
        <button onClick={onClick} className={buttonClass}>
            {children}
        </button>
    )
}

export default Button;
