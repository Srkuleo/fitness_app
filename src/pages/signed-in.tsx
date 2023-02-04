import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Tab, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const SignedIn: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <div className="flex h-screen w-screen flex-col">
          <div className="relative flex h-3/5 flex-col items-center gap-10 bg-gradient-to-br from-slate-900 to-gray-400">
            <div className="text-center">
              <p className="mt-28 mb-10 text-4xl text-yellow-50">
                Welcome to NoteSet, you are signed in!
              </p>
              <p className="text-xl text-yellow-50">
                Choose your workout for today:
              </p>
            </div>
            <MyTabs />
            <MyDropdown />
          </div>
          <div className="h-2/5 bg-slate-100"></div>
        </div>
      </main>
    </>
  );
};

function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">
          Tab 1
        </Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

function MyDropdown() {
  return (
    <Menu>
      <Menu.Button className="absolute right-36 top-6 rounded-lg bg-green-500 py-2 px-7 font-semibold text-yellow-50 transition-all duration-200 ease-in hover:bg-green-700/90">
        Options
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" absolute top-18 right-36 flex flex-col rounded-lg bg-green-500 text-yellow-50">
          <Menu.Item>
            <Link
              className="bg-blue-500 px-10 py-1 transition-all duration-150 ease-in hover:bg-blue-700"
              href="/"
            >
              Edit
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              className="bg-blue-500 px-10 py-1 transition-all duration-150 ease-in hover:bg-blue-700"
              href="/"
            >
              View logs
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              className="bg-blue-500 px-10 py-1 transition-all duration-150 ease-in hover:bg-blue-700"
              href="/"
            >
              Sign out
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default SignedIn;
