interface SocialLinkProps {
    icon: React.ReactNode;
    label: string;
    className?: string;
}

export const SocialLink = ({ icon, label, className }: SocialLinkProps) => {
    return (
        <div className={`flex gap-1 justify-center items-center ${className}`}>
            {icon}
            <div className="-mb-1">{label}</div>
        </div>
    )
}

export default SocialLink;