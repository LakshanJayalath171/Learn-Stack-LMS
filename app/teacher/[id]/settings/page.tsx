"use client"
import { useState } from "react"
import { ChevronRight } from 'lucide-react';
import {student_Settings_sidebar} from "@/constant/index"
import Profile from "@/components/Profile";
import Privacy from "@/components/Privacy";
import Account from "@/components/Account";
import Notification from "@/components/Notification";
import Devices from "@/components/Devices";

const settings = () => {

  const [selectedTab, setSelectedTab] = useState("Profile")

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-primary">Settings</h1>
        <p className="text-secondary font-light">
          This information will be displayed publicly on your learning profile.
        </p>

        <div className="mt-5 flex gap-3">
          <div className="flex-1 ">
            {/* sidebar */}
            <div className="flex items-center justify-start flex-col gap-2">
              {student_Settings_sidebar.map((item) => (
                <div key={item.id} className={`flex items-center justify-between px-3 py-1 w-full h-full rounded-lg cursor-pointer  + ${selectedTab === item.name ? "apple text-special" : "text-primary"}`} onClick={() => setSelectedTab(item.name)}>{item.name} <ChevronRight className="h-4 w-4" /></div>
              ))}
              
            </div>
          </div>
          <div className="flex-3 px-3 py-2 w-full h-full border border-gray-700 rounded-lg">
            {selectedTab === "Profile" && <Profile />}
            {selectedTab === "Account" && <Account />}
            {selectedTab === "Privacy" && <Privacy />}
            {selectedTab === "Device Management" && <Devices/>}
            {selectedTab === "Notification" && <Notification />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default settings