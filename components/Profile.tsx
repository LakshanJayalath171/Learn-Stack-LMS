import Image from "next/image";
import React from "react";
import { Camera, MapPin,Link2, SaveCheck} from "lucide-react";

// importing components from shadcn/ui

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const Profile = () => {
  return (
    <div className="px-3 py-5">
      <div>
        <h1 className="text-2xl font-bold text-primary">Public Profile</h1>
        <p className="text-secondary font-light">
          This information will be displayed publicly on your learning profile.
        </p>
      </div>

      <div className="flex items-center justify-start gap-4 mt-5">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-500/70 rounded-full cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300">
            <Camera className="text-secondary" />
          </div>
          <Image
            src="/images/profiles.jpeg"
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full "
          />
        </div>
        <div>
          <div className="flex items-center justify-start gap-2 my-2">
            <button className="btn-primary cursor-pointer">Upload Photo</button>
            <button className="btn-secondary cursor-pointer">
              Remove Photo
            </button>
          </div>

          <p className="text-secondary font-semibold">
            This information will be displayed publicly on your learning
            profile.
          </p>
        </div>
      </div>
      <hr className="text-gray-600/50 my-4" />

      {/* Profile Information */}
      <div className="">
        <div className="flex items-center justify-between gap-2 my-3">
          <div className="flex-1">
            <p className="text-secondary font-medium my-1">Full Name</p>
            <InputGroup className="max-w-xs border border-gray-800 rounded-lg w-full h-full">
              <InputGroupInput placeholder="Alex Json" className="" />
            </InputGroup>
          </div>

          <div className="flex-1">
            <p className="text-secondary font-medium my-1">Username</p>
            <InputGroup className="max-w-xs border border-gray-800 rounded-lg w-full h-full">
              <InputGroupInput placeholder="alex@123" className="" />
            </InputGroup>
          </div>
        </div>

        {/* bio area */}
        <div className="flex items-center justify-between gap-2 my-3">
          <FieldGroup className="max-w-sm w-full h-full">
            <Field>
              <FieldLabel htmlFor="block-end-textarea" className="text-secondary font-medium my-1">Bio</FieldLabel>
              <InputGroup className="border border-gray-800 rounded-lg">
                <InputGroupTextarea
                  id="block-end-textarea"
                  placeholder="Bio..."
                  className="text-secondary font-light "
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText>0/280</InputGroupText>
                  <InputGroupButton
                    variant="default"
                    size="sm"
                    className="ml-auto"
                  >
                    Post
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
              
            </Field>
          </FieldGroup>
        </div>

        {/*  */}
        <div>
            <div className="flex items-center justify-between gap-2 my-3">
          <div className="flex-1">
            <p className="text-secondary font-medium my-1">Location</p>
            <InputGroup className="max-w-xs border border-gray-800 rounded-lg w-full h-full">
              <InputGroupInput placeholder="Florida,USA" className="" />
              <InputGroupAddon>
                <MapPin />
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="flex-1">
            <p className="text-secondary font-medium my-1">Website URL</p>
            <InputGroup className="max-w-xs border border-gray-800 rounded-lg w-full h-full">
              <InputGroupInput placeholder="https://example.com" className="" />
              <InputGroupAddon>
                <Link2 />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
        </div>

        {/*  */}
        <hr className="text-gray-700 my-6" />

        <div className="flex items-end justify-end gap-2">
            <button className="btn-primary cursor-pointer">Cancel</button>
            <button className="btn-secondary cursor-pointer gap-2"><SaveCheck/>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
