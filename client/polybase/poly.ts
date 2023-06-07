
import { Polybase } from '@polybase/client'



const db = new Polybase({
  defaultNamespace: "pk/0xa384e300ec9891269d51fd4108a50243a32fcc7536dc5129d417061e53b97e180567e49316d299d6e95bd7a2b314dce4d72c763f230ea2deec703ca5a79a7daa/ShipLit",
});


const createProject = async({id,name,profile,tagline,description,link,twitter,likes}: any) => {
  const collectionReference = db.collection("Project");
  const recordData = await collectionReference.create([
    id,
    name,
    profile,
    tagline,
    description,
    link,
    twitter,
    likes
  ]);

  return recordData;
}
export default createProject;


// id : string;
// name : string;
// profile : string;
// tagline : string;
// description : string;
// link : string; 
// twitter : string;
// announcements : announcement[];
// meetings : meeting[];
// likes : number;