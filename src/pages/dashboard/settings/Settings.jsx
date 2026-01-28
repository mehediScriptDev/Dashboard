import React, { useState } from "react";
import Avatar from "../../../Components/ui/Avatar";
import Input from "../../../Components/ui/Input";
import Button from "../../../Components/ui/Button";
import Btn from "../../../Components/ui/Btn";

const Settings = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bgColorPrimary p-4 sm:p-6">
      <div className="flex gap-8 mb-10 border-b border-border pb-4">
        <button
          onClick={() => {
            setActiveTab("profile");
            setIsEditing(true);
          }}
          className={`text-base font-normal transition-colors ${
            activeTab === "profile" ? "text-white" : "text-white/60"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("password")}
          className="text-base font-normal text-white/60"
        >
          Password Settings
        </button>
      </div>

      {!isEditing && activeTab !== "password" && (
        <div>
          <div className="mb-12">
            <p className="text-white text-base mb-6">Profile Image</p>
            <div className="relative flex items-end gap-3">
              <Avatar size="xl" />
              <div 
                onClick={() => {
                  setActiveTab("profile");
                  setIsEditing(true);
                }} 
                className="cursor-pointer"
              >
                <Btn className=" w-auto! py-1.5! text-sm">
                  Edit Profile
                </Btn>
              </div>
            </div>
          </div>

          <div className="space-y-8 max-w-xl">
            <div className="flex flex-col sm:flex-row sm:items-center pb-3 border-b border-border gap-1 sm:gap-0">
              <label className="text-white/60 sm:text-white text-sm sm:text-base sm:w-40">Full Name:</label>
              <p className="text-white text-base">Jane D.</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center pb-3 border-b border-border gap-1 sm:gap-0">
              <label className="text-white/60 sm:text-white text-sm sm:text-base sm:w-40">Email:</label>
              <p className="text-white text-base">jane@gmail.com</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center pb-3 border-b border-border gap-1 sm:gap-0">
              <label className="text-white/60 sm:text-white text-sm sm:text-base sm:w-40">Store Name:</label>
              <p className="text-white text-base">Ubreakifix Store</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center pb-3 border-b border-border gap-1 sm:gap-0">
              <label className="text-white/60 sm:text-white text-sm sm:text-base sm:w-40">Store Address:</label>
              <p className="text-white text-base">123 Main Street, New York, NY 10001</p>
            </div>
          </div>
        </div>
      )}

      {isEditing && activeTab === "profile" && (
        <div>
          <div className="mb-10">
            <p className="text-white text-base mb-6">Profile Image</p>
            <Avatar size="xl" showEditBadge />
          </div>

          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
              <div>
                <label className="block text-white text-sm mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Jane D."
                  className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-3">Email</label>
                <input
                  type="email"
                  defaultValue="jane@gmail.com"
                  className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-3">
                  Store Name
                </label>
                <input
                  type="text"
                  defaultValue="Ubreakifix Store"
                  className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-3">
                  Store Address
                </label>
                <input
                  type="text"
                  defaultValue="123 Main Street, New York"
                  className="w-full bg-[#0a1628] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-12 sm:px-20 py-3 rounded-lg transition-colors w-full sm:w-auto">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
