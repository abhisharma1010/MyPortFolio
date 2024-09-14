import React from "react";
import Projectcard from "./Projectcard";
import projectdata from "../projectdata";
function Projectcards(){
   return(
    <div className=" mt-[7%] flex flex-row justify-center items-center flex-wrap gap-[30px]   ">
        {
            projectdata.map((data) => (<Projectcard projectdetail={data}/>))
        }
    </div>
   )
}
export default Projectcards;