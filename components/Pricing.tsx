"use client"
import * as React from "react"
import { format } from "date-fns"
import { ChevronDownIcon ,Tag , HandCoins, BanknoteCheck,WalletCards,Trash,Wallet, Info} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

// importing dialog from ui component

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// importiing field and label from ui component
import { Field, FieldGroup } from "@/components/ui/field"
import { Label } from "@/components/ui/label"


// importing popover from ui component
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


import { useState } from "react";

//importing input and switch from ui component
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

// import native select component
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import CopyButton from "./CopyButton"

const Pricing = () => {

  const [courseModel, setCourseModel] = useState("paid");
  const [coursePrice, setCoursePrice] = useState(0);
  const [date, setDate] = React.useState<Date>()

  return (
    <div className="flex gap-2">
      {/* detail menu */}
      <div className="bg-black/50 flex-3 px-10 py-6 rounded-2xl">
        {/* header */}
        <div>
          <h1 className="text-2xl text-primary font-bold">
            Monetization & Access Strategy
          </h1>
          <p>
            Configure how learners unlock your course. Switch anytime before
            final publication.
          </p>
        </div>
        {/* course model */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          {/* paid course model */}
          <div
            onClick={() => setCourseModel("paid")}
            className={`${courseModel === "paid" ? "bg-primary-soft" : "apple"} rounded-2xl flex items-center justify-center py-6 px-10 cursor-pointer`}
          >
            <div>
              <div className="flex items-center justify-start">
                <div className="p-2 apple rounded-[5px]">
                  <Tag />
                </div>
              </div>
              <div>
                <h1 className="text-lg font-semibold">Paid Course</h1>
                <p className="text-secondary font-light text-xs">
                  Charge a one-time fee for lifetime access, updates, and
                  materials.
                </p>
              </div>
            </div>
          </div>

          {/* free course model */}
          <div
            onClick={() => setCourseModel("free")}
            className={`${courseModel === "free" ? "bg-primary-soft" : "apple"} rounded-2xl flex items-center justify-center py-6 px-10 cursor-pointer`}
          >
            <div className="flex items-center justify-center py-6 px-10">
              <div>
                <div className="flex items-center justify-start">
                  <div className="p-2 apple rounded-[5px] ">
                    <HandCoins />
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Free Course</h1>
                  <p className="text-secondary font-light text-xs">
                    Provide free access to maximize organic reach and build
                    brand audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* add price section */}

        <div className="mt-3 apple rounded-2xl px-6 py-4">
          <div>
            <h1 className="flex items-center justify-start gap-2 font-semibold">
              <BanknoteCheck className="text-special" />
              Standard Base Pricing
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <p className="text-secondary font-light">Course Base Price</p>
              <Input
                placeholder="Enter text"
                className="my-2"
                value={coursePrice}
                onChange={(e) =>
                  setCoursePrice(parseFloat(e.target.value) || 0)
                }
              />
              <p className="text-secondary font-light text-xs">
                Recommended tier for advanced 10+ module engineering courses:
                $79.00 - $129.00
              </p>
            </div>
          </div>
        </div>

        {/* add discount section */}
        <div className="mt-3 apple rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary font-bold flex items-center gap-2">
                <Tag className="text-special" />
                Limited-Time Promotional Launch Discount
              </p>
              <p className="text-secondary font-light">
                Incentivize early registrations during initial public launch
              </p>
            </div>
            <Switch className="cursor-pointer" />
          </div>

          <div className="grid grid-cols-3 gap-5 mt-3">
            {/* discount input fields */}
            <div className="">
              <p className="text-secondary font-light">Discount Scheme</p>
              <div className="grid-cols-3 gap-2 flex items-center justify-start">
                <div>
                  <Input placeholder="Enter Value" />
                </div>
                <div>
                  <NativeSelect>
                    <NativeSelectOption value="percentage">
                      Percentage
                    </NativeSelectOption>
                    <NativeSelectOption value="fixed">Fixed</NativeSelectOption>
                  </NativeSelect>
                </div>
              </div>
            </div>

            <div>
              <p className="text-secondary font-light">Early Bird Pricing</p>
              <div className="">
                <div className="flex items-center justify-start gap-2">
                  <h1 className="text-special font-bold text-2xl">55.00 $</h1>
                  <p className="text-primary font-semibold line-through">
                    88.99 $
                  </p>
                </div>
                <p className="text-amber-300 text-xs">
                  Student saves $27.00 (30% off)
                </p>
              </div>
            </div>

            <div>
              <p className="text-secondary font-light">Promotional Window</p>
              <div>
                <Popover>
                  <PopoverTrigger
                    render={
                      <Button
                        variant={"outline"}
                        data-empty={!date}
                        className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground apple"
                      >
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                        <ChevronDownIcon data-icon="inline-end" />
                      </Button>
                    }
                  />
                  <PopoverContent className="w-auto p-0 apple" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      defaultMonth={date}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>

        {/* coupen code section */}

        <div>
          <div className="apple rounded-2xl px-6 py-4 mt-3">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <WalletCards className="text-special" />
                <p className="text-secondary font-light">Coupon Code</p>
              </div>

              <div>
                <Dialog>
                  <form>
                    <DialogTrigger
                      render={<Button variant="outline">Open Dialog</Button>}
                    />
                    <DialogContent className="sm:max-w-sm bg-black">
                      <DialogHeader>
                        <DialogTitle className="text-primary text-2xl font-bold">
                          Add New Coupon
                        </DialogTitle>
                        <DialogDescription className="text-secondary font-light">
                          Make changes to your profile here. Click save when
                          you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <FieldGroup>
                        <Field>
                          <Label htmlFor="name-1 text-secondary">
                            Coupon Name
                          </Label>
                          <Input
                            id="coupen-name"
                            name="coupen_name"
                            defaultValue="LAUNCH_30"
                          />
                        </Field>
                        <Field>
                          <Label htmlFor="username-1 text-secondary">
                            Coupon Code
                          </Label>
                          <Input
                            id="coupon-code"
                            name="coupon_code"
                            defaultValue="LAUNCH_30"
                          />
                        </Field>

                        <Field>
                          <Label htmlFor="username-1 text-secondary">
                            Coupon Count
                          </Label>
                          <Input
                            id="coupon-count"
                            name="coupon_count"
                            defaultValue="100"
                          />
                        </Field>

                        <Field>
                          <Label htmlFor="username-1 text-secondary">
                            Discount
                          </Label>
                          <Input
                            id="discount"
                            name="discount"
                            defaultValue="30"
                          />
                        </Field>
                      </FieldGroup>
                      <DialogFooter>
                        <DialogClose
                          render={
                            <Button className="btn-primary cursor-pointer">
                              Cancel
                            </Button>
                          }
                        />
                        <Button
                          type="submit"
                          className="btn-secondary cursor-pointer"
                        >
                          Save changes
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>
              </div>
            </div>

            <div>
              {/* Resusable card */}
              <div className="apple rounded-lg flex items-center justify-between gap-5 px-4 py-3 mt-2 ">
                <div className="flex items-center gap-3">
                  <div className="bg-black rounded-lg px-4 py-1 text-xs">
                    LAUNCH_30
                  </div>
                  <p className="text-sm text-primary">30% Discount</p>
                  <p className="text-sm text-secondary">0/100 redeemed</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-400/40 rounded-2xl px-4 py-1 text-xs">
                    Active
                  </div>
                  <div>
                    <CopyButton text="LAUNCH_30" />
                  </div>
                  <div>
                    <Trash className="w-4 h-4 cursor-pointer text-red-400" />
                  </div>
                </div>
              </div>
              <div className="apple rounded-lg flex items-center justify-between gap-5 px-4 py-3 mt-2 ">
                <div className="flex items-center gap-3">
                  <div className="bg-black rounded-lg px-4 py-1 text-xs">
                    LAUNCH_30
                  </div>
                  <p className="text-sm text-primary">30% Discount</p>
                  <p className="text-sm text-secondary">0/100 redeemed</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-400/40 rounded-2xl px-4 py-1 text-xs">
                    Active
                  </div>
                  <div>
                    <CopyButton text="LAUNCH_30" />
                  </div>
                  <div>
                    <Trash className="w-4 h-4 cursor-pointer text-red-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview section */}
        <div className="apple rounded-2xl px-6 py-4 mt-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Wallet className="text-special" />
              Estimated Instructor Payout Per Sale
            </div>
            <p className="text-secondary font-light text-xs">
              Tier-A Creator (85/15 Split)
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-2">

            <div className="apple rounded-lg px-4 py-2">
              <p className="text-secondary font-light text-sm">Course Base Price</p>
              <h1 className="text-2xl font-bold text-primary">$89.99</h1>
            </div>

            <div className="apple rounded-lg px-4 py-2">
              <p className="text-secondary font-light text-sm">Platform Fee (15%)</p>
              <h1 className="text-2xl font-bold text-red-400/80">-$13.50</h1>
            </div>

            <div className="apple rounded-lg px-4 py-2">
              <p className="text-special font-light text-sm">Your Net Earnings</p>
              <h1 className="text-2xl font-bold text-special">$76.49</h1>
            </div>
          </div>

          <p className="text-secondary font-light text-xs flex gap-2 mt-2"><Info className="text-special" size={15} />Payouts are automatically wired directly to your connected Stripe account on the 1st business day of every calendar month.</p>
        </div>
      </div>

      {/* preview */}
      <div></div>
    </div>
  );
};

export default Pricing;
