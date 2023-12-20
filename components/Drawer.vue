<script setup lang="ts">
const props = defineProps({
    showDrawer: Boolean,
    companyData: Object,
})


const emit = defineEmits(['update:showDrawer']);

const showElement = ref(false);


const toggleElement = (): void => {
    showElement.value = !showElement.value;
};

watch(() => props.showDrawer, (newValue) => {
    showElement.value = newValue;
    toggleElement();
});

</script>

<template>
  <div class="w-[100%] flex flex-col items-center transition-all border-y border-[#a4a4a4] ">
    <div @click="toggleElement"  class="w-full h-20 flex justify-between cursor-pointer">
        <p type="button" class="flex items-center gap-4 font-semibold transition-all group relative rounded-r-xl px-5 z-10 text-psmall lg:text-p uppercase"><NuxtPicture src="/media/images/vifte.png" class="hidden md:block w-5 h-5" />{{ companyData.name }}</p>
        <div class="flex items-center justify-center">
          <p type="button" class="hidden md:flex items-center gap-4 text-xsmall font-semibold transition-all group relative rounded-r-xl px-5 z-10 text-lg hover:bg-purple-dark hover:dark:bg-purple-dark uppercase">{{ companyData.url }}</p>
          <NuxtIcon name="ChevronDown" :class="showElement ? 'rotate-180' : ''" class="transition-all scale-150 text-red" />
        </div>
    </div>
  <transition name="fade">
      <div class="accordion bg-darkgrey dark:bg-white w-full lg:w-full rounded-xl" :style="{ height: showElement ? '600px' : '0' }">
        <div class="px-5 pt-10 flex flex-col lg:flex-row justify-evenly gap-5 w-full">
          <div class="flex flex-col gap-5">            
            <NuxtPicture class="w-[100%]" src="/media/images/toldkammeret.png" />
            <NuxtPicture class="w-[450px]" src="/media/images/toldboden.png" />
          </div>
          <p class="lg:max-w-[60%] text-small text-white dark:text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam tempora ipsum voluptatibus vitae eum saepe optio quaerat blanditiis deleniti libero officia accusantium, dolore exercitationem soluta ex dicta natus aspernatur.</p>
        </div>
      </div>
    </transition>
  </div>
</template>


<style scoped>
  .router-link-active {
    color: #a2bc0c;
  }
   .router-link-exact-active {
    color: #a2bc0c;
  }
.accordion {
  max-height: 800px; /* Set a maximum height for your accordion content */
  overflow: hidden;
  transition: height 0.5s ease-in-out;
  position: relative;
  top: -18px;
  z-index: 1;
}
.draggable {
  cursor: grab;
}
</style>