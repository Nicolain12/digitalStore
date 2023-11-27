import NavBar from '../../components/navBar/navBar'
import { Outlet } from 'react-router-dom'

function layout(props) {
    return (
        <div className='App'>
            <NavBar/>
            <Outlet/>
        </div>
    );
}

export default layout;