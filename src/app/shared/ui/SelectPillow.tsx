import {ComponentProps, FC, PropsWithChildren} from 'react'

type Props = {} & ComponentProps<'button'>;

const SelectPillow: FC<PropsWithChildren<Props>> = ({children, className, ...props}) => {

    return (
        <button className={`flex text-[14px] text-black bg-green-300 rounded-md capitalize px-3 py-1 ${className}`} {...props}>
            {children}
        </button>
    );
};

export default SelectPillow;
