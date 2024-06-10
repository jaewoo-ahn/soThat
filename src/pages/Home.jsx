import React from "react";
import transition from "../transition";
import { motion } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  // const itemVariants = {
  //   hidden: { opacity: 0, x: 100 },
  //   visible: { opacity: 1, x: 0 },
  // };

  return (
    <div className=" flex flex-col items-center justify-center font-blackhans ">
      <motion.h1
        className="font-bold text-[10rem] "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 1 }}
      >
        So<span className="text-red-900">That</span>
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 2 }}
        className="flex flex-col items-center font-blackhans leading-none tracking-[0.2em]"
      >
        <p>안녕하세요</p>
        <p>
          우리 동네 작은 아지트 SO<span className="text-red-900">THAT</span>
          입니다 ~
        </p>
        <p>찾아주셔서 감사합니다!</p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 3 }}
        className="flex flex-col items-center mt-3 leading-none tracking-[0.2em]"
      >
        <p>운영시간 09:00 ~ 01:00</p>
        <p>매주 수요일 정기휴무</p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 4 }}
        className="flex flex-col items-center mt-5 leading-none tracking-[0.2em]"
      >
        <p>모든 음료 TAKE OUT 가능</p>
        <p>외부 음식 환영 (추가금 발생!!!)</p>
        <p>혼술, 낮술 환영!!</p>
        <p>반려동물 환영</p>
      </motion.div>
      <div className="w-1/7 mt-5">
        <img src="/images/sothat.png" alt="logo" className="w-full h-1/2" />
      </div>
    </div>
  );
};

export default transition(Home);
