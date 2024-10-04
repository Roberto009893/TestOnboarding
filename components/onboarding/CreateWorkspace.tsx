"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CreateWorkspaceProps {
  workspaceName: string;
  setWorkspaceName: React.Dispatch<React.SetStateAction<string>>, // Correct type for the setter function
  viewComponentKey: string,
  setViewComponentKey: React.Dispatch<React.SetStateAction<string>>,
}

const CreateWorkspace: React.FC<CreateWorkspaceProps> = ({ workspaceName, setWorkspaceName, viewComponentKey, setViewComponentKey }:
  { workspaceName: string, setWorkspaceName: React.Dispatch<React.SetStateAction<string>>, viewComponentKey: string, setViewComponentKey: React.Dispatch<React.SetStateAction<string>> }) => {

  const [workspace, setWorkspace] = useState<string>(workspaceName);

  console.log(viewComponentKey);

  useEffect(() => {
    setWorkspace(workspaceName);
  }, [])

  const handleSubmit = () => {
    if (!workspace) return;
    setWorkspaceName(workspace);
    setViewComponentKey("invite_collaborator");
  }
  return (
    <div className="w-full h-[70rem] md:h-screen relative bg-white px-[10rem]">
      <div className="mt-[10rem] w-full max-w-[50rem] mx-auto">
        <h2 className="text-[2.5rem] font-bold tracking-normal">Create your workspace</h2>
        <div className="mt-[2.5rem]">
          <Input type="text" placeholder="My workspace"
            className="w-full border border-[#E3E3E3] rounded-lg px-[2rem] py-[2.5rem] text-[1.6rem]"
            value={workspace}
            onChange={(e) => setWorkspace(e.target.value)} />
        </div>
      </div>
      <div className="absolute bottom-[7rem] w-full max-w-[50rem] left-1/2 -translate-x-1/2">
        <Button className={`w-full text-white rounded-[8px] p-8 text-[1.8rem] font-bold border
          ${workspace ? 'bg-customBlue border-customBlue hover:bg-white hover:text-customBlue hover:cursor-pointer' : 'bg-[#4B5563] hover:bg-[#4B5563] border-[#4B5563] hover:cursor-not-allowed'}`}
          // disabled={!workspace}
          onClick={handleSubmit}>
          Continue
        </Button>
      </div>
    </div>
  )
}

export default CreateWorkspace;
