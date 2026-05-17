import Header from "@/components/common/Haeder";
import { Outlet } from 'react-router';
import Footer from '@/components/common/Footer';

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Main