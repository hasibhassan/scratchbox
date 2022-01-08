import { Authenticator } from '@aws-amplify/ui-react'
import HomePage from '@layouts/HomePage'
import Logo from '@ui/Logo'
import '@aws-amplify/ui-react/styles.css'

export default function AuthPage() {
  return (
    <>
      {/*
        update by using:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-5v">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* Logo */}

                  <Logo />
                </div>
              </div>
              <div className="hidden md:block"></div>
            </div>
          </div>
        </div>

        <main>
          <div className="pt-36">
            <Authenticator>
              {({ signOut, user }) => (
                <HomePage signOut={signOut} user={user} />
              )}
            </Authenticator>
          </div>
        </main>
      </div>
    </>
  )
}
