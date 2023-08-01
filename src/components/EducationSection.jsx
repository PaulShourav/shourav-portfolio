import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaEye, FaGithub, FaGraduationCap } from "react-icons/fa6";
import Heading from './Heading';

const EducationSection = ({sectionId}) => {
    return (
        <section className='my-container mx-auto mb-24' id='educationSection'>
            {/* <Heading name={'Education'}/> */}
            <VerticalTimeline lineColor='#14A850'>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff',marginTop:'-30px' }}
                    icon={<FaGraduationCap />}

                />
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
                    position='left'
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">BSc in Computer Science and Engineering</h3>
                    <h3 className="vertical-timeline-element-title">University of Science and Technology Chitthagong</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="2010 - 2011"
                    position='right'
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">MSc in Comuter Science</h3>
                    
                    <p>
                        Jahangirnagar University
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff',marginTop:"60px", width:'30px',height:'30px',}}
                    // icon={<FaGraduationCap />}
                    className='-mt-[60px] -me-[30px] '

                />
            </VerticalTimeline>

        </section >
    );
};

export default EducationSection;