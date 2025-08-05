import React, { useState, useEffect } from 'react';
import JavascriptLogo from '../assets/hero/JavascriptLogo';
import ReactLogo from '../assets/hero/ReactLogo';
import Html5Logo from '../assets/hero/Html5Logo';
import Css3Logo from '../assets/hero/Css3Logo';
import PhpLogo from '../assets/hero/PhpLogo';
import LaravelLogo from '../assets/hero/LaravelLogo';
import SassLogo from '../assets/hero/SassLogo';
import TailwindcssLogo from '../assets/hero/TailwindcssLogo';
import NodejsLogo from '../assets/hero/NodejsLogo';
import FirebaseLogo from '../assets/hero/FirebaseLogo';
import WordpressLogo from '../assets/hero/WordpressLogo';
import PuzzleIcon from '../assets/hero/PuzzleIcon';
import CommunicationIcon from '../assets/hero/CommunicationIcon';
import TeamIcon from '../assets/hero/TeamIcon';
import TimeIcon from '../assets/hero/TimeIcon';
import AdaptabilityIcon from '../assets/hero/AdaptabilityIcon';
import DetailIcon from '../assets/hero/DetailIcon';
import MusicIcon from '../assets/hero/MusicIcon';
import GuitarIcon from '../assets/hero/GuitarIcon';
import PaintIcon from '../assets/hero/PaintIcon';

const SkillModal = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  const technicalSkills = [
    { name: "HTML5", icon: Html5Logo, color: "#E34F26", proficiency: 95, description: "Semantic markup, accessibility, SEO optimization" },
    { name: "CSS3", icon: Css3Logo, color: "#1572B6", proficiency: 90, description: "Responsive design, animations, modern layouts" },
    { name: "JavaScript", icon: JavascriptLogo, color: "#F7DF1E", proficiency: 80, description: "ES6+, async programming, DOM manipulation" },
    { name: "React", icon: ReactLogo, color: "#61DAFB", proficiency: 80, description: "Being one of the most popular frameworks, I used React for many of my projects and I feel most comfortable using it" },
    { name: "PHP", icon: PhpLogo, color: "#777BB4", proficiency: 70, description: "In my last workplace, we mostly used PHP for backend development" },
    { name: "Laravel", icon: LaravelLogo, color: "#FF2D20", proficiency: 40, description: "After spending most of my time using PHP for backend, I started learning Laravel and created a project using it" },
    { name: "Sass", icon: SassLogo, color: "#CC6699", proficiency: 90, description: "Personally it feels like a better alternative to CSS, it's very intuitive and easy to use" },
    { name: "Tailwind CSS", icon: TailwindcssLogo, color: "#06B6D4", proficiency: 90, description: "Tailwinds makes me a lot more productive and I am able to implements designs much faster compared to using CSS3" },
    { name: "Node.js", icon: NodejsLogo, color: "#339933", proficiency: 50, description: "Server-side JavaScript, npm ecosystem" },
    { name: "Firebase", icon: FirebaseLogo, color: "#FFCA28", proficiency: 65, description: "Having worked mostly with SQL databases, I tried using a NoSQL database and quite liked it, the documentation is great and the realtime database is amazing to use for free" },
    { name: "WordPress", icon: WordpressLogo, color: "#21759B", proficiency: 70, description: "At my workplace I was developing and maintaining e-commerce websites that used Wordpress and WooCommerce. Also created some simple one page websites" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: PuzzleIcon, description: "One of my favourite parts of programming is problem solving, it's exciting to learn new ways to solve problems and learn more" },
    { name: "Communication", icon: CommunicationIcon, description: "I have no problem communication with team members and clients, i believe that communication is key to quality solutions" },
    { name: "Team Collaboration", icon: TeamIcon, description: "Having experience with Agile methodologies, I am able to collaborate comfortably in any setting" },
    { name: "Time Management", icon: TimeIcon, description: "Project planning, deadline adherence" },
    { name: "Adaptability", icon: AdaptabilityIcon, description: "Learning new technologies quickly" },
    { name: "Attention to Detail", icon: DetailIcon, description: "Code quality, UI/UX precision" },
  ];

  const creativeHobbies = [
    { name: "Music Production", icon: MusicIcon, description: "I create music of various genres using FL Studio " },
    { name: "Guitar Playing", icon: GuitarIcon, description: "I own acoustic, electric and classical guitars, also play piano from time to time" },
    { name: "Painting", icon: PaintIcon, description: "Currently I mostly paint landscapes, Bob Ross is a huge inspiration :)" },
  ];

  const categories = [
    { id: 'technical', name: 'Technical Skills', skills: technicalSkills },
    { id: 'soft', name: 'Soft Skills', skills: softSkills },
    { id: 'creative', name: 'Creative Hobbies', skills: creativeHobbies },
  ];

  const currentSkills = categories.find(cat => cat.id === activeCategory)?.skills || [];

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
      isOpen ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? 'backdrop-fade-in' : ''
        }`}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className={`relative bg-background border-2 border-primary rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden transition-all duration-300 ${
        isOpen ? 'modal-slide-in' : 'scale-95 translate-y-4'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-1 border-primary">
          <h5 className="text-h5 text-primary font-bold">My Skills & Interests</h5>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-primary hover:bg-accent/20 transition-colors flex items-center justify-center group"
          >
            <span className="text-background text-[2rem] pb-0.4 group-hover:scale-110 transition-transform duration-200">×</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex border-b border-accent/20">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-1 py-4 px-6 text-center skill-tab transition-all duration-200 ${
                activeCategory === category.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5 active'
                  : 'text-text/60 hover:text-text'
              }`}
            >
              <span className="body2 font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group relative bg-accent/10 rounded-xl p-4 border border-primary hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 skill-card"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fade-in-up 0.6s ease-out forwards',
                    opacity: 0
                  }}
                >
                  {/* Skill Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border-1 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      {typeof IconComponent === 'string' ? (
                        <span className="text-2xl">{IconComponent}</span>
                      ) : (
                        <IconComponent className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="body2 font-medium text-text group-hover:text-primary transition-colors duration-200">{skill.name}</h3>
                      {skill.proficiency ? (
                        <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 bg-accent/20 rounded-full h-2 overflow-hidden">
                          <div 
                            className="h-2 rounded-full proficiency-bar transition-all duration-500"
                            style={{ 
                              width: `${skill.proficiency}%`,
                              backgroundColor: skill.color 
                            }}
                          ></div>
                        </div>
                        <span className="text-xs text-text/60 font-medium">{skill.proficiency}%</span>
                      </div>
                      ):(<></>)}
                      
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text/70 leading-relaxed group-hover:text-text/80 transition-colors duration-200">
                    {skill.description}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-primary bg-accent/5">
          
        </div>
      </div>
    </div>
  );
};

export default SkillModal; 