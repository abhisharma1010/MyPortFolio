import React from "react";
import Educard from "./Educard";
import edudata from "../edudata";

function Educards(){
    return (
        <div className="mt-[7%] flex justify-center items-center flex-wrap gap-[50px] ">
           {
            edudata.map((data) => (<Educard edudetail={data}/>))
           }
        </div>
    );
}
export default Educards;