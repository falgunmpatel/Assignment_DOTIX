import React, { useEffect, useState } from "react";

const QuizSports = (response) => {
  const [science, setScience] = useState("");

  const loadScienceQuiz = async () => {
    try {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=10&category=21&type=multiple",
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setScience(data.results);
      console.log(science);
    } catch (error) {
      console.log("Error loading quiz: " + error);
    }
  };

  useEffect(() => {
    loadScienceQuiz();
  }, []);

  return (
    <div className="h-[228px] bg-[#FEC100] rounded-[30px]">
      {/* Background Design */}
      <div>
        <div className="w-[90px] h-[90px] bg-[#000000]/10 fixed -top-[34px] left-[78px] rounded-[100%]"></div>
        <div className="w-[90px] h-[90px] bg-[#000000]/10 fixed top-[69px] -left-[45px] rounded-[100%]"></div>
        <div className="w-[90px] h-[90px] bg-[#000000]/10 fixed top-[88px] -right-[32px] rounded-[100%]"></div>
        <div className="w-[40px] h-[40px] bg-[#000000]/10 fixed top-[16px] right-[90px] rounded-[100%]"></div>
        <div className="fixed top-[37px] right-[21px]">
          <svg
            width="23"
            height="26"
            viewBox="0 0 23 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2871 0.789887L17.3174 17.1961L16.5317 17.1976C16.0995 17.1984 15.7466 17.5506 15.7474 17.9803L15.7503 19.5428C15.7511 19.9724 16.1053 20.3234 16.5375 20.3226L17.3232 20.3211L17.3304 24.2273C17.3312 24.657 17.6854 25.0079 18.1175 25.0071L19.689 25.0042C20.1211 25.0034 20.474 24.6512 20.4732 24.2215L20.466 20.3153L21.2517 20.3138C21.6839 20.313 22.0368 19.9608 22.036 19.5311L22.0331 17.9686C22.0323 17.539 21.6781 17.1881 21.246 17.1889L20.4602 17.1903L20.4299 0.784081C20.4291 0.354395 20.0749 0.00348588 19.6428 0.00428418L18.0714 0.00718709C17.6392 0.00798539 17.2863 0.3602 17.2871 0.789887ZM9.42996 0.804402L9.43717 4.71064L8.65146 4.7121C8.21932 4.71289 7.8664 5.06511 7.86719 5.4948L7.87008 7.05729C7.87087 7.48698 8.22509 7.83789 8.65723 7.83709L9.44295 7.83564L9.47325 24.2419C9.47405 24.6715 9.82827 25.0225 10.2604 25.0217L11.8318 25.0188C12.264 25.018 12.6169 24.6657 12.6161 24.2361L12.5858 7.82983L13.3715 7.82838C13.8037 7.82758 14.1566 7.47537 14.1558 7.04568L14.1529 5.48318C14.1521 5.0535 13.7979 4.70259 13.3657 4.70339L12.58 4.70484L12.5728 0.798596C12.572 0.368909 12.2178 0.0180004 11.7857 0.0187987L10.2142 0.0217016C9.78209 0.0224999 9.42916 0.374715 9.42996 0.804402ZM1.57283 0.818916L1.59159 10.9751L0.805878 10.9766C0.373736 10.9774 0.0208143 11.3296 0.021608 11.7593L0.0244945 13.3218C0.0252882 13.7515 0.379508 14.1024 0.811651 14.1016L1.59736 14.1001L1.61613 24.2564C1.61692 24.6861 1.97114 25.037 2.40328 25.0362L3.97471 25.0333C4.40685 25.0325 4.75977 24.6803 4.75898 24.2506L4.74022 14.0943L5.52593 14.0929C5.95807 14.0921 6.31099 13.7399 6.3102 13.3102L6.30731 11.7477C6.30652 11.318 5.9523 10.9671 5.52016 10.9679L4.73444 10.9693L4.71568 0.81311C4.71489 0.383424 4.36067 0.032515 3.92852 0.0333133L2.3571 0.0362162C1.92496 0.0370145 1.57204 0.38923 1.57283 0.818916Z"
              fill="white"
              fillOpacity="0.9"
            />
          </svg>
        </div>
        <div className="fixed top-[37px] left-[20px]">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6461 18.6604L11.5561 19.6771C11.0945 20.1076 10.3482 20.1076 9.89153 19.6771L0.346167 10.7786C-0.115389 10.3481 -0.115389 9.65194 0.346167 9.22601L9.89153 0.322876C10.3531 -0.107625 11.0994 -0.107625 11.5561 0.322876L12.6461 1.33959C13.1126 1.77467 13.1028 2.48454 12.6265 2.91046L6.70974 8.16808H20.8216C21.4746 8.16808 22 8.65812 22 9.26723V10.7328C22 11.3419 21.4746 11.8319 20.8216 11.8319H6.70974L12.6265 17.0895C13.1077 17.5155 13.1175 18.2253 12.6461 18.6604Z"
              fill="white"
              fillOpacity="0.9"
            />
          </svg>
        </div>
      </div>

      {/* Question Section */}
      <div className="h-[170px] bg-white rounded-[30px] fixed top-[143px] left-[28px] right-[28px] shadow-[0px_4px_4px] shadow-[#FBECFF]">
        <div className="flex flex-row">
          <div className="flex flex-row basis-1/2">
            <div className="flex text-[#1F8435] mt-[11px] ml-[10px] text-[14px] font-[700]">
              01
            </div>
            <div className="flex pl-[9px] mt-[17px] ">
              <svg
                width="30"
                height="8"
                viewBox="0 0 30 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="30" height="8" rx="4" fill="#1F8435" />
              </svg>
            </div>
          </div>
          <div className="flex flex-row-reverse basis-1/2">
            <div className="flex mr-[11px] mt-[11px] text-[#D05A04] text-[14px] font-[700]">
              03
            </div>
            <div className="flex mt-[17px] pr-[7px]">
              <svg
                width="36"
                height="8"
                viewBox="0 0 36 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="8" rx="4" fill="#D05A04" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="grow h-[21px] mt-[46px] pl-[12px] text-center md:px-5 text-[#FFC000] text-[14px] font-[500]">
            Question 02/20
          </div>
        </div>
        <div className="flex">
          <div className="grow md:px-5 h-[48px] text-center text-[#2B262D] text-[16px] font-[500]">
            {science[1]?.question}
          </div>
        </div>
      </div>

      <div className="relative w-[67px] h-[67px] top-[109px] mx-auto">
        <div className="asolute top-[0px] left-[0px] b w-[67px] h-[67px] bg-white rounded-[100%]"></div>
        <div className="absolute top-[5px] left-[5px]">
          <svg
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57 28.5C57 44.2401 44.2401 57 28.5 57C12.7599 57 0 44.2401 0 28.5C10 28.5 28.5 20 28.5 0C44.2401 0 57 12.7599 57 28.5Z"
              fill="#FEB005"
            />
          </svg>
        </div>
        <div className="absolute top-[9px] left-[9px] w-[49px] h-[49px] bg-white  rounded-[100%]"></div>
        <div className="absolute top-[20px] left-[23px] text-[#FEB005] text-[20px] font-[700]">
          18
        </div>
      </div>

      {/* MCQ Options */}
      <div className="fixed top-[337px] left-[48px] right-[48px] ">
        <label htmlFor="option1">
          <div className="my-5 w-[240px] min-[337px]:w-full h-[48px] flex flex-row border-[2px] border-[#FFB504] rounded-[20px]">
            <div className="basis-3/4 pl-5 pt-1.5 top-[387px] left-[67px] font-[500] text-[20px] text-[#2B262D]">
              {science[1]?.correct_answer}
            </div>
            <div className="flex flex-row-reverse basis-1/4">
              <input
                type="radio"
                id="option1"
                name="answer"
                className="w-[18px] h-[18px] mr-5 self-center"
              />
            </div>
          </div>
        </label>
        <label htmlFor="option2">
          <div className="my-5 w-[240px] min-[337px]:w-full h-[48px] flex flex-row border-[2px] border-[#FFB504] rounded-[20px]">
            <div className="basis-3/4 pl-5 pt-1.5 top-[387px] left-[67px] font-[500] text-[20px] text-[#2B262D]">
              {science[1]?.incorrect_answers[0]}
            </div>
            <div className="flex flex-row-reverse basis-1/4">
              <input
                type="radio"
                id="option2"
                name="answer"
                className="w-[18px] h-[18px] mr-5 self-center"
              />
            </div>
          </div>
        </label>
        <label htmlFor="option3">
          <div className="my-5 w-[240px] min-[337px]:w-full h-[48px] flex flex-row border-[2px] border-[#FFB504] rounded-[20px]">
            <div className="basis-3/4 pl-5 pt-1.5 top-[387px] left-[67px] font-[500] text-[20px] text-[#2B262D]">
              {science[1]?.incorrect_answers[1]}
            </div>
            <div className="flex flex-row-reverse basis-1/4">
              <input
                type="radio"
                id="option3"
                name="answer"
                className="w-[18px] h-[18px] mr-5 self-center"
              />
            </div>
          </div>
        </label>
        <label htmlFor="option4">
          <div className="my-5 w-[240px] min-[337px]:w-full h-[48px] flex flex-row border-[2px] border-[#FFB504] rounded-[20px]">
            <div className="basis-3/4 pl-5 pt-1.5 top-[387px] left-[67px] font-[500] text-[20px] text-[#2B262D]">
              {science[1]?.incorrect_answers[2]}
            </div>
            <div className="flex flex-row-reverse basis-1/4">
              <input
                type="radio"
                id="option4"
                name="answer"
                className="w-[18px] h-[18px] mr-5 self-center"
              />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default QuizSports;
