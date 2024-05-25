import React from 'react';
import { FaNodeJs, FaReact, FaPython, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiNestjs, SiDjango, SiSpringboot, SiPostgresql, SiFirebase, SiMysql, SiFlask, SiJavascript } from 'react-icons/si';

const skills = [
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs size={32} /> },
      { name: 'Next.js', icon: <SiNextdotjs size={32} /> },
      { name: 'Nest.js', icon: <SiNestjs size={32} /> },
      { name: 'Django', icon: <SiDjango size={32} /> },
      { name: 'Spring Boot', icon: <SiSpringboot size={32} /> },
      { name: 'Flask', icon: <SiFlask size={32} /> },
      { name: 'React', icon: <FaReact size={32}/> }
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql size={32} /> },
      { name: 'Firestore', icon: <SiFirebase size={32} /> },
      { name: 'MySQL', icon: <SiMysql size={32} /> },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <FaPython size={32} /> },
      { name: 'Java', icon: <FaJava size={32} /> },
      { name: 'JavaScript', icon: <SiJavascript size={32} /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      {skills.map((category) => (
        <div key={category.category} className="mb-8">
          <h2 className="text-2xl mb-4">{category.category}</h2>
          <div className="flex flex-wrap">
            {category.skills.map((skill) => (
              <div key={skill.name} className="flex items-center bg-white-800 border border-gray-800 p-4 m-2 rounded-lg shadow-md  hover:scale-105">
                {skill.icon}
                <span className="ml-2 text-gray-800">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <h2 className="text-2xl mb-4">Cloud Services</h2>
          <div className="flex flex-wrap">
              <div className="flex items-center bg-white-800 border border-gray-800 p-4 m-2 rounded-lg shadow-md  hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#1976d2" d="M38.193,18.359c-0.771-2.753-2.319-5.177-4.397-7.03l-4.598,4.598	c1.677,1.365,2.808,3.374,3.014,5.648v1.508c0.026,0,0.05-0.008,0.076-0.008c2.322,0,4.212,1.89,4.212,4.212S34.61,31.5,32.288,31.5	c-0.026,0-0.05-0.007-0.076-0.008V31.5h-6.666H24V38h8.212v-0.004c0.026,0,0.05,0.004,0.076,0.004C38.195,38,43,33.194,43,27.288	C43,23.563,41.086,20.279,38.193,18.359z"></path><path fill="#ffe082" d="M19.56,25.59l4.72-4.72c-0.004-0.005-0.008-0.009-0.011-0.013l-4.717,4.717	C19.554,25.579,19.557,25.584,19.56,25.59z" opacity=".5"></path><path fill="#90caf9" d="M19.56,25.59l4.72-4.72c-0.004-0.005-0.008-0.009-0.011-0.013l-4.717,4.717	C19.554,25.579,19.557,25.584,19.56,25.59z" opacity=".5"></path><path fill="#ff3d00" d="M24,7.576c-8.133,0-14.75,6.617-14.75,14.75c0,0.233,0.024,0.46,0.035,0.69h6.5	c-0.019-0.228-0.035-0.457-0.035-0.69c0-4.549,3.701-8.25,8.25-8.25c1.969,0,3.778,0.696,5.198,1.851l4.598-4.598	C31.188,9.003,27.761,7.576,24,7.576z"></path><path fill="#90caf9" d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373	l-4.71,4.71C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z" opacity=".5"></path><path fill="#4caf50" d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373l-4.71,4.71	C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z"></path><path fill="#ffc107" d="M11.5,27.29c0-2.32,1.89-4.21,4.21-4.21c1.703,0,3.178,1.023,3.841,2.494l4.717-4.717	c-1.961-2.602-5.065-4.277-8.559-4.277C9.81,16.58,5,21.38,5,27.29c0,3.491,1.691,6.59,4.288,8.547l4.71-4.71	C12.53,30.469,11.5,28.999,11.5,27.29z"></path>
              </svg>
                <span className="ml-2 text-gray-800">Google Cloud Platform</span>
              </div>
          </div>
    </div>
  );
};

export default Skills;
