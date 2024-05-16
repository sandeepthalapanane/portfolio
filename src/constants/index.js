import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  nitk,
  cluboard,
  cash_flow,
  freadom,
  bank,
  gdsc,
  iris,
  ecell,
  genesis,
  graphql,
  portfolio,
  publiclab,
  zulip,
  anna,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust, cancer, reco
} from "../assets";

import { Matlab } from '../components/icons';

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGoogle,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiSqlite,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiOpencv,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiCsharp,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn, 
  SiPandas,
  SiVisualstudio,
  SiGamedeveloper,
  SiGoogle,
  SiRos,
  SiGatsby,
  SiPointy,
  SiDropbox,
  SiUnity, 
  SiDocker,
  SiLinux,
  SiGrafana,
  SiGnubash,
  SiRaspberrypi,
  SiMicrosoftexcel,
  SiRakuten,
  SiMojangstudios,
  SiMaas,
  SiMapbox,
  SiMicrosoftazure,
  SiAmazonaws,
  SiAmazons3
} from "react-icons/si";

import {
  FaHardHat
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";


import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1sTKYgZfLFkEzR8MVsoZlVyw90Unov4gN/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/sandeep-thalapanane/";


export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  {
    id: "extraCurricular",
    title: "Research Experience",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "University of Maryland, College Park, USA",
    degree: "Master of Engineering",
    duration: "August 2022 - May 2024",
    content1: "Branch: Robotics",
    content2: "CGPA: 3.96/4",
  },
  {
    id: "education-2",
    icon: anna,
    title: "CEG, Anna University, Chennai",
    degree: "Bachelor of Engineering",
    duration: "August 2016 - October 2020",
    content1: "Branch: Mechanical",
    content2: "CGPA: 8.09/10",
 },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCsharp, 
        name: "C#",
      },
      {
        id: "pl-4", // Unique identifier for Matlab
        icon: SiVite, // Use the imported Matlab icon
        name: "Matlab", // Correct name to "Matlab"
     },
    
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "fl-1",
        icon: SiOpencv, // OpenCV icon
        name: "OpenCV",
      },
      {
        id: "fl-2",
        icon: SiPytorch, // PyTorch icon
        name: "PyTorch",
      },
      {
        id: "fl-3",
        icon: SiTensorflow, // TensorFlow icon
        name: "TensorFlow",
      },
      {
        id: "fl-4",
        icon: SiKeras, // Keras icon
        name: "Keras",
      },
      {
        id: "fl-5",
        icon: SiScikitlearn, // scikit-learn icon
        name: "scikit-learn",
      },

      {
        id: "fl-6",
        icon: SiPandas, // Pandas icon
        name: "Pandas",
      },
       {
        id: "fl-7",
        icon: SiPytorch, // Placeholder icon for Pytorch3D
        name: "Pytorch3D",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiUnity,
        name: "Unity",
      },
      {
        id: "t-2",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-8",
        icon: SiRos,
        name: "ROS 1 & 2",
      },
      {
        id: "t-9",
        icon: SiLinux,
        name: "Linux",
      },
      {
        id: "t-10",
        icon: SiGrafana,
        name: "Grafana",
      },
      {
        id: "t-11",
        icon: SiRaspberrypi,
        name: "Raspberry Pi",
      },
      {
        id: "t-13",
        icon: SiGnubash,
        name: "Bash",
      },
      {
        id: "t-12",
        icon: SiMicrosoftexcel,
        name: "Microsoft Excel",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-7",
        icon: SiVisualstudio,
        name: "Visual Studio",
      },
      {
        id: "t-14",
        icon: SiGatsby,
        name: "Gazebo",
      },
      {
        id: "t-15",
        icon: SiRakuten,
        name: "Rviz",
      },
      {
        id: "t-16",
        icon: SiMicrosoftazure,
        name: "Azure Machine learning",
      },
      {
        id: "t-17",
        icon: SiAmazonaws,
        name: "AWS Sagemaker",
      },
    ],
  },
];


