import React, { useState, useEffect } from 'react'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { use } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const navigation = [
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
    ];

    const [current, setCurrent] = useState('header')

    const handleNavClick = (name) => {
        if (current === name) {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 0);
            setCurrent("header");
        }
        else
            setCurrent(name);
    }

    return (
        <Disclosure as="nav" className="bg-gradient-to-bl from-black via-[#397e58] to-black fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <div className="flex items-center">
                        <h2 className='text-2xl font-bold text-white'>
                            Portfolio .
                        </h2>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:ring-white hover:ring-1 focus:ring-1 focus:ring-white focus:outline-none">
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:space-x-4">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => handleNavClick(item.name)}
                                className={classNames(
                                    current === item.name ? 'bg-neutral-900' : '',
                                    'rounded-md px-3 py-2 text-md font-medium text-white hover:bg-neutral-900 hover:text-[#2fbf71]', 'transition-transform duration-300 transform hover:scale-105'
                                )}
                            >
                                {item.name}
                            </a>
                        ))}

                        <a href="#contact"
                            onClick={() => handleNavClick("contact")}
                            className={classNames(
                                current === "contact" ? 'bg-[#2fbf71]' : 'hover:bg-[#2fbf71]',
                                "w-full flex justify-center items-center border-2 border-[#2fbf71] py-1 px-4 rounded-3xl text-md text-white font-medium transition-transform duration-300 transform hover:scale-102"
                            )}>
                            Hire me!
                        </a>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            onClick={() => handleNavClick(item.name)}
                            className={classNames(
                                current === item.name ? 'bg-neutral-900' : '',
                                'block rounded-md px-3 py-2 text-md font-medium text-white hover:bg-neutral-900 hover:text-[#2fbf71]', 'transition-transform duration-300 transform hover:scale-103'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                    <a href="#contact"
                        onClick={() => handleNavClick("contact")}
                        className={classNames(
                            current === "contact" ? 'bg-[#2fbf71]' : 'hover:bg-[#2fbf71]',
                            "w-full flex justify-center items-center border-2 border-[#2fbf71] py-2 px-4 rounded-lg text-md text-white font-medium transition-transform duration-300 transform hover:scale-102"
                        )}
                    >
                        Hire me!
                    </a>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

export default Navbar