import React,{useState,useEffect} from 'react'
import NavBar from '../components/shared/Navbar'
import Modal from '../components/modal/modal';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const handleConfirm = (value: string) => {
        // Simulate API call to fetch project value
        const fetchedValue = 'example-project';
    
        if (value === fetchedValue) {
          console.log('Access granted to dashboard page');
          // Redirect or perform any other action
        } else {
          console.log('No project found, register');
          // Show appropriate message or perform any other action
        }
      };
      const handleCloseModal = () => {
        setShowModal(false);
      };

     
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
                        <button
                         className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
                         onClick={() => setShowModal(true)}>
                            Launch Dapp 
                        </button>
                        <a href="/projects" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Explore
                        </a>
                        {showModal && <Modal onConfirm={handleConfirm} onClose={handleCloseModal}/>}
                   
                    </div>

                    
                </div>
              
            </div>
        </section>
  
    </>
  )
}

export default Home
