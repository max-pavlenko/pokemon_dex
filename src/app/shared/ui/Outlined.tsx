import React, {FC, PropsWithChildren} from 'react'
import IntrinsicElements = React.JSX.IntrinsicElements;

type Props = {
    element?: keyof IntrinsicElements;
} & PropsWithChildren<IntrinsicElements[keyof IntrinsicElements]>;

const Outlined: FC<Props> = ({children, element = 'div', className, ...props}) => {
    const Element = element;

    return ( /*@ts-ignore - necessary evil*/
        <Element className={`border-green-600 border-solid border-2 p-1 rounded-md ${className}`} {...props}>
            {children}
        </Element>
    );
};

export default Outlined;
