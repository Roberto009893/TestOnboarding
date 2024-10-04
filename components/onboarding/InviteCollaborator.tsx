"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ChevronRightIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

import { UserInfo } from "@/config/mainTypes";

interface CreateInvitedUsersProps {
  invitedUsers: UserInfo[];
  setInvitedUsers: React.Dispatch<React.SetStateAction<UserInfo[]>>; // Correct type for the setter function
  setViewComponentKey: React.Dispatch<React.SetStateAction<string>>
}

const InviteCollaborator: React.FC<CreateInvitedUsersProps> = ({ invitedUsers, setInvitedUsers, setViewComponentKey }:
  { invitedUsers: UserInfo[], setInvitedUsers: React.Dispatch<React.SetStateAction<UserInfo[]>>, setViewComponentKey: React.Dispatch<React.SetStateAction<string>> }) => {

  const [users, setUsers] = useState<UserInfo[]>(invitedUsers);
  const [otherUsers, setOtherUsers] = useState<UserInfo[]>([]);
  const [focusUserIndex, setFocusUserIndex] = useState(-1);
  const [focusOtherUserIndex, setFocusOtherUserIndex] = useState(-1);

  useEffect(() => {
    setUsers(invitedUsers);
    setOtherUsers(Array.from({ length: 4 - invitedUsers.length }).map(item => {
      console.log(item);
      return { email: "" };
    }));
  }, [])

  const handleChangeUserInfo = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (index < 0) return;
    const email = e.target.value;
    const prev = [...users];
    prev[index].email = email;
    setUsers(prev);
  }

  const handleChangeOtherUserInfo = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (index < 0) return;
    const email = e.target.value;
    const prev = [...otherUsers];
    prev[index].email = email;
    setOtherUsers(prev);
  }

  const handleSubmit = () => {
    const validUsers = otherUsers.filter(user => user.email !== "");
    setInvitedUsers([...users, ...validUsers]);
    setViewComponentKey("first_table");
  }

  return (
    <div className="w-full h-[70rem] md:h-full relative bg-white px-[2rem] sm:px-[10rem]">
      <div className="mt-[10rem] w-full sm:max-w-[80rem] mx-auto">
        <h2 className="text-[2.5rem] font-bold tracking-normal">Invite collaborators</h2>
        <p className="text-[1.4rem] text-[#7E7E7E] mt-4">Add your team at no additional cost</p>
        <div className="mt-[2.5rem] flex flex-col space-y-6">
          {
            users.map((user, index) => (
              <div key={index} className={`w-full flex justify-between items-center border rounded-lg px-[1rem] py-[1.5rem] ${index === focusUserIndex ? 'border-customBlue text-customBlue' : 'border-[#E3E3E3] text-[#E3E3E3]'}`}>
                <Input type="email" placeholder="colleague@gmail.com"
                  className="text-[1.6rem] text-black border-none focus-visible:outline-none focus-visible:ring-0 shadow-none"
                  value={user.email}
                  onChange={(e) => handleChangeUserInfo(e, index)}
                  onFocus={() => setFocusUserIndex(index)}
                  onBlur={() => setFocusUserIndex(-1)} />
                <EnvelopeClosedIcon className="w-7 h-7 font-bold" />
              </div>
            ))
          }
          {
            otherUsers.map((user, index) => (
              <div key={index} className={`w-full flex justify-between items-center border border-[#E3E3E3] rounded-lg px-[1rem] py-[1.5rem] ${index === focusOtherUserIndex ? 'border-customBlue text-customBlue' : 'border-[#E3E3E3] text-[#E3E3E3]'}`}>
                <Input type="email" placeholder="colleague@gmail.com"
                  className="text-[1.6rem] text-black border-none focus-visible:outline-none focus-visible:ring-0 shadow-none"
                  value={user.email || ""}
                  onChange={(e) => handleChangeOtherUserInfo(e, index)}
                  onFocus={() => setFocusOtherUserIndex(index)}
                  onBlur={() => setFocusOtherUserIndex(-1)} />
                <EnvelopeClosedIcon className="w-7 h-7 font-bold" />
              </div>
            ))
          }
        </div>
      </div>
      <div className="absolute bottom-[7rem] w-full px-[2rem] max-w-[50rem] left-1/2 -translate-x-1/2">
        <p className="text-center text-[1.2rem] text-[#7E7E7E] hover:cursor-pointer mb-5" onClick={() => setViewComponentKey("first_table")}>
          <span>Skip this step</span>
          <ChevronRightIcon className="w-5 h-5 ml-4 inline-block" />
        </p>
        <Button className={`w-full text-white rounded-[8px] p-8 text-[1.8rem] font-bold border shadow-none
          ${users.length > 0 || otherUsers.filter(user => user.email !== "").length > 0 ? 'bg-customBlue border-customBlue hover:bg-white hover:text-customBlue hover:cursor-pointer' : 'bg-[#F1F5F9] hover:bg-[#F1F5F9] border-[#F1F5F9] hover:cursor-not-allowed'}`}
          // disabled={!workspace}
          onClick={handleSubmit}>
          Continue
        </Button>
      </div>
    </div>
  )
}

export default InviteCollaborator;
