"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  console.log(sidebar);
  return (
    <main >
      <div className="lg:flex">

        {/* 1st left navigation lg device*/}
        <div className="hidden lg:block w-1/4 bg-[#15132B] text-white ">

          {/* logo */}
          <div className="flex gap-5  justify-center  py-11">
            <h3 className="text-[24px]">weframetech</h3>
            <Image
              className="cursor-pointer"
              src='/logo/hamburgermenu.png'
              alt=""
              height={40}
              width={40}
            />
          </div>
          {/* navigation */}
          <div className=" px-6">
            <h3 className="font-bold text-[16px]">MAIN MENU</h3>

            <div className="mt-6">


              {/* dashboard */}
              <div className="flex items-center gap-5 py-5 cursor-pointer">
                <Image
                  className="cursor-pointer"
                  src='/logo/dashboard.png'
                  alt=""
                  height={28}
                  width={28}
                />
                <h3 className="text-[#464366] text-[18px] font-semibold">Dashboard</h3>
              </div>

              {/* email */}
              <div className='flex gap-5 w-full   items-center justify-between  cursor-pointer py-5'
              >
                <div className='flex gap-5'>
                  <Image
                    src={'/logo/email.png'}
                    alt='email Icon'
                    height={28}
                    width={28}
                  ></Image>
                  <h3 className="text-[#464366] text-[18px] font-semibold">Email</h3>
                </div>

                <div className="flex gap-3">
                  <div className="h-[29px] w-[29px] rounded-full bg-[#5ECFFF] flex items-center justify-center">
                    <p className="">17</p>
                  </div>
                  <Image src={'/logo/down.png'} alt='down'
                    height={28}
                    width={28}
                  ></Image>
                </div>


              </div>


              {/* chat */}
              <div className="flex items-center gap-5 py-7 cursor-pointer">
                <Image
                  className="cursor-pointer"
                  src='/logo/chat.png'
                  alt=""
                  height={28}
                  width={28}
                />
                <h3 className="text-[#7879F1] text-[18px] font-semibold">Chat</h3>
              </div>

              {/* Kanban */}
              <div className='flex gap-5 w-full   items-center justify-between  cursor-pointer py-5'
              >
                <div className='flex gap-5'>
                  <Image
                    src={'/logo/kanban.png'}
                    alt='kanban Icon'
                    height={28}
                    width={28}
                  ></Image>
                  <h3 className="text-[#6418C3] text-[18px] font-semibold">Kanban</h3>
                </div>

                <Image src={'/logo/up.png'} alt='down'
                  height={28}
                  width={28}
                ></Image>



              </div>

              {/* contact */}
              <div className='flex gap-5 w-full   items-center justify-between  cursor-pointer py-5'
              >
                <div className='flex gap-5'>
                  <Image
                    src={'/logo/contact.png'}
                    alt='contact Icon'
                    height={28}
                    width={28}
                  ></Image>
                  <h3 className="text-[#7879F1] text-[18px] font-semibold">Contact</h3>
                </div>

                <div className="h-[35px] w-[63px] rounded-full bg-[#E328AF] flex items-center justify-center">
                  <p className="">NEW</p>
                </div>
              </div>

              {/* calendar */}
              <div className="flex items-center gap-5 py-5 cursor-pointer">
                <Image
                  className="cursor-pointer"
                  src='/logo/calendar.png'
                  alt=""
                  height={28}
                  width={28}
                />
                <h3 className="text-[#7879F1] text-[18px] font-semibold">Calendar</h3>
              </div>
              {/* courses */}
              <div className="flex items-center gap-5 py-5 cursor-pointer">
                <Image
                  className="cursor-pointer"
                  src='/logo/courses.png'
                  alt=""
                  height={28}
                  width={28}
                />
                <h3 className="text-[#7879F1] text-[18px] font-semibold">Courses</h3>
              </div>

              {/* shop */}
              <div className="flex items-center gap-5 py-5 cursor-pointer">
                <Image
                  className="cursor-pointer"
                  src='/logo/shop.png'
                  alt=""
                  height={28}
                  width={28}
                />
                <h3 className="text-[#7879F1] text-[18px] font-semibold">Shop</h3>
              </div>

              {/* invoices */}
              <div className="flex items-center gap-5 py-5 cursor-pointer">
                <Image
                  className="cursor-pointer"
                  src='/logo/invoices.png'
                  alt=""
                  height={28}
                  width={28}
                />
                <h3 className="text-[#7879F1] text-[18px] font-semibold">Invoices</h3>
              </div>

              {/* setting */}
              <div className="flex items-center gap-5 py-5 cursor-pointer">
                <Image
                  className="cursor-pointer"
                  src='/logo/setting.png'
                  alt=""
                  height={28}
                  width={28}
                />
                <h3 className="text-[#7879F1] text-[18px] font-semibold">Setting</h3>
              </div>

              {/* increase your work with kanban */}
              <Image
                className="mt-[20px]  cursor-pointer"
                src={'/logo/increase_your_work_with_kanban.png'}
                width={245}
                height={203}
                alt="banner image"
              />
            </div>
          </div>
        </div>

        {/* 1st left navigation sm device*/}
        {
          sidebar &&
          <div className={
            ` w-full bg-[#15132B] text-white  z-40
            ${sidebar ? 'translate-x-0' : 'translate-x-14 ease-in-out duration-300'}
            `
          }>

            {/* logo */}
            <div className="flex justify-between py-3 px-5 ">
              <h3 className="text-[18px]">weframetech</h3>
              <Image
                onClick={() => setSidebar(!sidebar)}
                className="cursor-pointer"
                src='/logo/hamburgermenu.png'
                alt=""
                height={30}
                width={30}
              />
            </div>

            {/* search bar */}
            <div className="bg-[#211A75] my-3  w-[260px] h-[40px] mx-auto rounded-[46px] text-[#AAAAAA] flex gap-3 items-center pl-8">
              <Image
                height={20}
                width={20}
                src={'/logo/search.png'}
                alt=""
              />
              <input className="bg-transparent w-8/12" type="text" placeholder="Search here" />
            </div>

            {/* notification */}
            <div className="flex justify-between px-8 py-3">
              {/* alam */}
              <div className="relative cursor-pointer">
                <Image
                  src={'/navbar/bell.png'}
                  height={24}
                  width={24}
                  alt=""
                />
                <div className="h-[18px] w-[18px] rounded-full bg-[#5ECFFF] flex items-center justify-center absolute -top-2 left-3">
                  <p className="text-[12px] font-semibold">12</p>
                </div>
              </div>

              {/* course */}
              <div className="relative cursor-pointer">
                <Image
                  src={'/logo/courses.png'}
                  height={24}
                  width={24}
                  alt=""
                />
                <div className="h-[18px] w-[18px] rounded-full bg-[#5ECFFF] flex items-center justify-center absolute -top-2 left-3">
                  <p className="text-[12px] font-semibold">5</p>
                </div>
              </div>

              {/* check */}
              <div className="relative cursor-pointer">
                <Image
                  src={'/navbar/checkbox.png'}
                  height={24}
                  width={24}
                  alt=""
                />
                <div className="h-[18px] w-[18px] rounded-full bg-[#5ECFFF] flex items-center justify-center absolute -top-2 left-3">
                  <p className="text-[12px] font-semibold">5</p>
                </div>
              </div>

              {/* file */}
              <div className="relative cursor-pointer">
                <Image
                  src={'/navbar/office.png'}
                  height={24}
                  width={24}
                  alt=""
                />
                <div className="h-[18px] w-[18px] rounded-full bg-[#E328AF] flex items-center justify-center absolute -top-2 left-3">
                  <p className="text-[12px] font-semibold">!</p>
                </div>
              </div>
            </div>

            {/* navigation */}
            <div className=" px-6 pt-5">
              <h3 className="font-bold text-[16px]">MAIN MENU</h3>

              <div className="mt-2">

                {/* dashboard */}
                <div className="flex items-center gap-5 py-4 cursor-pointer">
                  <Image
                    className="cursor-pointer"
                    src='/logo/dashboard.png'
                    alt=""
                    height={28}
                    width={28}
                  />
                  <h3 className="text-[#464366] text-[18px] font-semibold">Dashboard</h3>
                </div>

                {/* email */}
                <div className='flex gap-5 w-full   items-center justify-between  cursor-pointer py-4'
                >
                  <div className='flex gap-5'>
                    <Image
                      src={'/logo/email.png'}
                      alt='email Icon'
                      height={28}
                      width={28}
                    ></Image>
                    <h3 className="text-[#464366] text-[18px] font-semibold">Email</h3>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-[29px] w-[29px] rounded-full bg-[#5ECFFF] flex items-center justify-center">
                      <p className="">17</p>
                    </div>
                    <Image src={'/logo/down.png'} alt='down'
                      height={28}
                      width={28}
                    ></Image>
                  </div>


                </div>


                {/* chat */}
                <div className="flex items-center gap-5 py-4 cursor-pointer">
                  <Image
                    className="cursor-pointer"
                    src='/logo/chat.png'
                    alt=""
                    height={28}
                    width={28}
                  />
                  <h3 className="text-[#7879F1] text-[18px] font-semibold">Chat</h3>
                </div>

                {/* Kanban */}
                <div className='flex gap-5 w-full   items-center justify-between  cursor-pointer py-4'
                >
                  <div className='flex gap-5'>
                    <Image
                      src={'/logo/kanban.png'}
                      alt='kanban Icon'
                      height={28}
                      width={28}
                    ></Image>
                    <h3 className="text-[#6418C3] text-[18px] font-semibold">Kanban</h3>
                  </div>

                  <Image src={'/logo/up.png'} alt='down'
                    height={28}
                    width={28}
                  ></Image>



                </div>

                {/* contact */}
                <div className='flex gap-5 w-full   items-center justify-between  cursor-pointer py-4'
                >
                  <div className='flex gap-5'>
                    <Image
                      src={'/logo/contact.png'}
                      alt='contact Icon'
                      height={28}
                      width={28}
                    ></Image>
                    <h3 className="text-[#7879F1] text-[18px] font-semibold">Contact</h3>
                  </div>

                  <div className="h-[35px] w-[63px] rounded-full bg-[#E328AF] flex items-center justify-center">
                    <p className="">NEW</p>
                  </div>
                </div>

                {/* calendar */}
                <div className="flex items-center gap-5 py-4 cursor-pointer">
                  <Image
                    className="cursor-pointer"
                    src='/logo/calendar.png'
                    alt=""
                    height={28}
                    width={28}
                  />
                  <h3 className="text-[#7879F1] text-[18px] font-semibold">Calendar</h3>
                </div>
                {/* courses */}
                <div className="flex items-center gap-5 py-4 cursor-pointer">
                  <Image
                    className="cursor-pointer"
                    src='/logo/courses.png'
                    alt=""
                    height={28}
                    width={28}
                  />
                  <h3 className="text-[#7879F1] text-[18px] font-semibold">Courses</h3>
                </div>

                {/* shop */}
                <div className="flex items-center gap-5 py-4 cursor-pointer">
                  <Image
                    className="cursor-pointer"
                    src='/logo/shop.png'
                    alt=""
                    height={28}
                    width={28}
                  />
                  <h3 className="text-[#7879F1] text-[18px] font-semibold">Shop</h3>
                </div>

                {/* invoices */}
                <div className="flex items-center gap-5 py-4 cursor-pointer">
                  <Image
                    className="cursor-pointer"
                    src='/logo/invoices.png'
                    alt=""
                    height={28}
                    width={28}
                  />
                  <h3 className="text-[#7879F1] text-[18px] font-semibold">Invoices</h3>
                </div>

                {/* setting */}
                <div className="flex items-center gap-5 py-4 cursor-pointer">
                  <Image
                    className="cursor-pointer"
                    src='/logo/setting.png'
                    alt=""
                    height={28}
                    width={28}
                  />
                  <h3 className="text-[#7879F1] text-[18px] font-semibold">Setting</h3>
                </div>

                {/* increase your work with kanban */}
                <Image
                  className="mt-[20px]  cursor-pointer"
                  src={'/logo/increase_your_work_with_kanban.png'}
                  width={245}
                  height={203}
                  alt="banner image"
                />
              </div>
            </div>
          </div>
        }

        {/* 2nd */}
        {
          !sidebar &&
          <div className="w-full">

            {/* top navigation bar sm devices */}
            <div className="bg-[#15132B] py-3 flex lg:hidden items-center gap-3 justify-between px-5">

              {/* hamburgermenu */}
              <Image
                height={40}
                width={40}
                src={'/logo/hamburgermenu.png'}
                alt=""
                onClick={() => setSidebar(!sidebar)}
              />

              {/* notifications and profile */}
              <div className=" flex items-center justify-between gap-3">


                <h3 className="text-white">weframetech</h3>

                {/* profile */}
                <div className="flex justify-between items-center gap-3">
                  <Image
                    className="cursor-pointer"
                    height={40}
                    width={40}
                    src={'/navbar/profilePicture.png'}
                    alt=""
                  />
                  <div>
                    <small className="text-[10px]   text-white">Instructor Day</small>
                    <small className="text-[10px] text-[#7879F1]">Super Admin</small>
                  </div>

                  <Image
                    className="cursor-pointer"
                    height={8}
                    width={15}
                    src={'/navbar/arrow.png'}
                    alt=""
                  />
                </div>




              </div>


            </div>


            {/* top navigation bar lg device */}
            <div className=" bg-[#15132B] py-6 hidden lg:flex items-center justify-between px-5">
              {/* search bar */}
              <div className="bg-[#211A75] w-[260px] h-[50px] rounded-[46px] text-[#AAAAAA] flex gap-3 items-center pl-8">
                <Image
                  height={20}
                  width={20}
                  src={'/logo/search.png'}
                  alt=""
                />
                <input className="bg-transparent w-8/12" type="text" placeholder="Search here" />
              </div>
              {/* notifications and profile */}
              <div className="flex items-center justify-between gap-5">
                <Link href={'#'} className="text-[#6418C3] font-bold text-[16px] underline">OTHER MENUS</Link>

                {/* alam */}
                <div className="relative cursor-pointer">
                  <Image
                    src={'/navbar/bell.png'}
                    height={24}
                    width={24}
                    alt=""
                  />
                  <div className="h-[18px] w-[18px] rounded-full bg-[#5ECFFF] flex items-center justify-center absolute -top-2 left-3">
                    <p className="text-[12px] font-semibold">12</p>
                  </div>
                </div>

                {/* course */}
                <div className="relative cursor-pointer">
                  <Image
                    src={'/logo/courses.png'}
                    height={24}
                    width={24}
                    alt=""
                  />
                  <div className="h-[18px] w-[18px] rounded-full bg-[#5ECFFF] flex items-center justify-center absolute -top-2 left-3">
                    <p className="text-[12px] font-semibold">5</p>
                  </div>
                </div>

                {/* check */}
                <div className="relative cursor-pointer">
                  <Image
                    src={'/navbar/checkbox.png'}
                    height={24}
                    width={24}
                    alt=""
                  />
                  <div className="h-[18px] w-[18px] rounded-full bg-[#5ECFFF] flex items-center justify-center absolute -top-2 left-3">
                    <p className="text-[12px] font-semibold">5</p>
                  </div>
                </div>

                {/* file */}
                <div className="relative cursor-pointer">
                  <Image
                    src={'/navbar/office.png'}
                    height={24}
                    width={24}
                    alt=""
                  />
                  <div className="h-[18px] w-[18px] rounded-full bg-[#E328AF] flex items-center justify-center absolute -top-2 left-3">
                    <p className="text-[12px] font-semibold">!</p>
                  </div>
                </div>

                {/* language */}
                <div className="bg-[#211A75] w-[150px] h-[50px] rounded-[46px]  flex gap-2  items-center justify-center">
                  <Image
                    height={20}
                    width={20}
                    src={'/navbar/united-states.png'}
                    alt=""
                  />
                  <h3 className="text-white">ENGLISH</h3>
                  <Image
                    className="cursor-pointer"
                    height={8}
                    width={15}
                    src={'/navbar/arrow.png'}
                    alt=""
                  />
                </div>

                <div className="h-[56px] w-[1px] bg-[#1E1C3A]" />

                {/* profile */}
                <div className="flex justify-between items-center gap-5">
                  <Image
                    className="cursor-pointer"
                    height={57}
                    width={57}
                    src={'/navbar/profilePicture.png'}
                    alt=""
                  />
                  <div>
                    <h3 className="text-[12px] font-bold text-white">Instructor Day</h3>
                    <small className="text-[#7879F1]">Super Admin</small>
                  </div>

                  <Image
                    className="cursor-pointer"
                    height={8}
                    width={15}
                    src={'/navbar/arrow.png'}
                    alt=""
                  />
                </div>




              </div>


            </div>

            {/* content */}
            <div className="bg-[#0d0b20] w-full ">
              {/* school */}
              <div className=" py-7 px-6 text-white ">
                <div className=" bg-[#15132B] py-7 px-4 rounded-[14px]">
                  {/* 1st */}
                  <div className="flex justify-between">
                    {/* 1st */}
                    <div>
                      <div className="flex gap-3 items-center">
                        <Image
                          className="cursor-pointer"
                          height={30}
                          width={30}
                          src={'/content/btnback.png'}
                          alt=""
                        />
                        <h1 className="font-bold text-[16px]">School November Tasks</h1>
                      </div>
                      <p className="pl-11 pt-1  text-[14px]">Created by Instructor Day on November 31, 2022</p>


                    </div>
                    {/* 2nd */}
                    <div className="flex items-center gap-3">
                      <div>
                        <h1 className="font-bold text-[15px]">Centered Martial Arts</h1>
                        <p className="pr-11 pt-1  text-[12px] text-[#A5A5A5]">Sunnyvale, Ca</p>
                      </div>
                      <div className="w-[38px] h-[38px] bg-white rounded-[14px] flex items-center justify-center">
                        <Image
                          height={24}
                          width={24}
                          src={'/content/logo_1.png'}
                          alt=""
                        />
                      </div>

                      <Image
                        height={24}
                        width={24}
                        src={'/content/threeDots.png'}
                        alt=""
                      />

                    </div>
                  </div>


                  {/* 2nd */}
                  <div className="ml-10 pt-[27px] flex gap-3">
                    {/* img */}
                    <div className="flex ">

                      <div className="h-[35px] w-[35px] rounded-full flex items-center justify-center bg-[#C4C4C4]">
                        <Image
                          className=" rounded-full"
                          width={30}
                          height={30}
                          src={'/content/p1.jpg'}
                          alt=""
                        />

                      </div>

                      <div className="-ml-3 h-[35px] w-[35px] rounded-full flex items-center justify-center bg-white">
                        <Image
                          className=" rounded-full"
                          width={30}
                          height={30}
                          src={'/content/segun_adebayo.jpg'}
                          alt=""
                        />

                      </div>
                      <div className="-ml-3 h-[35px] w-[35px] rounded-full flex items-center justify-center bg-white">
                        <Image
                          className=" rounded-full"
                          width={30}
                          height={30}
                          src={'/content/p3.jpeg'}
                          alt=""
                        />

                      </div>
                      <div className="-ml-3 h-[35px] w-[35px] rounded-full flex items-center justify-center bg-white">
                        <Image
                          className=" rounded-full"
                          width={30}
                          height={30}
                          src={'/content/p4.jpg'}
                          alt=""
                        />

                      </div>
                      <div className="-ml-3 h-[35px] w-[35px] rounded-full flex items-center justify-center bg-[#E328AF]">
                        <p className="text-white">+4</p>

                      </div>


                    </div>

                    {/* buttons */}
                    <div className="flex gap-8 w-full ">
                      {/* buttons */}
                      <div className="flex  gap-3">
                        {/* invite people */}
                        <div className="flex items-center gap-2 bg-[#6418C3] w-[163px] h-[42px] rounded-[14px] px-2 py-1 cursor-pointer">
                          <Image
                            className=" rounded-full"
                            width={24}
                            height={24}
                            src={'/content/add-friend.png'}
                            alt=""
                          />
                          <p className="font-bold">Invite People</p>
                        </div>

                        {/* private */}
                        <div className="flex justify-center items-center  bg-transparent w-[89px] h-[42px] border border-[#7879F1] rounded-[14px] cursor-pointer">

                          <p className="font-bold">Private</p>
                        </div>
                        {/* Edit */}
                        <div className="flex justify-center items-center  bg-[#7879F1] w-[78px] h-[42px] border border-[#7879F1] rounded-[14px] cursor-pointer">

                          <p className="font-bold">Edit</p>
                        </div>

                        {/* 45 Comments */}
                        <div className="flex items-center gap-2 bg-transparent border border-[#7879F1] w-[163px] h-[42px] rounded-[14px] px-2 py-1 cursor-pointer">
                          <Image
                            className=" rounded-full"
                            width={24}
                            height={24}
                            src={'/content/comments.png'}
                            alt=""
                          />
                          <p className="font-bold">45 Comments</p>
                        </div>
                      </div>
                      {/* progress */}
                      <div className="flex items-center  w-11/12">
                        <p className="text-[14px]">Total Progress 60%</p>
                        <div className="w-full px-4 lg:w-6/12">
                          <div className="mb-0">
                            <div className="bg-[#1E1C3A] relative h-[10px] w-full rounded-2xl">
                              <div
                                className="bg-[#6418C3] absolute top-0 left-0 h-full w-1/2 rounded-2xl"
                              ></div>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>


                  </div>

                </div>

              </div>
              {/* cards */}

              {/* <div className="w-full overflow-x-auto"> */}
              <div className="w-full  ">
                {/* cards head */}
                <div className="w-full ">
                  {/* <div className="max-w-xl overflow-x-auto"> */}
                  <div className="flex justify-between gap-6 px-6 py-5 ">
                    {/* todo */}
                    <div className="flex items-center  justify-between w-[250px] ">
                      <h3 className="text-white font-bold">To-Do List (24)</h3>
                      <Image
                        height={49}
                        width={49}
                        src={'/cards/btnAdd.png'}
                        alt=""
                      />
                    </div>

                    {/* in progress */}
                    <div className="flex items-center justify-between w-[250px]">
                      <h3 className="text-white font-bold">In Progress (2)</h3>
                      <Image
                        height={49}
                        width={49}
                        src={'/cards/btnAdd_1.png'}
                        alt=""
                      />
                    </div>

                    {/* Done */}
                    <div className="flex items-center justify-between w-[250px]">
                      <h3 className="text-white font-bold">Done (3)</h3>
                      <Image
                        height={49}
                        width={49}
                        src={'/cards/btnAdd_1.png'}
                        alt=""
                      />
                    </div>
                    {/* Revised */}
                    <div className="flex items-center justify-between w-[250px]">
                      <h3 className="text-white font-bold">Revised (0)</h3>
                      <Image
                        height={49}
                        width={49}
                        src={'/cards/btnAdd_1.png'}
                        alt=""
                      />
                    </div>









                  </div>



                </div>

                {/* all cards */}
                <div className="px-6 pb-8 grid grid-cols-4 gap-5">
                  {/* c1 */}
                  <div className=" text-white w-[250px] h-[200px] bg-[#211A75] rounded-[14px] px-5 py-5">

                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-[10px] w-[10px] rounded-full bg-[#FFAB2D]"
                          />
                          <small className="text-[#FFAB2D]">Impotent</small>
                        </div>

                      </div>
                      <Image
                        className="cursor-pointer"
                        height={20}
                        width={20}
                        src={'/cards/threeDots.png'}
                        alt=""
                      />
                    </div>

                    <p className="text-[12px] py-2 mt-2  font-semibold">Create sign up sheet for holiday student/parent conferences.</p>
                    {/* progress */}
                    <div className="w-full  lg:w-11/12 py-3">
                      <div className="mb-0">
                        <div className="bg-[#1E1C3A] relative h-[10px] w-full rounded-2xl">
                          <div
                            className="bg-[#FFAB2D] absolute top-0 left-0 h-full w-1/3 rounded-2xl"
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* card footer */}
                    <div className="flex justify-between py-3">
                      {/* img */}
                      <div className="flex ">

                        <div className="h-[25px] w-[25px] rounded-full flex items-center justify-center bg-[#C4C4C4]">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p1.jpg'}
                            alt=""
                          />

                        </div>

                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/segun_adebayo.jpg'}
                            alt=""
                          />

                        </div>
                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p3.jpeg'}
                            alt=""
                          />

                        </div>
                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p4.jpg'}
                            alt=""
                          />

                        </div>


                      </div>
                      {/*  */}
                      <div className="flex items-center gap-1">
                        <Image
                          height={12}
                          width={12}
                          src={'/cards/clock.png'}
                          alt=""
                        />
                        <small className="text-[#A5A5A5]">Due in 4 days</small>
                      </div>
                    </div>


                  </div>


                  {/* c2 */}
                  <div className=" text-white w-[250px] h-[200px] bg-[#211A75] rounded-[14px] px-5 py-5">

                    {/* card header */}
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-[10px] w-[10px] rounded-full bg-[#5ECFFF]"
                          />
                          <small className="text-[#5ECFFF]">Video</small>
                        </div>

                      </div>
                      <Image
                        className="cursor-pointer"
                        height={20}
                        width={20}
                        src={'/cards/threeDots.png'}
                        alt=""
                      />
                    </div>

                    {/* card body */}
                    <p className="text-[12px] py-2 mt-2  font-semibold">Create sparring tutorial video for the weekly class.</p>
                    {/* progress */}
                    <div className="w-full  lg:w-11/12 py-3">
                      <div className="mb-0">
                        <div className="bg-[#1E1C3A] relative h-[10px] w-full rounded-2xl">
                          <div
                            className="bg-[#5ECFFF] absolute top-0 left-0 h-full w-2/3 rounded-2xl"
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* card footer */}
                    <div className="flex justify-between py-3">
                      {/* img */}
                      <div className="flex ">

                        <div className="h-[25px] w-[25px] rounded-full flex items-center justify-center bg-[#C4C4C4]">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p1.jpg'}
                            alt=""
                          />

                        </div>

                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/segun_adebayo.jpg'}
                            alt=""
                          />

                        </div>
                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p3.jpeg'}
                            alt=""
                          />

                        </div>



                      </div>
                      {/*  */}
                      <div className="flex items-center gap-1">
                        <Image
                          height={12}
                          width={12}
                          src={'/cards/clock.png'}
                          alt=""
                        />
                        <small className="text-[#A5A5A5]">Due in 4 days</small>
                      </div>
                    </div>


                  </div>

                  {/* c3 */}
                  <div className=" text-white w-[250px] h-[200px] bg-[#211A75] rounded-[14px] px-5 py-5">

                    {/* card header */}
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-[10px] w-[10px] rounded-full bg-[#FF4A55]"
                          />
                          <small className="text-[#FF4A55]">BUG FIXING</small>
                        </div>

                      </div>
                      <Image
                        className="cursor-pointer"
                        height={20}
                        width={20}
                        src={'/cards/threeDots.png'}
                        alt=""
                      />
                    </div>

                    {/* card body */}
                    <p className="text-[12px] py-2 mt-2  font-semibold">Action Button needed for Google Maps visits.</p>
                    {/* progress */}
                    <div className="w-full  lg:w-11/12 py-3">
                      <div className="mb-0">
                        <div className="bg-[#1E1C3A] relative h-[10px] w-full rounded-2xl">
                          <div
                            className="bg-[#FF4A55] absolute top-0 left-0 h-full w-full rounded-2xl"
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* card footer */}
                    <div className="flex justify-between py-3">
                      {/* img */}
                      <div className="flex ">

                        <div className="h-[25px] w-[25px] rounded-full flex items-center justify-center bg-[#C4C4C4]">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p1.jpg'}
                            alt=""
                          />

                        </div>

                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/segun_adebayo.jpg'}
                            alt=""
                          />

                        </div>
                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p3.jpeg'}
                            alt=""
                          />

                        </div>



                      </div>
                      {/*  */}
                      <div className="flex items-center gap-1">
                        <Image
                          height={12}
                          width={12}
                          src={'/cards/clock.png'}
                          alt=""
                        />
                        <small className="text-[#A5A5A5]">Due in 4 days</small>
                      </div>
                    </div>


                  </div>

                  {/* c4 */}
                  <div className=" text-white w-[250px] h-[90px] bg-[#211A75] rounded-[14px] px-5 py-5">
                    <div className=" h-[50px] rounded-[14px] border border-dashed border-[#7879F1] bg-[#15132B]">

                    </div>
                  </div>


                  {/* c5 */}
                  <div className=" text-white w-[250px] h-[200px] bg-[#211A75] rounded-[14px] px-5 py-5">

                    {/* card header */}
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-[10px] w-[10px] rounded-full bg-[#E328AF]"
                          />
                          <small className="text-[#E328AF]">Instructor Meeting</small>
                        </div>

                      </div>
                      <Image
                        className="cursor-pointer"
                        height={20}
                        width={20}
                        src={'/cards/threeDots.png'}
                        alt=""
                      />
                    </div>

                    {/* card body */}
                    <p className="text-[12px] py-2 mt-2  font-semibold">Plan holiday demonstration program. Create outline.</p>
                    {/* progress */}
                    <div className="w-full  lg:w-11/12 py-3">
                      <div className="mb-0">
                        <div className="bg-[#1E1C3A] relative h-[10px] w-full rounded-2xl">
                          <div
                            className="bg-[#E328AF] absolute top-0 left-0 h-full w-2/4 rounded-2xl"
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* card footer */}
                    <div className="flex justify-between py-3">
                      {/* img */}
                      <div className="flex ">

                        <div className="h-[25px] w-[25px] rounded-full flex items-center justify-center bg-[#C4C4C4]">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p1.jpg'}
                            alt=""
                          />

                        </div>

                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/segun_adebayo.jpg'}
                            alt=""
                          />

                        </div>
                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p3.jpeg'}
                            alt=""
                          />

                        </div>



                      </div>
                      {/*  */}
                      <div className="flex items-center gap-1">
                        <Image
                          height={12}
                          width={12}
                          src={'/cards/clock.png'}
                          alt=""
                        />
                        <small className="text-[#A5A5A5]">Due in 4 days</small>
                      </div>
                    </div>


                  </div>

                  {/* c-6 */}
                  <div className="bg-[#07051A] rounded-[14px]  w-[250px] h-[200px] ">

                    <div className=" rotate-6 translate-x-6 translate-y-9  text-white w-[250px] h-[200px] bg-[#211A75] rounded-[14px] px-5 py-5">

                      {/* card header */}
                      <div className="flex justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <div
                              className="h-[10px] w-[10px] rounded-full bg-[#FF4A55]"
                            />
                            <small className="text-[#FF4A55]">BUGS FIXING</small>
                          </div>

                        </div>
                        <Image
                          className="cursor-pointer"
                          height={20}
                          width={20}
                          src={'/cards/threeDots.png'}
                          alt=""
                        />
                      </div>

                      {/* card body */}
                      <p className="text-[12px] py-2 mt-2  font-semibold">Payment gateway needs reauthorization.</p>
                      {/* progress */}
                      <div className="w-full  lg:w-11/12 py-3">
                        <div className="mb-0">
                          <div className="bg-[#1E1C3A] relative h-[10px] w-full rounded-2xl">
                            <div
                              className="bg-[#FF4A55] absolute top-0 left-0 h-full w-11/12 rounded-2xl"
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* card footer */}
                      <div className="flex justify-between py-3">
                        {/* img */}
                        <div className="flex ">

                          <div className="h-[25px] w-[25px] rounded-full flex items-center justify-center bg-[#C4C4C4]">
                            <Image
                              className=" rounded-full"
                              width={20}
                              height={20}
                              src={'/content/p1.jpg'}
                              alt=""
                            />

                          </div>

                          <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                            <Image
                              className=" rounded-full"
                              width={20}
                              height={20}
                              src={'/content/segun_adebayo.jpg'}
                              alt=""
                            />

                          </div>
                          <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                            <Image
                              className=" rounded-full"
                              width={20}
                              height={20}
                              src={'/content/p3.jpeg'}
                              alt=""
                            />

                          </div>



                        </div>
                        {/*  */}
                        <div className="flex items-center gap-1">
                          <Image
                            height={12}
                            width={12}
                            src={'/cards/clock.png'}
                            alt=""
                          />
                          <small className="text-[#A5A5A5]">Due in 4 days</small>
                        </div>
                      </div>


                    </div>
                  </div>


                  {/* c7 */}
                  <div className=" text-white w-[250px] h-[180px] bg-[#211A75] rounded-[14px] px-5 py-5">

                    {/* card header */}
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-[10px] w-[10px] rounded-full bg-[#38E25D]"
                          />
                          <small className="text-[#38E25D]">Database</small>
                        </div>

                      </div>
                      <Image
                        className="cursor-pointer"
                        height={20}
                        width={20}
                        src={'/cards/threeDots.png'}
                        alt=""
                      />
                    </div>

                    {/* card body */}
                    <p className="text-[12px] py-2 mt-2  font-semibold">Update new instructor photos.</p>
                    {/* progress */}
                    <div className="w-full  lg:w-11/12 py-3">
                      <div className="mb-0">
                        <div className="bg-[#1E1C3A] relative h-[10px] w-full rounded-2xl">
                          <div
                            className="bg-[#38E25D] absolute top-0 left-0 h-full w-full rounded-2xl"
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* card footer */}
                    <div className="flex justify-between py-3">
                      {/* img */}
                      <div className="flex ">

                        <div className="h-[25px] w-[25px] rounded-full flex items-center justify-center bg-[#C4C4C4]">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p1.jpg'}
                            alt=""
                          />

                        </div>

                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/segun_adebayo.jpg'}
                            alt=""
                          />

                        </div>
                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p3.jpeg'}
                            alt=""
                          />

                        </div>



                      </div>
                      {/*  */}
                      <div className="flex items-center gap-1">
                        <Image
                          height={12}
                          width={12}
                          src={'/cards/clock.png'}
                          alt=""
                        />
                        <small className="text-[#A5A5A5]">Due in 4 days</small>
                      </div>
                    </div>


                  </div>

                  {/* c8 */}
                  <div className="">
                  </div>

                  {/* c9 */}
                  <div className="  text-white w-[250px] h-[200px] bg-[#211A75] rounded-[14px] px-5 py-5">

                    {/* card header */}
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-[10px] w-[10px] rounded-full bg-[#38E25D]"
                          />
                          <small className="text-[#38E25D]">Database</small>
                        </div>

                      </div>
                      <Image
                        className="cursor-pointer"
                        height={20}
                        width={20}
                        src={'/cards/threeDots.png'}
                        alt=""
                      />
                    </div>

                    {/* card body */}
                    <p className="text-[12px] py-2 mt-2  font-semibold">Determine how many boards need to be ordered for testing and demo.</p>
                    {/* progress */}
                    <div className="w-full  lg:w-11/12 py-3">
                      <div className="mb-0">
                        <div className="bg-[#1E1C3A] relative h-[10px] w-full rounded-2xl">
                          <div
                            className="bg-[#38E25D] absolute top-0 left-0 h-full w-1/3 rounded-2xl"
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* card footer */}
                    <div className="flex justify-between py-3">
                      {/* img */}
                      <div className="flex ">

                        <div className="h-[25px] w-[25px] rounded-full flex items-center justify-center bg-[#C4C4C4]">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p1.jpg'}
                            alt=""
                          />

                        </div>

                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/segun_adebayo.jpg'}
                            alt=""
                          />

                        </div>
                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p3.jpeg'}
                            alt=""
                          />

                        </div>



                      </div>
                      {/*  */}
                      <div className="flex items-center gap-1">
                        <Image
                          height={12}
                          width={12}
                          src={'/cards/clock.png'}
                          alt=""
                        />
                        <small className="text-[#A5A5A5]">Due in 4 days</small>
                      </div>
                    </div>


                  </div>
                  {/* c10 */}
                  <div className="">

                  </div>

                  {/* c11 */}
                  <div className="  text-white w-[250px] h-[200px] bg-[#211A75] rounded-[14px] px-5 py-5">

                    {/* card header */}
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-[10px] w-[10px] rounded-full bg-[#E328AF]"
                          />
                          <small className="text-[#E328AF]">Instructor Meeting</small>
                        </div>

                      </div>
                      <Image
                        className="cursor-pointer"
                        height={20}
                        width={20}
                        src={'/cards/threeDots.png'}
                        alt=""
                      />
                    </div>

                    {/* card body */}
                    <p className="text-[12px] py-2 mt-2  font-semibold">Review/correct yellow belt techniques.</p>
                    {/* progress */}
                    <div className="w-full  lg:w-11/12 py-3">
                      <div className="mb-0">
                        <div className="bg-[#1E1C3A] relative h-[10px] w-full rounded-2xl">
                          <div
                            className="bg-[#E328AF] absolute top-0 left-0 h-full w-full rounded-2xl"
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* card footer */}
                    <div className="flex justify-between py-3">
                      {/* img */}
                      <div className="flex ">

                        <div className="h-[25px] w-[25px] rounded-full flex items-center justify-center bg-[#C4C4C4]">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p1.jpg'}
                            alt=""
                          />

                        </div>

                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/segun_adebayo.jpg'}
                            alt=""
                          />

                        </div>
                        <div className="-ml-3 h-[25px] w-[25px] rounded-full flex items-center justify-center bg-white">
                          <Image
                            className=" rounded-full"
                            width={20}
                            height={20}
                            src={'/content/p3.jpeg'}
                            alt=""
                          />

                        </div>



                      </div>
                      {/*  */}
                      <div className="flex items-center gap-1">
                        <Image
                          height={12}
                          width={12}
                          src={'/cards/clock.png'}
                          alt=""
                        />
                        <small className="text-[#A5A5A5]">Due in 4 days</small>
                      </div>
                    </div>


                  </div>

                  <div className="hidden"></div>
                </div>


              </div>



            </div>


          </div>
        }

      </div>
    </main>
  )
}
