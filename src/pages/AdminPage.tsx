import EditPanel from '../components/admin/EditPanel';
import FileInput from '../components/admin/FileInput';
import LoginForm from '../components/LoginForm';
import { useAppSelector } from '../hooks/redux';

const AdminPage = () => {
    const { user } = useAppSelector((state) => state.auth);

    if (!user) return <LoginForm />;

    return (
        <div className="container-fluid mt-5">
            <h4>Отправить файл с данными</h4>
            <FileInput />

            <h4 className="mt-5">Отредактировать данные</h4>
            <EditPanel />
        </div>
    );
};

export default AdminPage;
