import React from "react";

import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

import { Switch } from "@/components/ui/switch"

import { CircleCheck, EyeOffIcon } from "lucide-react";


const Account = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl text-primary font-bold">Account Settings</h1>
        <p className="text-secondary font-light">
          Manage your login credentials, security preferences, and account
          status.
        </p>
      </div>

      {/* Email section */}
      <div className="px-2 py-4 rounded-2xl apple">
        <div>
          <h1 className="text-lg font-semibold">Email Address</h1>
          <p className="text-sm text-secondary font-light">Primary Email</p>
        </div>
        <InputGroup className="mt-2">
          <InputGroupInput
            placeholder="Email Address"
            className="border-gray-700 py-5 px-4"
          />
          <InputGroupAddon align="inline-end">
            <CircleCheck className="text-special" />
          </InputGroupAddon>
        </InputGroup>
      </div>
      {/* password section */}
      <div className="px-2 py-4 rounded-2xl apple mt-2">
        <div>
          <h1 className="text-lg font-semibold">Password</h1>
          <p className="text-sm text-secondary font-light">
            Enter Current Password
          </p>
        </div>
        <div>
          <Field className="px-3 py-2">
            <InputGroup>
              <InputGroupInput
                id="inline-end-input"
                type="password"
                placeholder="Enter password"
              />
              <InputGroupAddon
                align="inline-end"
                className="cursor-pointer px-3"
              >
                <EyeOffIcon />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="w-full">
            <p className="text-sm text-secondary font-light">New Password</p>
            <Field className="px-3 py-2">
              <InputGroup>
                <InputGroupInput
                  id="inline-end-input"
                  type="password"
                  placeholder="Enter password"
                />
                <InputGroupAddon
                  align="inline-end"
                  className="cursor-pointer px-3"
                >
                  <EyeOffIcon />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>

          <div className="w-full">
            <p className="text-sm text-secondary font-light">
              Confirm New Password
            </p>
            <Field className="px-3 py-2">
              <InputGroup>
                <InputGroupInput
                  id="inline-end-input"
                  type="password"
                  placeholder="Enter password"
                />
                <InputGroupAddon
                  align="inline-end"
                  className="cursor-pointer px-3"
                >
                  <EyeOffIcon />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>
        </div>

        <div className="flex items-end justify-end">
          <button className="btn-primary cursor-pointer">Save Changes</button>
        </div>
      </div>

      {/* Language and Region */}

      <div className="apple rounded-2xl px-3 py-2 mt-2">
        <div>
          <h1 className="text-primary font-bold">Language and Region</h1>
          <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2">
            <div className="min-w-0">
              <p className="text-sm text-secondary font-light">Language</p>
              <div className="mt-2 ">
                <select className="w-full h-full bg-primary-soft rounded-lg focus:ring-0 px-3 py-3">
                  <option className="text-black">Urdu</option>
                  <option className="text-black">English</option>
                  <option className="text-black">Chinese</option>
                  <option className="text-black">Spanish</option>
                  <option className="text-black">Tamil</option>
                </select>
              </div>
            </div>

            <div className="min-w-0">
              <p className="text-sm text-secondary font-light">Time Zone</p>

              <div>
                <select className="w-full h-full bg-primary-soft rounded-lg focus:ring-0 px-3 py-3 mt-2">
                  <option className="text-black">Pakistan Standard Time</option>
                  <option className="text-black">Greenwich Mean Time</option>
                  <option className="text-black">Central European Time</option>
                  <option className="text-black">Eastern Time</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2FA section */}
      <div className="apple rounded-2xl px-2 py-3 mt-3">
        <h1 className="text-primary font-bold">Two-Factor Authentication (2FA)</h1>
        <div className="flex items-center justify-between">

          <div><p className="text-secondary font-light">Add an extra layer of security to your account by requiring more than just your password to sign in.</p></div>
          <div className="flex items-center justify-center"><Switch id="2fa"/></div>
        </div>
      </div>

      <div className="apple rounded-2xl px-2 py-3 mt-3">
        <h1 className="text-red-500/40 font-bold">Deactivate My Account</h1>
        <p className="text-secondary font-light">Permanently remove your account and all associated data. This action cannot be undone.</p>

        <div className="mt-3">
          <button className="px-6 py-3 rounded-2xl bg-red-600/50 cursor-pointer">Deactivate My Account</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
