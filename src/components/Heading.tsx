import React from 'react';

interface HeadingProps {
    children: string | undefined;
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
    return (
        <h1 className={`text-center ${className}`}>
            {children ? children : <span className="placeholder col-2"></span>}
        </h1>
    );
};

export default Heading;
