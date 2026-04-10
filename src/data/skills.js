import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPalette,
  FaReact,
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiMongodb, SiTailwindcss } from 'react-icons/si'

export const skills = [
  { name: 'Node.js', icon: FaNodeJs, className: 'skill--green' },
  { name: 'CSS3', icon: FaCss3Alt, className: 'skill--cyan' },
  { name: 'JavaScript', icon: IoLogoJavascript, className: 'skill--yellow' },
  { name: 'React', icon: FaReact, className: 'skill--blue' },
  { name: 'Photoshop', icon: FaPalette, className: 'skill--indigo' },
  { name: 'Figma', icon: FaFigma, className: 'skill--pink' },
  { name: 'Git', icon: FaGitAlt, className: 'skill--orange' },
  { name: 'Tailwind', icon: SiTailwindcss, className: 'skill--sky' },
  { name: 'MongoDB', icon: SiMongodb, className: 'skill--emerald' },
  { name: 'HTML5', icon: FaHtml5, className: 'skill--red' },
]
