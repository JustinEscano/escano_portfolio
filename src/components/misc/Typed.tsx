import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedWrapperProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    className?: string;
}

const TypedWrapper: React.FC<TypedWrapperProps> = ({
    strings,
    typeSpeed = 60,
    backSpeed = 30,
    loop = true,
    className = '',
}) => {
    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const typed = new Typed(el.current!, {
            strings,
            typeSpeed,
            backSpeed,
            loop,
        });
        return () => typed.destroy();
    }, [strings, typeSpeed, backSpeed, loop]);

    return <span ref={el} className={className} />;
};

export default TypedWrapper;