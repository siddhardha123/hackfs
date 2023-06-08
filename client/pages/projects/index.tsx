
import dynamic from "next/dynamic";
import supabase from "@/utils/supabase";
import Navbar from '../../components/shared/Navbar'
import ProjCard from '../../components/shared/ProjCard'

export const getServerSideProps = async () => {
   const { data: Projects, error } = await supabase
   .from('Projects')
   .select('*')

  return {
    props: {
      Projects,
    },
  };
};

const projects = ({ Projects } : any) => {
  return (
    <>
    <Navbar/>
    <div className="mt-10 text-5xl text-white text-center">Explore</div>
    <div className="grid md:ml-10 grid-cols-1 md:grid-cols-3 gap-4  mt-10 px-10">
{Projects.map((card, index) => (
 <ProjCard id={card.id} name={card.name} tagline={card.tagline} profile={card.profile} likes={card.likes}/>
))}
</div> 
 </>
  );
};

export default dynamic(() => Promise.resolve(projects), { ssr: false });