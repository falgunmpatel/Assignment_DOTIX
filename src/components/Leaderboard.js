import React from "react";

const Leaderboard = () => {
  return (
    <div className="fixed h-full w-full bg-[#FEC100] rounded-[30px]">
      {/* Background Design */}
      <div>
        <div className="w-[90px] h-[90px] bg-[#000000]/10 fixed -top-[34px] left-[78px] rounded-[100%]"></div>
        <div className="w-[90px] h-[90px] bg-[#000000]/10 fixed top-[69px] -left-[45px] rounded-[100%]"></div>
        <div className="w-[90px] h-[90px] bg-[#000000]/10 fixed top-[88px] -right-[32px] rounded-[100%]"></div>
        <div className="w-[40px] h-[40px] bg-[#000000]/10 fixed top-[16px] right-[90px] rounded-[100%]"></div>
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

      <div className="ml-4 mb-2 rounded-full bg-black top-[32px] right-[22px] fixed w-[38px] h-[38px]">
        <img
          src="https://freesvg.org/img/abstract-user-flat-4.png"
          alt="profile1"
        ></img>
      </div>

      {/* Leaderboard categories */}
      <div className="flex text-white items-center relative top-[72px]">
        <div className="pl-[19px] ml-6 font-[700] text-[22px]">Today</div>
        <div className="pl-[19px] font-[400] text-[18px]">Month</div>
        <div className="pl-[19px] font-[400] text-[18px]">All times</div>
      </div>

      {/* Top Three */}
      <div>
        <div className="flex flex-row place-content-center fixed mx-auto left-[26px] right-[20px]">
          <div className="relative top-[105px]">
            <div className="ml-4 mb-2 rounded-full bg-black w-[56px] h-[53px]">
              <img
                src="https://freesvg.org/img/abstract-user-flat-4.png"
                alt="profile1"
              ></img>
            </div>
            <svg
              width="123"
              height="165"
              viewBox="0 0 123 165"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <path
                id="Rectangle 9"
                d="M0.206604 0.740295L93.5875 0.899774L122.59 152.949L35.6598 164.063L0.206604 0.740295Z"
                fill="#D8A800"
                fillOpacity="0.7"
              />
            </svg>
            <div className="absolute rotate-[-6.99deg] mt-[4.21px] ml-[28.79px] font-[700] text-[75px] text-white">
              2
            </div>
            <div className="absolute mt-[91.21px] ml-[40.79px] text-white">
              442pt
            </div>
          </div>
          <div className="relative top-[70px] ml-7">
            <div className="ml-4 mb-2 rounded-full bg-black w-[56px] h-[53px]">
              <img
                src="https://freesvg.org/img/abstract-user-flat-4.png"
                alt="profile1"
              ></img>
            </div>
            <svg
              width="98"
              height="211"
              viewBox="0 0 98 211"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <g filter="url(#filter0_d_133_388)">
                <path
                  d="M0 17.9646L83.0097 0L90 203H5.24272L0 17.9646Z"
                  fill="#D8A800"
                  fillOpacity="0.7"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_133_388"
                  x="0"
                  y="0"
                  width="98"
                  height="211"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="4" dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_133_388"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_133_388"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div className="absolute mt-[33px] ml-[23px] font-[700] text-[75px] text-white">
              1
            </div>
            <div className="absolute mt-[127px] ml-[29px] text-white">
              442pt
            </div>
          </div>
          <div className="-ml-5 relative top-[100px] ml-1">
            <div className="ml-16 mb-2 rounded-full bg-black w-[56px] h-[53px]">
              <img
                src="https://freesvg.org/img/abstract-user-flat-4.png"
                alt="profile1"
              ></img>
            </div>
            <svg
              width="112"
              height="186"
              viewBox="0 0 112 186"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <path
                d="M23.4056 0.639725L111.041 32.8905L86.0062 185.644L0.553548 166.196L23.4056 0.639725Z"
                fill="#D8A800"
                fillOpacity="0.7"
              />
            </svg>

            <div className="absolute rotate-[10.90deg] mt-[6.36px] ml-[46.54px] font-[700] text-[75px] text-white">
              3
            </div>
            <div className="absolute mt-[93.36px] ml-[48.54px] text-white">
              442pt
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="fixed bottom-0 w-full h-[356px] bg-white rounded-[25px]">
        <div className="flex flex-col p-4">
          <div className="flex flex-row items-center p-2">
            <div className="basis-1/6 text-center w-[19px] h-[23px]">04</div>
            <div className="text-center rounded-full bg-black w-[48px] h-[48px]">
              <img
                src="https://freesvg.org/img/abstract-user-flat-4.png"
                alt="profile1"
              ></img>
            </div>
            <div className="basis-3/6 pl-5">Moni</div>
            <div className="basis-1/6 bg-[#FFC10299] rounded-full">
              <div className="p-1">223pt</div>
            </div>
          </div>
          <div className="flex flex-row items-center p-2">
            <div className="basis-1/6 text-center w-[19px] h-[23px]">04</div>
            <div className="text-center rounded-full bg-black w-[48px] h-[48px]">
              <img
                src="https://freesvg.org/img/abstract-user-flat-4.png"
                alt="profile1"
              ></img>
            </div>
            <div className="basis-3/6 pl-2">Moni</div>
            <div className="basis-1/6 bg-[#FFC10299] rounded-full">
              <div className="p-1">223pt</div>
            </div>
          </div>
          <div className="flex flex-row items-center p-2">
            <div className="basis-1/6 text-center w-[19px] h-[23px]">04</div>
            <div className="text-center rounded-full bg-black w-[48px] h-[48px]">
              <img
                src="https://freesvg.org/img/abstract-user-flat-4.png"
                alt="profile1"
              ></img>
            </div>
            <div className="basis-3/6 pl-5">Moni</div>
            <div className="basis-1/6 bg-[#FFC10299] rounded-full">
              <div className="p-1">223pt</div>
            </div>
          </div>
          <div className="flex flex-row items-center p-1">
            <div className="basis-1/6 text-center w-[19px] h-[23px]">04</div>
            <div className="text-center rounded-full bg-black w-[48px] h-[48px]">
              <img
                src="https://freesvg.org/img/abstract-user-flat-4.png"
                alt="profile1"
              ></img>
            </div>
            <div className="basis-3/6 pl-5">Moni</div>
            <div className="basis-1/6 bg-[#FFC10299] rounded-full">
              <div className="p-1">223pt</div>
            </div>
          </div>
          <hr className="border m-2" />
          <div className="flex flex-row items-center p-1">
            <div className="basis-1/6 text-center w-[19px] h-[23px]">04</div>
            <div className="text-center rounded-full bg-black w-[48px] h-[48px]">
              <img
                src="https://freesvg.org/img/abstract-user-flat-4.png"
                alt="profile1"
              ></img>
            </div>
            <div className="basis-3/6 pl-5">Moni</div>
            <div className="basis-1/6 bg-[#FFC10299] rounded-full">
              <div className="p-1">223pt</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
