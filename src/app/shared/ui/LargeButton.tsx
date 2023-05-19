import {ComponentProps, FC, PropsWithChildren} from 'react';

type Props = {} & ComponentProps<'button'>;

const LargeButton: FC<PropsWithChildren<Props>> = ({children, className, ...props}) => {
    return (
        <button className={`bg-green-700 justify-stretch disabled:bg-gray-400 disabled:cursor-not-allowed transition-[background-color] w-full px-6 py-3 text-xl font-[600] text-white rounded-md ${className}`} {...props}>
            {children}
        </button>
    );
};

export default LargeButton;
