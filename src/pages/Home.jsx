import React from "react";
import transition from "../transition";

const Home = () => {
  return (
    <div className=" flex flex-col items-center justify-center font-blackhans">
      <h1 className="font-bold text-[10rem]  mt-20">
        So<span className="text-red-900">That</span>
      </h1>
      <div className="flex flex-col items-center font-blackhans ">
        <p>안녕하세요</p>
        <p>
          우리 동네 작은 아지트 SO<span className="text-red-900">THAT</span>
          입니다 ~
        </p>
        <p>찾아주셔서 감사합니다!</p>
      </div>
      <div className="flex flex-col items-center mt-3">
        <p>운영시간 09:00 ~ 01:00</p>
        <p>매주 수요일 정기휴무</p>
      </div>
      <div className="flex flex-col items-center mt-5">
        <p>모든 음료 TAKE OUT 가능</p>
        <p>외부 음식 환영 (추가금 발생!!!)</p>
        <p>혼술, 낮술 환영!!</p>
        <p>반려동물 환영</p>
      </div>
    </div>
  );
};

export default transition(Home);
