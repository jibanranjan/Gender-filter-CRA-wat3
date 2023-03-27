
import './Header.css'


function Header(){
    return(
        <div className='navbar'>
            <ul className='navConataints'>
                <li><a className='navLinks' href="" >Home</a></li>
                <li><a className='navLinks' href=" " >Products</a></li>
                <li><a className='navLinks' href=" " >Users</a></li>
                <li><a className='navLinks' href=" " >Contact</a></li>
            </ul>
        </div>
    )
}

export default Header;