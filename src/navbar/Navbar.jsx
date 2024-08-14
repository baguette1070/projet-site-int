import reactLogo from '../assets/react.svg';

function Navbar() {
    return (
        <>
        <div>
            <div className='flex flex-row'>
                <div className='pt-10 pl-10'>
                    <img src={reactLogo} alt="" />
                </div>
                <h1 className=' translate-y-60 text-9xl'> Giacca</h1>
                <div className='translate-y-96 -translate-x-72 w-1/4'>
                    <button className='border p-4'>Commencer</button>
                    <button className='border p-4'>Commencer</button>
                </div>

                <div className='bg-gray-200 w-1/2 h-screen ml-auto'>
                    <nav>
                        <ul className='flex justify-around'>
                            <li className='pt-10'><a href="">Home</a></li>
                            <li className='pt-10'><a href="">Contact</a></li>
                            <li className='pt-10'><a href="">About</a></li>
                            <li className='pt-10'><a href="">Services</a></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>      
        </>
    );
}

export default Navbar;
