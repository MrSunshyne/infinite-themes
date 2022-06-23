<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:
    ```
    <html class="h-full bg-surface-50">
    <body class="h-full">
    ```
  -->
  <div class="h-full">
    <TransitionRoot as="template"
      :show="sidebarOpen">
      <Dialog as="div"
        class="relative z-40 md:hidden"
        @close="sidebarOpen = false">
        <TransitionChild as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-surface-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel class="relative max-w-xs w-full bg-surface-50 pt-5 pb-4 flex-1 flex flex-col">
              <TransitionChild as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="absolute top-0 right-0 -mr-14 p-1">
                  <button type="button"
                    class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:bg-surface-600"
                    @click="sidebarOpen = false">
                    <XIcon class="h-6 w-6 text-white"
                      aria-hidden="true" />
                    <span class="sr-only">Close sidebar</span>
                  </button>
                </div>
              </TransitionChild>

              <div class="mt-5 flex-1 h-0 overflow-y-auto">
                <nav class="h-full flex flex-col">
                  <div class="space-y-1">
                    <a v-for="item in navigation"
                      :key="item.name"
                      :href="item.href"
                      :class="[item.current ? 'bg-surface-500 border-verse-600 text-verse-600' : 'border-transparent text-verse-950 hover:bg-surface-50 hover:text-verse-950', 'group border-l-4 py-2 px-3 flex items-center text-base font-medium']"
                      :aria-current="item.current ? 'page' : undefined">
                      <component :is="item.icon"
                        :class="[item.current ? 'text-verse-500' : 'text-verse-800 group-hover:text-verse-900', 'mr-4 flex-shrink-0 h-6 w-6']"
                        aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </div>
                  <div class="mt-auto pt-10 space-y-1">
                    <a v-for="item in secondaryNavigation"
                      :key="item.name"
                      :href="item.href"
                      class="group border-l-4 border-transparent py-2 px-3 flex items-center text-base font-medium text-verse-950 hover:text-verse-950 hover:bg-surface-50">
                      <component :is="item.icon"
                        class="mr-4 h-6 w-6 text-verse-800 group-hover:text-verse-900"
                        aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </div>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="flex-shrink-0 w-14"
            aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <nav class="bg-surface-50 border-r border-surface-200 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto">
        <div class="flex-shrink-0 px-4 flex items-center font-bold text-2xl text-verse-500">
          Front-end MU
        </div>
        <div class="flex-grow mt-5">
          <div class="space-y-1">
            <a v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[item.current ? 'bg-surface-200 border-verse-600 text-verse-600' : 'border-transparent text-verse-950 hover:text-verse-950 hover:bg-surface-300', 'group border-l-4 py-2 px-3 flex items-center text-sm font-medium']">
              <component :is="item.icon"
                :class="[item.current ? 'text-verse-500' : 'text-verse-800 group-hover:text-verse-900', 'mr-3 flex-shrink-0 h-6 w-6']"
                aria-hidden="true" />
              {{ item.name }}
            </a>
          </div>
        </div>
        <div class="flex-shrink-0 block w-full">
          <a v-for="item in secondaryNavigation"
            :key="item.name"
            :href="item.href"
            class="group border-l-4 border-transparent py-2 px-3 flex items-center text-sm font-medium text-verse-950 hover:text-verse-950 hover:bg-surface-50">
            <component :is="item.icon"
              class="text-verse-800 group-hover:text-verse-900 mr-3 h-6 w-6"
              aria-hidden="true" />
            {{ item.name }}
          </a>
        </div>
      </nav>
    </div>

    <!-- Content area -->
    <div class="md:pl-64 bg-surface-100">
      <div class="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
        <div class="sticky top-0 z-10 flex-shrink-0 h-16 px-10 border-b border-surface-200 flex bg-surface-200">
          <button type="button"
            class="border-r border-surface-200 px-4 text-verse-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-surface-500 md:hidden"
            @click="sidebarOpen = true">
            <span class="sr-only">Open sidebar</span>
            <MenuAlt2Icon class="h-6 w-6"
              aria-hidden="true" />
          </button>
          <div class="flex-1 flex justify-between px-4 md:px-0 ">
            <div class="flex-1 flex">
              <form class="w-full flex md:ml-0"
                action="#"
                method="GET">
                <label for="mobile-search-field"
                  class="sr-only">Search</label>
                <label for="desktop-search-field"
                  class="sr-only">Search</label>
                <div class="relative w-full text-verse-800 focus-within:text-verse-950">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <SearchIcon class="flex-shrink-0 h-5 w-5"
                      aria-hidden="true" />
                  </div>
                  <input name="mobile-search-field"
                    id="mobile-search-field"
                    class="bg-surface-300 h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-verse-950 placeholder-surface-800 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-verse-500 sm:hidden"
                    placeholder="Search"
                    type="search" />
                  <input name="desktop-search-field"
                    id="desktop-search-field"
                    class="bg-surface-200 hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-verse-950 placeholder-verse-950 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-verse-500 sm:block "
                    placeholder="Search jobs, applicants, and more"
                    type="search" />
                </div>
              </form>
            </div>
            <div class="ml-4 flex items-center md:ml-6">
              <button type="button"
                class="bg-surface-50 rounded-full p-1 text-verse-800 hover:bg-gray-100 hover:text-verse-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-surface-500">
                <BellIcon class="h-6 w-6"
                  aria-hidden="true" />
                <span class="sr-only">View notifications</span>
              </button>
            </div>
          </div>
        </div>

        <main class="flex-1">
          <div class="relative max-w-4xl mx-auto md:px-8 xl:px-0">
            <div class="pt-10 pb-16">
              <div class="px-4 sm:px-6 md:px-0">
                <h1 class="text-3xl font-extrabold text-verse-950">Settings</h1>
              </div>
              <div class="px-4 sm:px-6 md:px-0">
                <div class="py-6">
                  <!-- Tabs -->
                  <div class="lg:hidden">
                    <label for="selected-tab"
                      class="sr-only">Select a tab</label>
                    <select id="selected-tab"
                      name="selected-tab"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-surface-300 focus:outline-none focus:ring-surface-500 focus:border-verse-500 sm:text-sm rounded-md">
                      <option v-for="tab in tabs"
                        :key="tab.name"
                        :selected="tab.current">{{ tab.name }}</option>
                    </select>
                  </div>
                  <div class="hidden lg:block">
                    <div class="border-b border-surface-200">
                      <nav class="-mb-px flex space-x-8">
                        <a v-for="tab in tabs"
                          :key="tab.name"
                          :href="tab.href"
                          :class="[tab.current ? 'border-verse-500 text-verse-600' : 'border-transparent text-verse-900 hover:border-surface-300 hover:text-verse-700', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']">
                          {{ tab.name }}
                        </a>
                      </nav>
                    </div>
                  </div>

                  <!-- Description list with inline editing -->
                  <div class="mt-10 divide-y divide-surface-200">
                    <div class="space-y-1">
                      <h3 class="text-lg leading-6 font-medium text-verse-950">Profile</h3>
                      <p class="max-w-2xl text-sm text-verse-900">This information will be displayed publicly so be
                        careful what you share.</p>
                    </div>
                    <div class="mt-6">
                      <dl class="divide-y divide-surface-200">
                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt class="text-sm font-medium text-verse-900">Name</dt>
                          <dd class="mt-1 flex text-sm text-verse-950 sm:mt-0 sm:col-span-2">
                            <span class="flex-grow">Chelsea Hagon</span>
                            <span class="ml-4 flex-shrink-0">
                              <button type="button"
                                class="bg-surface-50 rounded-md font-medium text-verse-600 hover:text-verse-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-surface-500 px-2 py-1">Update</button>
                            </span>
                          </dd>
                        </div>
                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                          <dt class="text-sm font-medium text-verse-900">Photo</dt>
                          <dd class="mt-1 flex text-sm text-verse-950 sm:mt-0 sm:col-span-2">
                            <span class="flex-grow">
                              <img class="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="" />
                            </span>
                            <span class="ml-4 flex-shrink-0 flex items-start space-x-4">
                              <button type="button"
                                class="bg-surface-50 rounded-md font-medium text-verse-600 hover:text-verse-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-surface-500 px-2 py-1">Update</button>
                              <span class="text-verse-300"
                                aria-hidden="true">|</span>
                              <button type="button"
                                class="bg-surface-50 rounded-md font-medium text-verse-600 hover:text-verse-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-surface-500 px-2 py-1">Remove</button>
                            </span>
                          </dd>
                        </div>
                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                          <dt class="text-sm font-medium text-verse-900">Email</dt>
                          <dd class="mt-1 flex text-sm text-verse-950 sm:mt-0 sm:col-span-2">
                            <span class="flex-grow">chelsea.hagon@example.com</span>
                            <span class="ml-4 flex-shrink-0">
                              <button type="button"
                                class="bg-surface-50 rounded-md font-medium text-verse-600 hover:text-verse-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-surface-500 px-2 py-1">Update</button>
                            </span>
                          </dd>
                        </div>
                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-surface-200">
                          <dt class="text-sm font-medium text-verse-900">Job title</dt>
                          <dd class="mt-1 flex text-sm text-verse-950 sm:mt-0 sm:col-span-2">
                            <span class="flex-grow">Human Resources Manager</span>
                            <span class="ml-4 flex-shrink-0">
                              <button type="button"
                                class="bg-surface-50 rounded-md font-medium text-verse-600 hover:text-verse-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-surface-500 px-2 py-1">Update</button>
                            </span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div class="mt-10 divide-y divide-surface-200">
                    <div class="space-y-1">
                      <h3 class="text-lg leading-6 font-medium text-verse-950">Account</h3>
                      <p class="max-w-2xl text-sm text-verse-900">Manage how information is displayed on your account.
                      </p>
                    </div>
                    <div class="mt-6">
                      <dl class="divide-y divide-surface-200">
                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt class="text-sm font-medium text-verse-900">Language</dt>
                          <dd class="mt-1 flex text-sm text-verse-950 sm:mt-0 sm:col-span-2">
                            <span class="flex-grow">English</span>
                            <span class="ml-4 flex-shrink-0">
                              <button type="button"
                                class="bg-surface-50 rounded-md font-medium text-verse-600 hover:text-verse-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-surface-500 px-2 py-1">Update</button>
                            </span>
                          </dd>
                        </div>
                        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                          <dt class="text-sm font-medium text-verse-900">Date format</dt>
                          <dd class="mt-1 flex text-sm text-verse-950 sm:mt-0 sm:col-span-2">
                            <span class="flex-grow">DD-MM-YYYY</span>
                            <span class="ml-4 flex-shrink-0 flex items-start space-x-4">
                              <button type="button"
                                class="bg-surface-50 rounded-md font-medium text-verse-600 hover:text-verse-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-surface-500 px-2 py-1">Update</button>
                              <span class="text-verse-300"
                                aria-hidden="true">|</span>
                              <button type="button"
                                class="bg-surface-50 rounded-md font-medium text-verse-600 hover:text-verse-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-surface-500 px-2 py-1">Remove</button>
                            </span>
                          </dd>
                        </div>
                        <SwitchGroup as="div"
                          class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                          <SwitchLabel as="dt"
                            class="text-sm font-medium text-verse-900"
                            passive> Automatic timezone </SwitchLabel>
                          <dd class="mt-1 flex text-sm text-verse-950 sm:mt-0 sm:col-span-2">
                            <Switch v-model="automaticTimezoneEnabled"
                              :class="[automaticTimezoneEnabled ? 'bg-surface-600' : 'bg-surface-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-surface-500 sm:ml-auto']">
                              <span aria-hidden="true"
                                :class="[automaticTimezoneEnabled ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-surface-50 shadow transform ring-0 transition ease-in-out duration-200']" />
                            </Switch>
                          </dd>
                        </SwitchGroup>
                        <SwitchGroup as="div"
                          class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-surface-200">
                          <SwitchLabel as="dt"
                            class="text-sm font-medium text-verse-900"
                            passive> Auto-update applicant data </SwitchLabel>
                          <dd class="mt-1 flex text-sm text-verse-950 sm:mt-0 sm:col-span-2">
                            <Switch v-model="autoUpdateApplicantDataEnabled"
                              :class="[autoUpdateApplicantDataEnabled ? 'bg-surface-600' : 'bg-surface-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-surface-500 sm:ml-auto']">
                              <span aria-hidden="true"
                                :class="[autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-surface-50 shadow transform ring-0 transition ease-in-out duration-200']" />
                            </Switch>
                          </dd>
                        </SwitchGroup>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, Switch, SwitchGroup, SwitchLabel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  BellIcon,
  BriefcaseIcon,
  ChatIcon,
  CogIcon,
  DocumentSearchIcon,
  HomeIcon,
  MenuAlt2Icon,
  QuestionMarkCircleIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { SearchIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: false },
  { name: 'Jobs', href: '#', icon: BriefcaseIcon, current: false },
  { name: 'Applications', href: '#', icon: DocumentSearchIcon, current: false },
  { name: 'Messages', href: '#', icon: ChatIcon, current: false },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Settings', href: '#', icon: CogIcon, current: true },
]
const secondaryNavigation = [
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Logout', href: '#', icon: CogIcon },
]
const tabs = [
  { name: 'General', href: '#', current: true },
  { name: 'Password', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Plan', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
]

const sidebarOpen = ref(false)
const automaticTimezoneEnabled = ref(true)
const autoUpdateApplicantDataEnabled = ref(false)
</script>