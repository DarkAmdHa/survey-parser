import { Disclosure } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const navigation = [
  { name: "First Survey Ex-Post", href: "/", current: true },
  { name: "Second Survey Ex-Post", href: "/second", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout() {
  return (
    <>
      <div className="min-h-screen bg-gray-800">
        <Disclosure as="nav" className="border-b border-gray-500 bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center"></div>
                <div className=" -my-px flex space-x-8">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive, isPending }) =>
                        classNames(
                          isActive
                            ? "border-indigo-500 text-white"
                            : "border-transparent text-gray-500 hover:border-indigo-500 hover:text-white",
                          "inline-flex items-center border-b-4 px-1 pt-1 text-sm font-medium transition"
                        )
                      }
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center"></div>
            </div>
          </div>
        </Disclosure>

        <div className="py-10 ">
          <main>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
