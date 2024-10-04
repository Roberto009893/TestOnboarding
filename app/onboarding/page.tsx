"use client";

import React, { useState } from "react";

import CreateWorkspace from "@/components/onboarding/CreateWorkspace";
import InviteCollaborator from "@/components/onboarding/InviteCollaborator";
import Overview from "@/components/onboarding/Overview";
import { UserInfo } from "@/config/mainTypes";

const OnboardingPage: React.FC = () => {
  const [workspaceName, setWorkspaceName] = useState<string>("");
  const [invitedUsers, setInvitedUsers] = useState<UserInfo[]>([]);
  const [viewComponentKey, setViewComponentKey] = useState<string>("workspace");

  return (
    <div className="w-full h-fit md:h-screen">
      <div className="w-full h-full flex flex-col md:flex-row">
        {
          viewComponentKey === "workspace" && (
            <CreateWorkspace workspaceName={workspaceName} setWorkspaceName={setWorkspaceName} viewComponentKey={viewComponentKey} setViewComponentKey={setViewComponentKey} />
          )
        }
        {
          viewComponentKey === "invite_collaborator" && (
            <InviteCollaborator invitedUsers={invitedUsers} setInvitedUsers={setInvitedUsers} />
          )
        }
        <Overview workspaceName={workspaceName} invitedUsers={invitedUsers} />
      </div>
    </div>
  )
}

export default OnboardingPage;
