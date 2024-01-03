"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const Nav = () => {
  const isUserLoggenIn = true;

  const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        { isUserLoggenIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>

            <Link href='/' className='outline_btn'>
              Sign Out
            </Link>

            <Link href='/profile'>
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
          ) : (
            <>
              { Object.values(items).map((item) => (
                  <button
                    type='button'
                    key={item.name}
                    className='black_btn'
                  >
                    Sign in
                  </button>
                ))}
            </>
          )}
        </div>

        {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        { isUserLoggenIn ? (
          <div className='flex'>
            <Image
              src= "/assets/images/logo.svg"
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropDown((prev) => !prev)}
            />

            {toggleDropDown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropDown(false);
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            { Object.values(items).map((item) => (
                <button
                  type='button'
                  key={item.name}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

    </nav>
  )
}

export default Nav
