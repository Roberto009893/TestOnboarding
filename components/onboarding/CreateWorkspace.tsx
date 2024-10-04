"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";

interface CreateWorkspaceProps {
  workspaceName: string;
  setWorkspaceName: React.Dispatch<React.SetStateAction<string>>, // Correct type for the setter function
  setViewComponentKey: React.Dispatch<React.SetStateAction<string>>,
}

const CreateWorkspace: React.FC<CreateWorkspaceProps> = ({ workspaceName, setWorkspaceName, setViewComponentKey }:
  { workspaceName: string, setWorkspaceName: React.Dispatch<React.SetStateAction<string>>, setViewComponentKey: React.Dispatch<React.SetStateAction<string>> }) => {

  const handleClickNextBtn = () => {
    if (!workspaceName) return;
    setViewComponentKey("invite_collaborator");
  }

  return (
    <div className="w-full h-[70rem] md:h-screen relative bg-white px-[2rem] sm:px-[10rem]">
      <div className="mt-[10rem] w-full sm:max-w-[80rem] mx-auto">
        <h2 className="text-[2.5rem] font-bold tracking-normal">Create your workspace</h2>
        <div className="mt-[2.5rem]">
          <Input type="text" placeholder="My workspace"
            className="w-full border border-[#E3E3E3] rounded-lg px-[1.6rem] py-[2rem] text-[1.4rem] focus-visible:ring-0 focus:border-customBlue"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)} />
        </div>
      </div>
      <div className="absolute bottom-[7rem] w-full px-[2rem] max-w-[50rem] left-1/2 -translate-x-1/2">
        <p className="text-center text-[1.2rem] text-[#7E7E7E] hover:cursor-pointer mb-5" onClick={() => setViewComponentKey("invite_collaborator")}>
          <span>Skip this step</span>
          <ChevronRightIcon className="w-5 h-5 ml-4 inline-block" />
        </p>
        <Button className={`w-full text-white rounded-[8px] p-8 text-[1.8rem] font-bold border shadow-none
          ${workspaceName ? 'bg-customBlue border-customBlue hover:bg-white hover:text-customBlue hover:cursor-pointer' : 'bg-[#F1F5F9] hover:bg-[#F1F5F9] border-[#F1F5F9] hover:cursor-not-allowed'}`}
          // disabled={!workspace}
          onClick={handleClickNextBtn}>
          Continue
        </Button>
      </div>
    </div>
  )
}

export default CreateWorkspace;
