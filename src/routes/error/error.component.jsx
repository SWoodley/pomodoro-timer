import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div>
            <h2>Error 404. Page not found!</h2>
            <Link to='/'>Click me!</Link>
        </div>
    )
}