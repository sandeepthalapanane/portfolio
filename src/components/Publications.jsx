import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { publications } from "../constants";

const PublicationCard = ({ index, title, conference, link }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="mt-5">
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p className="mt-2 text-secondary text-[14px]">{conference}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          Show Publication
        </a>
      </div>
    </motion.div>
  );
};

const Publications = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My Research</p>
        <h2 className={`${styles.sectionHeadText}`}>Publications.</h2>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {publications.map((publication, index) => (
          <PublicationCard key={`publication-${index}`} index={index} {...publication} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Publications, "publications"); 