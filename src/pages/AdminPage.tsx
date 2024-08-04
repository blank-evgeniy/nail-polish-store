import LoginForm from '../components/LoginForm';
import { useAppSelector } from '../hooks/redux';

const AdminPage = () => {
    const { user } = useAppSelector((state) => state.auth);

    if (!user) return <LoginForm />;

    return <div>admin is auth</div>;
};

export default AdminPage;
