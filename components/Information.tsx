//importing lucid react icons
import { TvMinimalPlay , ImageUp , CircleCheck, Info} from 'lucide-react';

// importing input group component from shadcn/ui
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

// importing select component from shadcn/ui
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { course_categories } from '@/constant';

// importing text area component from shadcn/ui
import { Textarea } from "@/components/ui/textarea"


const Information = () => {
  return (
    <div className="bg-black/50 w-full h-full px-10 py-6 rounded-2xl">
      {/* header */}
      <div className="">
        <h1 className="text-primary font-bold text-2xl ">Course Details</h1>
        <p className="text-secondary font-light ">
          Basic details, media, and categorization for your course
        </p>
      </div>

      {/*  input section */}
      <div>
        {/*title input div */}
        <div className="w-full h-full my-3">
          <p className="my-1">
            Course Title<span className="text-special">*</span>
          </p>
          <InputGroup className="max-w-xs">
            <InputGroupInput
              placeholder="Advanced React Patterns & Architecture"
              className="w-full h-full p-3"
            />
          </InputGroup>
        </div>
        {/* description input div */}
        <div className="w-full h-full my-3">
          <p className="my-1">
            Course Description<span className="text-special">*</span>
          </p>
          <InputGroup className="max-w-xs">
            <InputGroupInput
              placeholder="Learn advanced React patterns and architecture techniques."
              className="w-full h-full p-3"
            />
          </InputGroup>
        </div>

        {/* category select div */}
        <div className="grid grid-cols-2 gap-3">
          <div className="apple rounded-2xl px-3 py-4 ">
            <h1 className="text-primary font-semibold">Select Category</h1>

            {/* select category */}
            <div className="grid grid-cols-2 gap-3">
              {/* category */}
              <div className="w-full h-full mt-2">
                <span className="text-secondary font-light my-1 text-xs">
                  Category
                </span>
                <NativeSelect>
                  {course_categories.map((category) => (
                    <NativeSelectOption key={category.id} value={category.id}>
                      {category.name}
                    </NativeSelectOption>
                  ))}
                </NativeSelect>
              </div>
              {/* sub category */}
              <div className="w-full h-full mt-2">
                <span className="text-secondary font-light my-1 text-xs">
                  Sub Category
                </span>
                <NativeSelect className="">
                  <NativeSelectOption value="">
                    Select status
                  </NativeSelectOption>
                  <NativeSelectOption value="todo">Todo</NativeSelectOption>
                  <NativeSelectOption value="in-progress">
                    In Progress
                  </NativeSelectOption>
                  <NativeSelectOption value="done">Done</NativeSelectOption>
                  <NativeSelectOption value="cancelled">
                    Cancelled
                  </NativeSelectOption>
                </NativeSelect>
              </div>
            </div>

            <div></div>
          </div>

          {/* select language and difficulty */}
          <div className="apple rounded-2xl px-3 py-4 ">
            <h1 className="text-primary font-semibold">Other Details</h1>

            <div className="grid grid-cols-2 gap-3">
              {/* category */}
              <div className="w-full h-full mt-2">
                <span className="text-secondary font-light my-1 text-xs">
                  Difficulty
                </span>
                <NativeSelect>
                  <NativeSelectOption value="Beginner">
                    Beginner
                  </NativeSelectOption>
                  <NativeSelectOption value="Intermediate">
                    Intermediate
                  </NativeSelectOption>
                  <NativeSelectOption value="Advanced">
                    Advanced
                  </NativeSelectOption>
                </NativeSelect>
              </div>
              {/* sub category */}
              <div className="w-full h-full mt-2">
                <span className="text-secondary font-light my-1 text-xs">
                  Language
                </span>
                <NativeSelect className="">
                  <NativeSelectOption value="todo">Chinesse</NativeSelectOption>
                  <NativeSelectOption value="in-progress">
                    English
                  </NativeSelectOption>
                  <NativeSelectOption value="done">Tamil</NativeSelectOption>
                  <NativeSelectOption value="cancelled">
                    Spanish
                  </NativeSelectOption>
                </NativeSelect>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>

      {/* text area for description */}

      <div className="mt-3">
        <p className="text-secondary font-light">Course Description</p>
        <Textarea placeholder="Enter description..." />
      </div>

      {/* thumbnail section */}

      <div className="mt-3">
        <h1 className="text-primary font-light">Course Thumbnail & Media</h1>

        <div className="grid grid-cols-2 gap-3">
          {/* thumbnail */}
          <div className=" rounded-2xl border border-dashed border-[#2ED8CF] w-full h-full mt-2 flex items-center justify-center px-10 py-6">
            <div className='text-center cursor-pointer'>
              <div className="flex items-center justify-center">
                <div className="p-2 rounded-full bg-primary-soft">
                  <ImageUp className="text-special w-10 h-10" />
                </div>
              </div>
              <p className="text-primary font-semibold">Drag & drop thumbnail here</p>
              <p className="text-secondary font-light text-xs">PNG, JPG or WebP up to 5MB (16:9, 1280x720px)</p>
            </div>
          </div>

          {/* media */}
          <div className="apple rounded-2xl mt-2 px-4 py-3 w-full h-full">
            <div className="flex items-center justify-start my-1">
              <h1 className="text-primary font-semibold flex items-center justify-start gap-2"><TvMinimalPlay className="text-special"/>Course Media</h1>
            </div>
            <p className='text-secondary font-light'>Introduce potential students to your course with an engaging 2-minute video pitch.</p>
            {/* input */}
            <div className="my-2">
              <InputGroup className="max-w-xs mt-2">
                <InputGroupInput
                  placeholder="Enter media URL"
                  className="w-full h-full p-3"
                />
              </InputGroup>
            </div>

            <p className="text-secondary font-light flex items-center justify-center gap-2"><Info size={16}/>Video preview will be generated automatically</p>
          </div>
        </div>

      </div>

      {/* What Will Students Learn section */}

      <div className="mt-3 py-6">
        <div >
          <p className="text-primary font-medium">Prerequisites & Tags</p>
        </div>

        <div className="apple rounded-2xl flex items-center justify-start px-4 py-2 mt-2">
          <div className='bg-primary-soft text-special rounded-2xl px-3 py-1 cursor-pointer'>JavaScript ES6+</div>
        </div>
      </div>
    </div>
  );
}

export default Information