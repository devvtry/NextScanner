import Link from 'next/link';
import Imges from 'next/image';


const Navbar=()=> {
    return (
        <nav>
            <div className= 'logo'>
                <Imges src='/tc.jpeg'  width={128} height={77}/>
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/services'><a>Services</a></Link>
            <Link href='/about'><a>About us</a></Link>
            <Link href='/contactus'><a>Contact us</a></Link>
            <Link href='/career'><a>Career</a></Link>
            <Link href='/blogs'><a>Blog</a></Link>
        </nav>
    )
}

export default Navbar
