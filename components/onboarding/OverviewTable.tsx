"use client";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  ChevronDownIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";

const OverviewTable: React.FC = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full flex justify-end items-center space-x-6 px-8 py-6">
        <p className="px-4 py-2 border border-customBlue bg-customBlue rounded-lg text-white text-[1.4rem] flex justify-between items-center space-x-4">
          <LightningBoltIcon className="w-6 h-6" />
          <span className="mx-4">Enrich</span>
        </p>
        <p className="px-4 py-2 border border-[#E7E7E7] bg-white rounded-lg text-black text-[1.4rem] flex justify-between items-center space-x-4">
          <span className="ml-4">Action</span>
          <ChevronDownIcon className="w-6 h-6" />
        </p>
      </div>
      <div className="w-full overflow-x-auto md:overflow-x-hidden">
        <Table className="w-full">
          <TableHeader className="bg-[#F8F8F8]">
            <TableRow className="text-[1.6rem] text-center">
              <TableHead className="border border-[#E7E7E7]">
                <div className="w-full flex justify-center items-center space-x-2">
                  <Image src="/assets/icons/icon1.png" alt="Icon1" width={18} height={18} className="inline-block mr-4" />
                  <p className="leading-relaxed">SMBs that have recently raised</p>
                </div>
              </TableHead>
              <TableHead className="border border-[#E7E7E7]">
                <div className="w-full flex justify-center items-center space-x-2">
                  <Image src="/assets/icons/icon2.png" alt="Icon1" width={18} height={18} className="inline-block mr-4" />
                  <p className="leading-relaxed">Find CEO from company</p>
                </div>
              </TableHead>
              <TableHead className="border border-[#E7E7E7]">
                <div className="w-full flex justify-center items-center space-x-2">
                  <Image src="/assets/icons/gpt.png" alt="Icon1" width={18} height={18} className="inline-block mr-4" />
                  <p className="leading-relaxed">Extract pricing from websiteF</p>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-[1.2rem]">
            <TableRow>
              <TableCell>
                <Image src="/assets/icons/icon6.png" alt="Icon1" width={18} height={18} className="inline-block mr-4" />
                TechWolf
              </TableCell>
              <TableCell>
                <Image src="/assets/icons/icon3.png" alt="Icon1" width={18} height={18} className="inline-block mr-4" />
                Andreas De Neve
              </TableCell>
              <TableCell className="text-center">
                19$, 75$, 300$
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Image src="/assets/icons/icon5.png" alt="Icon1" width={18} height={18} className="inline-block mr-4" />
                PhysicsX
              </TableCell>
              <TableCell>
                <Image src="/assets/icons/icon3.png" alt="Icon1" width={18} height={18} className="inline-block mr-4" />
                Robin Tuluie
              </TableCell>
              <TableCell className="text-center">
                Not disclosed
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Image src="/assets/icons/icon4.png" alt="Icon1" width={18} height={18} className="inline-block mr-4" />
                Pika Labs
              </TableCell>
              <TableCell>
                <Image src="/assets/icons/icon3.png" alt="Icon1" width={18} height={18} className="inline-block mr-4" />
                Chenlin Meng
              </TableCell>
              <TableCell className="text-center">
                $576
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default OverviewTable;
