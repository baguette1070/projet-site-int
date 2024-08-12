
function Navbar(){

    return(<>
        <div className="flex justify-center my-10">
            <nav className="w-3/4 border-2 p-4 bg-vert border-vert rounded-3xl h-1/2 ">
                <ul className="flex justify-evenly">

                    <li className="text-2xl transform transition-transform duration-200 hover:scale-125 hover:underline hover:text-bleuFonce">
                        <a href="#">Menu</a>
                    </li>
                    <li className="text-2xl transform transition-transform duration-200 hover:scale-125 hover:underline hover:text-bleuFonce">
                        <a href="#">Contact</a>
                    </li>
                    <li className="text-2xl transform transition-transform duration-200 hover:scale-125 hover:underline hover:text-bleuFonce">
                        <a href="#">Contact</a>
                    </li>
                    <li className="text-2xl transform transition-transform duration-200 hover:scale-125 hover:underline hover:text-bleuFonce">
                        <a href="#">Contact</a>
                    </li>

                </ul>
            </nav>
        </div>
        </>);

}

export default Navbar