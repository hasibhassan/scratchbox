import { Fragment, useEffect, useState } from 'react'
import classNames from '@utils/classNames'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import IDE from '@sections/IDE'
import Slideover from '@sections/Slideover'
import Logo from '@ui/Logo'
import { withAuthenticator, View, Image, useTheme } from '@aws-amplify/ui-react'
import fetchCode from '@utils/fetchCode'
import { useSandpack } from '@codesandbox/sandpack-react'

function HomePage({ signOut, user }) {
  const { sandpack } = useSandpack()
  const [savedUserCode, setSavedUserCode] = useState('')
  // const [open, setOpen] = useState(false)
  const userNavigation = [
    // { name: 'Settings', onClick: () => setOpen(!open) },
    { name: 'Sign Out', onClick: () => signOut() },
  ]
  const navigation = []

  useEffect(() => {
    let savedCode = fetchCode(user.username)
    savedCode.then((data) => {
      console.log('saveeuser code in useeffect 1', savedUserCode)
      console.log('data in useeffect 1', data)

      // @ts-ignore
      setSavedUserCode(data)
    })
  }, [])

  useEffect(() => {
    if (savedUserCode && savedUserCode !== 'not found') {
      console.log('savedusercode in useeffect2', savedUserCode)

      sandpack.updateFile(sandpack.activePath, savedUserCode)
    }
  }, [savedUserCode])

  return (
    <>
      {/* <Slideover open={open} setOpen={setOpen} /> */}
      {/*
        update by using:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-5v">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Logo />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown tablet/desktop */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={`https://avatars.dicebear.com/api/initials/${user.username}.svg?chars=1`}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    onClick={item.onClick}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://avatars.dicebear.com/api/initials/${user.username}.svg?chars=1`}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      {/* <div className="text-base font-medium text-white">
                        {user.name}
                      </div> */}
                      <div className="text-sm font-medium text-gray-400">
                        {user.username}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        onClick={item.onClick}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
          <div>
            <IDE />
          </div>
        </main>
      </div>
    </>
  )
}

export default withAuthenticator(HomePage, {
  loginMechanisms: ['email'],
  components: {
    Header() {
      const { tokens } = useTheme()

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <a href="/">
            <Image alt="Scratchbox logo" src="logo-black.svg" />
          </a>
        </View>
      )
    },
  },
})
