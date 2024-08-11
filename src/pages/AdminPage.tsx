import AdminHeader from '../components/admin/AdminHeader';
import EditPanel from '../components/admin/EditPanel';
import FileInput from '../components/admin/FileInput';
import LoginForm from '../components/admin/LoginForm';
import { useAppSelector } from '../hooks/redux';

//Админка с авторизацией
//Данные админа храним в сторе

const AdminPage = () => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <>
            <AdminHeader />

            <main>
                {user ? (
                    <div className="container-fluid mt-5">
                        <h4>Отправить файл с данными</h4>
                        <FileInput />

                        <h4 className="mt-5">Отредактировать данные</h4>
                        <EditPanel />
                    </div>
                ) : (
                    <LoginForm />
                )}
            </main>
        </>
    );
};

export default AdminPage;
