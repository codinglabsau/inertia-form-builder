<script setup lang="ts">
import { ref, computed } from 'vue'
import { useColorMode } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next'

// @ts-ignore - gooey types use unresolved path aliases
import {
  TwoColumnLayout,
  TwoColumnLayoutSidebar,
  TwoColumnLayoutSidebarDesktop,
  TwoColumnLayoutSidebarMobile,
  TwoColumnLayoutSidebarTrigger,
  Header,
  Main,
  Switch,
  ScrollArea,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@codinglabsau/gooey'

import Logo from './components/Logo.vue'
import SidebarNavigation from './components/SidebarNavigation.vue'

const mode = useColorMode()
const isDark = computed({
  get: () => mode.value === 'dark',
  set: (val) => {
    mode.value = val ? 'dark' : 'light'
  },
})

const sidebarOpen = ref(false)
</script>

<template>
  <TwoColumnLayout>
    <Header>
      <RouterLink to="/" class="hidden lg:block">
        <div class="flex items-center space-x-2">
          <Logo alt="Inertia Form Builder" class="w-6" />

          <div class="text-xl font-semibold tracking-tight whitespace-nowrap">
            Inertia Form Builder
          </div>
        </div>
      </RouterLink>

      <TwoColumnLayoutSidebarTrigger @click="sidebarOpen = true" />

      <div class="flex w-full justify-end">
        <div class="group flex cursor-pointer items-center space-x-2">
          <Sun class="size-5 text-primary" @click="mode = 'light'" />

          <Switch v-model="isDark" />

          <Moon class="size-5 text-primary" @click="mode = 'dark'" />
        </div>
      </div>
    </Header>

    <TwoColumnLayoutSidebar>
      <TwoColumnLayoutSidebarMobile>
        <Sheet v-model:open="sidebarOpen">
          <SheetContent side="left" class="w-72 p-0">
            <div class="flex h-14 items-center border-b px-4">
              <div class="flex items-center space-x-2">
                <Logo alt="Inertia Form Builder" class="w-6" />

                <div class="font-semibold">Inertia Form Builder</div>
              </div>
            </div>

            <ScrollArea class="h-[calc(100vh-3.5rem)]">
              <SidebarNavigation />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </TwoColumnLayoutSidebarMobile>

      <TwoColumnLayoutSidebarDesktop>
        <ScrollArea class="h-full px-2">
          <SidebarNavigation />
        </ScrollArea>
      </TwoColumnLayoutSidebarDesktop>
    </TwoColumnLayoutSidebar>

    <Main>
      <div class="px-4 sm:px-6 lg:px-8 prose prose-pre">
        <RouterView />
      </div>
    </Main>
  </TwoColumnLayout>
</template>
