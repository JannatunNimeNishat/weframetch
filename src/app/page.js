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
          <div className=" pl-10">
            <h3 className="font-bold text-[16px]">MAIN MENU</h3>

            <div className="mt-6">


              {/* dashboard */}
              <div className="flex items-center gap-5">
                <Image
                  className="cursor-pointer"
                  src='/logo/dashboard.png'
                  alt=""
                  height={28}
                  width={28}
                />
                <h3 className="text-[#464366] text-[18px] font-semibold">Dashboard</h3>
              </div>







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
