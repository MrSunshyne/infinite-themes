<template>
  <div class="">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class=" md:col-span-2">
        <div class="p-10 border space-y-10 bg-surface-400  rounded-md">
          <div class="flex gap-10">
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-100">100</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-200">200</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-300">300</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-400">400</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-500">500</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-600">600</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-700">700</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-800">800</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-900">900</div>
          </div>

          <div class="flex gap-10">
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-100">100</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-200">200</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-300">300</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-400">400</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-500">500</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-600">600</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-700">700</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-800">800</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-900">900</div>
            <div class="w-16 h-16 rounded-md shadow-md grid place-items-center bg-surface-950">950</div>
          </div>
          <div class="flex h-full">
            <div class="flex gap-10 w-[700px] text-verse-100">
              <div class="bg-surface-100 shadow-md grid p-2 text-2xl rounded-2xl w-3/4 h-full">
                Surface 100
                <div class="bg-surface-200 shadow-md grid p-2 text-2xl rounded-2xl w-3/4 h-full">
                  Surface 200
                  <div class="bg-surface-300 shadow-md grid p-2 text-2xl rounded-2xl w-3/4 h-full">
                    Surface 300
                    <div
                      class="bg-surface-400 shadow-md grid p-2 text-2xl rounded-2xl w-3/4 h-full"
                    >Surface 400</div>
                  </div>
                </div>
              </div>
            </div>

            <div class>
              <h1 class="text-verse-100">Playground</h1>
              

              <div class="space-y-2">
                <div class="flex items-center space-surface-5">
                  <div class="bg-surface-500 w-16 h-16 rounded-md shadow-md"></div>

                  <div class="text-verse-100">Brand Color</div>
                </div>
                <div class="flex items-center space-surface-5">
                  <div class="bg-surface-50 w-16 h-16 rounded-md shadow-md"></div>
                  <div class="text-verse-100">Text Color 100</div>
                </div>
                <div class="flex items-center space-surface-5">
                  <div class="bg-surface-100 w-16 h-16 rounded-md shadow-md"></div>
                  <div class="text-verse-200">Text Color 200</div>
                </div>
                <div class="flex items-center space-surface-5">
                  <div class="bg-surface-200 w-16 h-16 rounded-md shadow-md"></div>
                  <div class="text-verse-300">Text Color 300</div>
                </div>
                <div class="flex items-center space-surface-5">
                  <div class="bg-surface-300 w-16 h-16 rounded-md shadow-md"></div>
                  <div class="text-verse-400">Text Color 400</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch }  from 'vue'

// let email = ref('');
// let schemes = ref(['light', 'dim', 'dark']);
let preffered = ref(window.localStorage.getItem('preffered') || 'light');
// let hueValue = ref(window.localStorage.getItem('hueValue') || 168);
// let saturationValue = ref(window.localStorage.getItem('saturationValue') || 90);
// let lightnessValue = ref(window.localStorage.getItem('lightnessValue') || 15);
// let darkThresholdValue = ref(window.localStorage.getItem('darkThresholdValue') || 25);
// let lightThresholdValue = ref(window.localStorage.getItem('lightThresholdValue') || 0);


// const watchHSL = computed(() => {
//   return `--brand-hue:${hueValue.value}; --brand-saturation:${saturationValue.value}%; --brand-lightness:${lightnessValue.value}%; --dark-threshold:${darkThresholdValue.value}%;--light-threshold:${lightThresholdValue.value}%;`
// })


// function setColorScheme(preffered: string): any {
//   document.body.setAttribute('color-scheme', preffered)
// }

// setColorScheme(preffered.value)

// watch(preffered, (n) => {
//   window.localStorage.setItem('preffered', `${preffered.value}`)
//   setColorScheme(n)
// })

// watch(watchHSL, (n) => {
//   document.body.setAttribute('style', `${n}`)

//   window.localStorage.setItem('hueValue', `${hueValue.value}`)
//   window.localStorage.setItem('saturationValue', `${saturationValue.value}`)
//   window.localStorage.setItem('lightnessValue', `${lightnessValue.value}`)
//   window.localStorage.setItem('darkThresholdValue', `${darkThresholdValue.value}`)
//   window.localStorage.setItem('lightThresholdValue', `${lightThresholdValue.value}`)
// }, { immediate: true })


</script>
