import AccordionItem from "./AccordionItem";
import { useState } from "react";

const steps = [
  {
    title: 'Consultation',
    description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    title: 'Research and Strategy Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus quis felis et pulvinar. In mauris felis, pharetra ac diam vel, euismod laoreet sem. Sed vitae dictum risus. Fusce varius.',
  },
  {
    title: 'Implementation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus quis felis et pulvinar. In mauris felis, pharetra ac diam vel, euismod laoreet sem. Sed vitae dictum risus. Fusce varius.',
  },
  {
    title: 'Monitoring and Optimization',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus quis felis et pulvinar. In mauris felis, pharetra ac diam vel, euismod laoreet sem. Sed vitae dictum risus. Fusce varius.',
  },
  {
    title: 'Reporting and Communication',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus quis felis et pulvinar. In mauris felis, pharetra ac diam vel, euismod laoreet sem. Sed vitae dictum risus. Fusce varius.',
  },
  {
    title: 'Continual Improvement',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus quis felis et pulvinar. In mauris felis, pharetra ac diam vel, euismod laoreet sem. Sed vitae dictum risus. Fusce varius.',
  },
]

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div style={{ width: '100%', marginTop: '40px'}}>
      {steps.map((step, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={step.title}
          description={step.description}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index === activeIndex ? null : index)}
        />
      ))}
    </div>
  )}