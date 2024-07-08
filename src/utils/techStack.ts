import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaPython } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { TbBrandNodejs } from "react-icons/tb";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";

export const techStacks = [
    { name: "HTML", fluency: "High", Icon: FaHtml5, color: "orange-500", },
    { name: "CSS", fluency: "High", Icon: FaCss3, color: "blue-500", },
    { name: "JavaScript", fluency: "High", Icon: AiOutlineJavaScript, color: "yellow-500", },
    { name: "React JS", fluency: "High", Icon: FaReact, color: "teal-500", },
    { name: "Node JS", fluency: "High", Icon: TbBrandNodejs, color: "green-500", },
    { name: "Next JS", fluency: "High", Icon: SiNextdotjs, color: "white", },
    { name: "Express JS", fluency: "High", Icon: SiExpress, color: "white", },
    { name: "Mongo DB", fluency: "High", Icon: SiMongodb, color: "green-500", },
    { name: "Python", fluency: "High", Icon: FaPython, color: "blue-500", },
];