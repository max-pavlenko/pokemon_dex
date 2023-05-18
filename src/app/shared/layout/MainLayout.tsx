import {FC, PropsWithChildren} from 'react'
import Link from "next/link";
import {Provider} from "react-redux";
import {store} from "@/store/store";

type Props = {};
const PADDING_Y = '1.5rem';

const MainLayout: FC<PropsWithChildren<Props>> = ({children}) => {

    return (
        <Provider store={store}>
            <div style={{minHeight: `calc(100vh - ${PADDING_Y})`}} className='px-4 my-3 md:px-12 lg:px-32'>
                <nav className='w-full mb-8'>
                    <h1 className='text-2xl text-center capitalize px-2 py-3 w-[50vw] mx-auto outline-green-600 outline outline-3 rounded-md'>
                        <Link href='/'>pokedex</Link>
                    </h1>
                </nav>
                <main>
                    {children}
                </main>
            </div>
        </Provider>
    );
};

export default MainLayout;
