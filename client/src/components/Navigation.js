import {Link} from 'react-router-dom';

const Navigation = ({userInfo}) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">{userInfo.nickname}의 Profile</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;