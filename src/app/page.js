"use client"
import Image from "next/image";


export default function Home() {
  return (
    <main >
      <div className="flex">
        {/* <div className="grid grid-cols-6 border"> */}
        {/* 1st */}
        <div className="w-[500px] bg-[#15132B] text-white ">
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
          <div className=" px-10">
            <h3 className="font-bold text-[16px]">MAIN MENU</h3>

            <div className="mt-6">


              {/* dashboard */}
              <div className="flex items-center gap-5 py-7 cursor-pointer">
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
              <div className='flex gap-5 w-full   items-center justify-between  cursor-pointer py-7'
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
              <div className='flex gap-5 w-full   items-center justify-between  cursor-pointer py-7'
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
              <div className='flex gap-5 w-full   items-center justify-between  cursor-pointer py-7'
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
              <div className="flex items-center gap-5 py-7 cursor-pointer">
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
              <div className="flex items-center gap-5 py-7 cursor-pointer">
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
              <div className="flex items-center gap-5 py-7 cursor-pointer">
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
              <div className="flex items-center gap-5 py-7 cursor-pointer">
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
              <div className="flex items-center gap-5 py-7 cursor-pointer">
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
        <div className="w-[1575px] bg-sky-400">
          {/* <div className="col-span-5 bg-sky-400"> */}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero deserunt quis error minus ut magni harum? Blanditiis nulla quisquam amet inventore minima asperiores, vel tempore at eaque ea quaerat alias? Explicabo unde placeat deleniti nulla aperiam cumque, libero veniam nihil excepturi molestiae nisi maxime iste consequatur ea esse quia sapiente?
        </div>
      </div>
    </main>
  )
}
