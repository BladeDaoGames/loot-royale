interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

export const Button = ({ onClick, children, className }: ButtonProps) => {
    const buttonClass = `text-4xl button-hover-scale button-click-shrink ${className || ''}`;
    return (
        <button onClick={onClick} className={buttonClass}>
            {children}
        </button>
    )
}

export default Button;
