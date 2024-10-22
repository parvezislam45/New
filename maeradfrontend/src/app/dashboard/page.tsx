"use client"


import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";


const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <aside className=" text-black fixed -mx-16  w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <div className="h-screen w-64">
          <div className="h-full rounded-br-lg rounded-tr-lg bg-white shadow-md flex flex-col justify-between">
            <div className="flex-1">
              <div className="">
                <div className="flex items-center gap-4 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-stop-btn-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.5-7A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />{" "}
                  </svg>
                  <h1 className="text-sm font-bold">Maerad Dashboard</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-[80px] cursor-pointer bg-base-100 rounded-t-none p-2 w-full">
                        <div className="gap-3 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            fill="currentColor"
                            className="bi bi-tag-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          </svg>
                          <span className="text-sm font-semibold">
                            Products
                          </span>
                        </div>
                        <span className="group-open:rotate-180 transition-transform">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            width="12"
                            height="12"
                            fill="currentColor"
                          >
                            <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                          </svg>
                        </span>
                      </summary>
                      <ul className="bg-base-100 p-2">
                        <li>
                          <a>Link 1</a>
                        </li>
                        <li>
                          <a>Link 2</a>
                        </li>
                      </ul>
                    </details>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-[93px] cursor-pointer bg-base-100 rounded-t-none p-2 w-full">
                        <div className="gap-3 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            fill="currentColor"
                            className="bi bi-cart-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                          </svg>
                          <span className="text-sm font-semibold">Orders</span>
                        </div>
                        <span className="group-open:rotate-180 transition-transform">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            width="12"
                            height="12"
                            fill="currentColor"
                          >
                            <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                          </svg>
                        </span>
                      </summary>
                      <ul className="bg-base-100 p-2">
                        <li>
                          <a>Link 1</a>
                        </li>
                        <li>
                          <a>Link 2</a>
                        </li>
                      </ul>
                    </details>
                  </div>
                </div>
                <div className="flex gap-3 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
                    viewBox="0 0 640 512"
                  >
                    <path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z" />
                  </svg>
                  <h1 className="text-sm font-bold">Customers</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <details className="group">
                      <summary className="flex items-center gap-[74px] cursor-pointer bg-base-100 rounded-t-none p-2">
                        <div className="gap-3 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            fill="currentColor"
                            className="bi bi-calendar2-x-fill"
                            viewBox="0 0 16 16"
                          >
                            {" "}
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-6.6 5.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z" />{" "}
                          </svg>
                          <span className="text-sm font-semibold">
                            Discounts
                          </span>
                        </div>

                        <span className="group-open:rotate-180 transition-transform">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            width="12"
                            height="12"
                            fill="currentColor"
                          >
                            <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                          </svg>
                        </span>
                      </summary>
                      <ul className="bg-base-100 p-2">
                        <li>
                          <a>Link 1</a>
                        </li>
                        <li>
                          <a>Link 2</a>
                        </li>
                      </ul>
                    </details>
                  </div>
                </div>
                <div className="flex gap-3 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
                    fill="currentColor"
                    className="bi bi-calendar2-range-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM10 7a1 1 0 0 0 0 2h5V7h-5zm-4 4a1 1 0 0 0-1-1H1v2h4a1 1 0 0 0 1-1z" />{" "}
                  </svg>
                  <h1 className="text-sm font-bold">Content</h1>
                </div>
                <div className="flex gap-3 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
                    fill="currentColor"
                    className="bi bi-front"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5z" />{" "}
                  </svg>
                  <h1 className="text-sm font-bold">Translations</h1>
                </div>
                <div className="flex gap-3 p-2">
                  <svg
                    fill="none"
                    width={15}
                    height={15}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      d="M3 3h8v8H3V3zm6 6V5H5v4h4zm9 4h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3zM15 3h6v8h-8V3h2zm4 6V5h-4v4h4zM5 13h6v8H3v-8h2zm4 6v-4H5v4h4z"
                      fill="currentColor"
                    />{" "}
                  </svg>
                  <h1 className="text-sm font-bold">Apps</h1>
                </div>
                <div className="flex gap-3 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <g>
                      {" "}
                      <path fill="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />{" "}
                    </g>{" "}
                  </svg>
                  <h1 className="text-sm font-bold">Configurations</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <details className="group">
                  <summary className="flex items-center justify-between gap-[80px] cursor-pointer bg-base-100 rounded-t-none p-2 w-full">
                    <div className="gap-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        fill="currentColor"
                        className="bi bi-tag-fill rounded-full"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      </svg>

                      <span className="text-sm font-semibold">Products</span>
                    </div>
                    <span className="group-open:rotate-180 transition-transform dropdown dropdown-center" tabIndex={0}
      role="button">
                        
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    >
      <li>
       
          Profile
        
      </li>
      <li>Settings</li>
      <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/login' })}> <li>Logout</li></button>
     
    </ul>
                </details>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="p-5 xl:ml-60">
        <div className=" mx-auto grid gap-5 grid-cols-1 md:grid-cols-5 mt-4">
          <div className="col-span-4 mt-14">
            {session?.user ? (
              <>
                <h1 className="text-black font-bold text-sm">
                  Hello there, {session?.user?.name}
                </h1>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm font-bold block">
                      Here is some information we gathered about your store
                    </p>
                  </div>
                  <select
                    className="w-48 h-12 px-1 text-xs font-bold"
                    name="cars"
                    id="cars"
                    defaultValue="Default Channels"
                  >
                    <option className="text-xs font-bold" value="volvo">
                      Default Channels
                    </option>
                    <option className="text-xs font-bold" value="volvo">
                      Channel-PLN
                    </option>
                  </select>
                </div>
              </>
            ) : (
              <h1>Not found</h1>
            )}
          </div>
          <div className="w-60 mt-10">
            <h1 className="text-md font-bold text-center">Activity</h1>
            <h1 className="text-xs font-bold text-center mt-10">
              No Activity Found
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
