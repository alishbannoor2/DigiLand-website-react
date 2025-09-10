import { useParams } from 'react-router-dom';

function User() {
    const { username } = useParams();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-gray-800">
                Welcome, {username}! This is your profile page.
            </h2>
        </div>
    );
}

export default User;