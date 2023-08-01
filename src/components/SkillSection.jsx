import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import Heading from "./Heading";



const SkillSection = ({sectionId}) => {
    const [skills,setSkills]=useState([])
    useEffect(()=>{
        fetch('skillsData.json')
        .then(res=>res.json())
        .then(data=>setSkills(data))
    },[])
  
    return (
        <section className="my-container mx-auto mb-28" id="skillSection">
            <Heading name={'Skills'}/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-between gap-8'>
                {
                    skills.map(skill=><SkillCard key={skill._id} skill={skill}></SkillCard>
                        
                        )
                }
            </div>
        </section>
    );
};

export default SkillSection;