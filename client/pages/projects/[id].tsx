import React from 'react'
import supabase from "@/utils/supabase";
import dynamic from "next/dynamic";
import Project from '../../components/shared/Project'
  export const getServerSideProps = async (context : any) => {
    const id = context.params.id;
    const { data: projdata, error } = await supabase
    .from('Projects')
    .select('*')
    .eq('id', id);
  
  
  
    return {
      props: {
        projdata
      },
    };
  };
  
  const myData = ({ projdata } : any) => {
    return (
      <>
        <Project projdata={projdata[0]}/>
      </>
    );
  };
  
  export default myData;
  