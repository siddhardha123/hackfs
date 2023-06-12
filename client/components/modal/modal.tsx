import { useState,useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi'
import supabase from "@/utils/supabase";
type ModalProps = {
  onConfirm: (value: any) => void;
};

const Modal: React.FC<ModalProps> = ({ onConfirm ,onClose }) => {
  const [name,setName] = useState('')
  const { address } = useAccount()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const matchAddress = async(add : any)=>{
    let { data: projname, error } = await supabase
   .from('Projects')
   .select('name')
   .eq('address',add)
    
   setName(projname[0]?.name ?? "");
    console.log(projname)
  }
  useEffect(()=>{
    if(address){
      matchAddress(address)   
    }
  },[address])

  const handleSubmit = () => {
    onConfirm(address);
  };
  const handleOverlayClick = () => {
    onClose();
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl mb-4 text-black">connect account which is assosiated with the project</h2>
        <ConnectButton/>
        
        <p className="text-black"> {name == '' ? "No project found" : name}</p>
       {name != '' && <button className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none" onClick={handleSubmit}>continue</button> }
      </div>
    </div>
  );
};

export default Modal;
