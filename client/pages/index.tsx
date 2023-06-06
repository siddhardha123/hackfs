import React from 'react'
import NavBar from '../components/shared/Navbar'
const Home = () => {
  return (
    <>
        <NavBar />
        <section>
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-white md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-sm font-medium">
                        Built for HackFS
                    </h1>
                    <h2 className="text-10xl  font-extrabold mx-auto md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffff] to-[#807e7e]">
                       Ship products <span>🚀</span> and leave the community growth to us  
                    </h2>
                    <p className="max-w-2xl mx-auto">
                       
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <a href="/dashboard" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Launch Dapp 
                        </a>
                        <a href="/Explore" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Explore
                        </a>
                       
                    </div>
                    
                </div>
              
            </div>
        </section>
  
    </>
  )
}

export default Home
