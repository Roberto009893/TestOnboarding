"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MagicWandIcon } from "@radix-ui/react-icons";

interface CreateFirstTableProps {
  setViewComponentKey: React.Dispatch<React.SetStateAction<string>>,
}

const ButtonGroup = [
  {
    key: 'find_people',
    txt: "Find people or companies",
  },
  {
    key: 'import_leads',
    txt: "Import_leads",
  }
]

const CreateFirstTable: React.FC<CreateFirstTableProps> = ({ setViewComponentKey }: { setViewComponentKey: React.Dispatch<React.SetStateAction<string>> }) => {
  const router = useRouter();

  const [selectedBtnKey, setSelectedBtnKey] = useState("find_people");
  const [content, setContent] = useState("");
  const [isFocusTextarea, setIsFocusTextarea] = useState(false);

  const handleSubmit = () => {
    if (!content) return;
    setViewComponentKey("first_table");
    router.push("/");
  }

  return (
    <div className="w-full h-[70rem] md:h-full relative bg-white px-[2rem] sm:px-[10rem]">
      <div className="mt-[10rem] w-full sm:max-w-[80rem] mx-auto">
        <h2 className="text-[2.5rem] font-bold tracking-normal">Create your workspace</h2>
        <p className="text-[1.4rem] text-[#7E7E7E] mt-4">It&lsquos time to get the perfect leads</p>
        <div className="w-fit mt-[1.5rem] bg-[#F1F5F9] rounded-lg p-2 flex items-center space-x-4 text-[1.4rem]">
          {
            ButtonGroup.map((item, index) => (
              <Button key={index} className={`py-6 px-8 rounded-md text-[1.2rem] hover:cursor-pointer shadow-none ${item.key === selectedBtnKey ? 'bg-white text-[#7E7E7E] hover:bg-white' : 'bg-[#F1F5F9] text-black hover:bg-[#F1F5F9]'}`}
                onClick={() => setSelectedBtnKey(item.key)}>
                {item.txt}
              </Button>
            ))
          }
        </div>
        <div className={`mt-[2.5rem] w-full h-[15rem] px-5 py-2 flex justify-between space-x-2 border rounded-lg ${isFocusTextarea ? 'border-customBlue' : 'border-[#CDCDCD]'}`}>
          <MagicWandIcon className="w-6 h-6 text-customBlue flex-grow mt-4" />
          <div className="w-full h-full max-h-[15rem] overflow-y-auto">
            <Textarea className="text-[1.2rem] h-full text-black border-none focus-visible:outline-none focus-visible:ring-0 shadow-none"
              placeholder="Find CEOs of start-ups in the US, that have recently raised and check their pricing"
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsFocusTextarea(true)}
              onBlur={() => setIsFocusTextarea(false)} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[7rem] w-full px-[2rem] max-w-[50rem] left-1/2 -translate-x-1/2">
        <Button className={`w-full text-white rounded-[8px] p-8 text-[1.8rem] font-bold border shadow-none
          ${content ? 'bg-customBlue border-customBlue hover:bg-white hover:text-customBlue hover:cursor-pointer' : 'bg-[#F1F5F9] hover:bg-[#F1F5F9] border-[#F1F5F9] hover:cursor-not-allowed'}`}
          onClick={handleSubmit}>
          Start
        </Button>
      </div>
    </div>
  )
}

export default CreateFirstTable;