export const experiences = [
  {
    organisation: "TRC Robotics",
    logo: oracle,
    link: "",
    positions: [
      {
        title: "Robotics Software Engineer Intern",
        duration: "May 2023 - Aug 2023",
        content: [
          {
            text: "Spearheaded the development of a user-friendly Grafana plug-in to control the robot and enhanced it by incorporating ROS lib JavaScript & Node JS for the robot to perform tasks & simulations on a web page, resulting in a 40% reduction in manual task time.",
            link: "",
          },
          {
            text: "Architected & customized Docker containers to integrate the Grafana plug-in enhancing user experience & streamlining workflows.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Flextronics",
    logo: iris,
    link: "https://flex.com/",
    positions: [
      {
        title: "Senior Analyst - Procurement",
        duration: "Apr 2021 - Aug 2022",
        content: [
          {
            text: "Resolved backlog of $3 million worth of purchase orders during COVID critical times by strategically sourcing shipping partners.",
            link: "",
          },
          {
            text: "Streamlined coordination and collaboration with vendors and suppliers from all parts of the world through swift & constant communication, and achieved inventory target of $1 million.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [

];

export const projects = [
  {
    id: "project-1",
    title: "3D Inspection Using NeuS",
    github: "https://github.com/sandeepthalapanane/3D-Inspection-Using-NeuS",
    link: "",
    image: comicify_ai,
    content:
      "Formulated a 3D NeRF inspection pipeline based on HF-NeuS (SDF) & diffusion-based model for 3D reconstruction of surface and crack segmentation respectively, improved HF-NeuS with two additional losses to reduce training time.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiPytorch,
        name: "Pytorch3d"
      },
      {
        id: "icon-3",
        icon: SiPytorch,
        name: "Pytorch"
      },
      {
        id: "icon-4",
        icon: SiOpencv,
        name: "OpenCV"
      },
    ],
  },
  {
    id: "project-10",
    title: "Brain Cancer Dataset Augmentation",
    github: "https://github.com/sandeepthalapanane/Brain-Cancer-Dataset-Augmentation",
    link: "",
    image: cancer,
    content:
      "Developed a Generative Adversarial Network (GAN) based AI model to generate synthetic brain cancer images, to expand training datasets, and used Likeness Score with Distance-based Separability Index to assess generated image quality.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiTensorflow,
        name: "TensorFlow"
      },
      {
        id: "icon-3",
        icon: SiKeras,
        name: "Keras"
      },
    ],
  },
  {
    id: "project-9",
    title: "Personalized Movie Recommendation System",
    github: "https://github.com/sandeepthalapanane/Personalized-Movie-Recommendation-System",
    link: "",
    image: reco,
    content:
      "Engineered and deployed a production movie recommender using MLOps & a CI/CD pipeline on AWS. Trained an LLM recommendation model with collaborative & content-based filtering for personalized suggestions.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiAmazonaws,
        name: "AWS"
      },
      {
        id: "icon-3",
        icon: SiAmazons3,
        name: "S3"
      },
    ],
  },
  {
    id: "project-2",
    title: "Robot Motion Planning in Learned Latent Spaces",
    github: "https://github.com/sandeepthalapanane/Underwater-Image-Restoration",
    link: "",
    image: greentrust,
    content:
      "Implemented Learned Latent Rapidly-Exploring Random Trees to expertly address complex robot motion planning challenges by mapping to a lower-dimensional latent space by using a neural net, resulting in faster solving of high DOF motion planning.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiTensorflow,
        name: "Tensorflow"
      },
      {
        id: "icon-3",
        icon: SiMapbox,
        name: "Mujoco"
      },
    ],
  },
  {
    id: "project-3",
    title: "Underwater image restoration",
    github: "https://github.com/sandeepthalapanane/Underwater-Image-Restoration",
    link: "",
    image: chargeswap,
    content:
      "Enhanced underwater image visibility by restoring true colors using an innovative image processing pipeline. Leveraged a physics based approach and a deep learning neural network model to estimate depth and counteract light scattering caused by water.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiTensorflow,
        name: "Tensorflow"
      },
      {
        id: "icon-3",
        icon: SiOpencv,
        name: "OpenCV"
      },
      {
        id: "icon-4",
        icon: SiScikitlearn,
        name: "scikit-image"
      },
      {
        id: "icon-5",
        icon: SiPandas,
        name: "Pandas"
      },
    ],
  },
  {
    id: "project-4",
    title: "Virtual car driving using hand gestures",
    github: "https://github.com/sandeepthalapanane/Virtual-car-driving-system",
    link: "",
    image: placeicon,
    content:
      "Inspired by NVIDIA’s virtual driving initiative, constructed a remote-controlled automotive system by training a machine learning model & translating hand gestures into driving commands for a robot",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiTensorflow,
        name: "Tensorflow"
      },
      {
        id: "icon-3",
        icon: SiOpencv,
        name: "OpenCV"
      },
      {
        id: "icon-4",
        icon: SiRos,
        name: "ROS 2"
      },
      {
        id: "icon-5",
        icon: SiGoogle,
        name: "Google's Mediapipe"
      },
    ],
  },
  {
    id: "project-5",
    title: "Turtle Bot Path planning using A*",
    github: "https://github.com/sandeepthalapanane/Implementation-of-A-star-algorithm-for-path-planning-of-Turtlebot-in-an-obstacle-environment",
    link: "",
    image: huntly,
    content:
      "Deployed A* algorithm, SLAM, and object detection into the TurtleBot using camera and lidar sensor and leveraging the ROS2 framework, Gazebo, and RViz to simulate robot movement in dynamic environments efficiently.",
    stack: [
      {
        id: "icon-1",
        icon: SiRos,
        name: "ROS 2"
      },
      {
        id: "icon-2",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-3",
        icon: SiGatsby,
        name: "Gazebo"
      },
      {
        id: "icon-3",
        icon: SiRakuten,
        name: "RViz"
      },
    ],
  },
  {
    id: "project-6",
    title: "Wall following Algorithm",
    github: "https://github.com/sandeepthalapanane/Implementing-the-Wall-following-Algorithm-to-drive-a-robot-to-a-goal",
    link: "",
    image: recruitment,
    content:
      "Devised wall-following algorithms to autonomously guide robots through complex mazes, ensuring continuous navigation.",
    stack: [
      {
        id: "icon-1",
        icon: SiCplusplus,
        name: "C++"
      },
      {
        id: "icon-2",
        icon: SiPointy,
        name: "Pointers"
      },
      {
        id: "icon-3",
        icon: SiDropbox,
        name: "Doxygen"
      },
    ],
  },
  {
    id: "project-7",
    title: "High-speed camera mobile manipulator",
    github: "https://github.com/sandeepthalapanane/Modeling-of-a-High-speed-camera-mobile-manipulator",
    link: "",
    image: cluboard,
    content:
      "Engineered a High-speed camera robot arm model and formulated the Kinematics & dynamics of the robot links & created a ROS package & simulated in a custom-designed Gazebo environment & visualized the camera attached at the end effector using RViz.",
      stack: [
        {
          id: "icon-1",
          icon: SiRos,
          name: "ROS"
        },
        {
          id: "icon-2",
          icon: SiPython,
          name: "Python"
        },
        {
          id: "icon-3",
          icon: SiGatsby,
          name: "Gazebo"
        },
        {
          id: "icon-3",
          icon: SiRakuten,
          name: "RViz"
        },
      ],
  },
  {
    id: "project-8",
    title: "Designing LQR and LQG controller for a crane system",
    github: "https://github.com/sandeepthalapanane/LQR-and-LQG-Controller-for-a-Crane-system",
    link: "",
    image: cash_flow,
    content:
      "Derived system dynamics using Lagrangian method, implemented LQR control for linearized system, and designed LQG controller with optimal Luenberger observer for nonlinear system.",
    stack: [
      {
        id: "icon-1",
        icon: SiVite,
        name: "Matlab"
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Gamma lab - UMD",
    title: "Driving style conditioned for autonomous vehicles",
    duration: "Aug 2023 - Present",
    content: [
      {
        text: "Designed a novel Virtual Reality driving simulator using Unity, SUMO, and RoadRunner. (Working for NeurIPS conference)",
        link: "",
      },
      {
        text: "Reduced immersive driving simulator cost by 98.8% to make it accessible for $2,500, enabling cost-effective driving research.",
        link: "",
      },
      {
        text: "Achieved enhanced path planning for AVs & and increased safety using LSTM  and QCNet to predict driving styles & nearby vehicle trajectories respectively.",
        link: "",
      },
      
    ],
    logo: nitk,
  },
  {
    organisation: "Multiscale Measurements lab - UMD",
    title: "Research Assistant",
    duration: "Aug 2023 - Present",
    content: [
      {
        text: "Executed 3D digital image correlation for stress analysis by doing 3D reconstruction using a single camera and robot arm.",
        link: "",
      },
      {
        text: "Conducted research to identify and analyze speckle patterns using a microscopic camera lens for biomechanical 3D DIC purposes.",
        link: "",
      },
    ],
    logo: nitk,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/sandeep-thalapanane/",
  },
  // {
  //   id: "social-media-2",
  //   icon: AiFillGithub,
  //   link: "https://github.com/sandeepthalapanane",
  // },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:sandeept@umd.edu",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/sandeep_t_/",
  },
];

export const aboutMe = {
    name: "Sandeep Thalapanane",
    tagLine: "Robotics Graduate Student at University of Maryland, College Park | Graduate Research Assistant at University of Maryland ",
    intro: "A robotics enthusiast, leveraging expertise in computer vision and machine learning to engineer groundbreaking solutions for tomorrow's autonomous systems."
}
