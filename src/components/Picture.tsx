import React, { useState } from 'react';

interface PictureProps {
    src: string;
    alt?: string;
}

const Picture: React.FC<PictureProps> = ({ src, alt = '' }) => {
    const [imageNotFound, setImageNotFound] = useState(false);

    const imageErrorHandler = () => {
        setImageNotFound(true);
        console.log(src);
    };

    return (
        <>
            {imageNotFound ? (
                <div className="bg-secondary container-fluid">
                    <div className="py-5 text-primary text-center">
                        Изображение не найдено
                    </div>
                </div>
            ) : (
                <img
                    src={`/categories/${src}`}
                    onError={imageErrorHandler}
                    alt={alt}
                    className="rounded-top-4 img-fluid"
                ></img>
            )}
        </>
    );
};

export default Picture;
