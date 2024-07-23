import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { Suspense } from 'react';
import Loading from './components/Loading';

function App() {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
}

export default App;
