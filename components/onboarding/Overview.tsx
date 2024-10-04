"use client";

import { useState, useEffect } from "react";

import OverviewTable from "./OverviewTable";

import {
  ChevronUpIcon,
  ChevronDownIcon,
  HomeIcon,
  PersonIcon,
  FileIcon,
} from "@radix-ui/react-icons";
import { UserInfo } from "@/config/mainTypes";

interface OverviewProps {
  workspaceName: string,
  invitedUsers: UserInfo[],
  viewComponentKey: string,
}

const Overview: React.FC<OverviewProps> = ({ workspaceName, invitedUsers, viewComponentKey }: { workspaceName: string, invitedUsers: UserInfo[], viewComponentKey: string }) => {
  const [logoText, setLogoText] = useState<string>("");

  useEffect(() => {
    let logoText = "";
    if (workspaceName.trim()) {
      const wordArray = workspaceName.split(" ").filter(item => item);
      console.log(wordArray);

      wordArray.forEach((item, index) => {
        if (index === 0 || index === wordArray.length - 1) {
          logoText += item[0].toUpperCase();
        }
      })
    } else {
      logoText = "MW";
    }
    setLogoText(logoText);
  }, [workspaceName])

  return (
    <div className="w-full h-[70rem] md:h-screen bg-[#ededed] pt-[13.3rem] pl-[13.3rem]">
      {
        viewComponentKey !== "first_table" ? (
          <div className="w-full h-full border-t-[8px] border-l-[8px] rounded-tl-[29px] flex overflow-hidden border-black">
            <div className="w-full h-full">
              <div className="w-[28.8rem] h-full bg-white">
                <div className="w-full px-10 py-6 flex justify-between items-center space-x-4 border-b border-customGray">
                  <span className="bg-[#5190EF] rounded-md text-white text-[1.4rem] p-2">{logoText}</span>
                  <p className="flex-grow font-bold text-[1.8rem] truncate">{workspaceName || "My Workspace"}</p>
                  <p className="w-fit flex flex-col space-y-1 p-2 justify-center items-center text-[#B6B6B6] text-[1.8rem]">
                    <ChevronUpIcon />
                    <ChevronDownIcon />
                  </p>
                </div>
                <div className="w-full h-fit p-6 flex flex-col justify-center space-y-0 text-[1.8rem]">
                  <div className="w-full flex bg-[#F3F4F6] rounded-md p-4 items-center space-x-4 font-normal">
                    <HomeIcon className="w-8 h-8 mr-4" />
                    <p>Dashboard</p>
                  </div>
                  <div className="w-full flex bg-white rounded-md p-4 items-center space-x-4 font-normal text-[#4B5563]">
                    <PersonIcon className="w-8 h-8 mr-4" />
                    <p className="flex-grow">Team</p>
                    <span className="block w-[5rem] text-[1.4rem] text-center rounded-full py-0 bg-[#F3F4F6]">{invitedUsers?.length || 0}</span>
                  </div>
                  <div className="w-full flex bg-white rounded-md p-4 items-center space-x-4 font-normal text-[#4B5563]">
                    <FileIcon className="w-8 h-8 mr-4" />
                    <p className="flex-grow">Tables</p>
                    <span className="inline-block w-[5rem] text-[1.4rem] text-center rounded-full py-0 bg-[#F3F4F6]">0</span>
                  </div>
                </div>
              </div>
              <div className="flex-grow h-full bg-customGray"></div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full border-t-[8px] border-l-[8px] rounded-tl-[29px] flex overflow-hidden border-black">
            <OverviewTable />
          </div>
        )
      }
    </div>
  )
}

export default Overview;
