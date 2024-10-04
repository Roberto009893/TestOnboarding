"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserInfo } from "@/config/mainTypes";

interface CreateInvitedUsersProps {
  invitedUsers: UserInfo[];
  setInvitedUsers: React.Dispatch<React.SetStateAction<UserInfo[]>>; // Correct type for the setter function
}

const InviteCollaborator: React.FC<CreateInvitedUsersProps> = ({ invitedUsers, setInvitedUsers }: { invitedUsers: UserInfo[], setInvitedUsers: React.Dispatch<React.SetStateAction<UserInfo[]>> }) => {

  const [users, setUsers] = useState<UserInfo[]>(invitedUsers);
  const [otherUsers, setOtherUsers] = useState<UserInfo[]>([]);

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
  }

  return (
    <div className="w-full h-[70rem] md:h-full relative bg-white px-[10rem]">
      <div className="mt-[10rem] w-full max-w-[50rem] mx-auto">
        <h2 className="text-[2.5rem] font-bold tracking-normal">Invite collaborators</h2>
        <p className="text-[1.4rem] text-[#7E7E7E] mt-4">Add your team at no additional cost</p>
        <div className="mt-[2.5rem] flex flex-col space-y-6">
          {
            users.map((user, index) => (
              <Input key={index} type="email" placeholder="colleague@gmail.com"
                className="w-full border border-[#E3E3E3] rounded-lg px-[2rem] py-[2.5rem] text-[1.6rem]"
                value={user.email}
                onChange={(e) => handleChangeUserInfo(e, index)} />
            ))
          }
          {
            otherUsers.map((user, index) => (
              <Input key={index} type="email" placeholder="colleague@gmail.com"
                className="w-full border border-[#E3E3E3] rounded-lg px-[2rem] py-[2.5rem] text-[1.6rem]"
                value={user.email || ""}
                onChange={(e) => handleChangeOtherUserInfo(e, index)} />
            ))
          }
        </div>
      </div>
      <div className="absolute bottom-[7rem] w-full max-w-[50rem] left-1/2 -translate-x-1/2">
        <Button className={`w-full text-white rounded-[8px] p-8 text-[1.8rem] font-bold border
          ${users.length > 0 || otherUsers.filter(user => user.email !== "").length > 0 ? 'bg-customBlue border-customBlue hover:bg-white hover:text-customBlue hover:cursor-pointer' : 'bg-[#4B5563] hover:bg-[#4B5563] border-[#4B5563] hover:cursor-not-allowed'}`}
          // disabled={!workspace}
          onClick={handleSubmit}>
          Continue
        </Button>
      </div>
    </div>
  )
}

export default InviteCollaborator;
