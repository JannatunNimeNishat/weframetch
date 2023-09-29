"use client"
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main >
      <div className="flex">
        {/* 1st */}
        <div className="w-1/4 bg-[#15132B] text-white ">
          {/* <div className="col-span-1 bg-gray-500"> */}
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
                className="mt-[80px] mb-[100px] cursor-pointer"
                src={'/logo/increase_your_work_with_kanban.png'}
                width={245}
                height={203}
                alt="banner image"
              />
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="w-full">

          {/* top navigation bar */}
          <div className="bg-[#15132B] py-6 flex items-center justify-between px-5">
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
          <div className="bg-[#0d0b20]">
            {/* school */}
            <div className=" py-7 px-6 text-white ">
              <div className="flex justify-between bg-[#15132B] py-7 px-6 rounded-[14px]">
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
                    <h1 className="font-bold text-[20px]">School November Tasks</h1>
                  </div>
                  <p className="pl-11 pt-1  text-[15px]">Created by Instructor Day on November 31, 2022</p>


                </div>
                {/* 2nd */}
                <div className="flex items-center gap-5">
                  <div>
                    <h1 className="font-bold text-[18px]">Centered Martial Arts</h1>
                    <p className="pr-11 pt-1  text-[13px] text-[#A5A5A5]">Sunnyvale, Ca</p>
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
            </div>
          </div>



        </div>
      </div>
    </main>
  )
}
