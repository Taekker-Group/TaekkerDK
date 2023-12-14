<script setup>
import img from '../public/media/images/gravel.png';
import vifte from '../public/media/images/navvifte.png';

import { ref } from 'vue';

const currentImageIndex = ref(0);
const imageContainer = ref(null);

const changeImage = (increment) => {
  currentImageIndex.value += increment;
  if (currentImageIndex.value < 0) {
    currentImageIndex.value = 0;
  } else if (currentImageIndex.value >= images.length) {
    currentImageIndex.value = images.length - 1;
  }
};

const images = [
    img,
    vifte,
  // Add other image paths as needed
];

const goToImage = (index) => {
  currentImageIndex.value = index;
};

const handleScroll = () => {
  const container = imageContainer.value;
  const containerWidth = container.offsetWidth;
  const scrollPosition = container.scrollLeft;
  const imageIndex = Math.round(scrollPosition / containerWidth);
  currentImageIndex.value = imageIndex;
};

onMounted(() => {
  imageContainer.value.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="flex flex-col gap-10 mb-52">
      <div>
          <img src="../public/media/images/header.png" alt="">
      </div>
      <div class="">
          <p class="w-full p-10 lg:w-1/2 leading-8 text-justify lg:translate-x-1/2 text-psm text-[#4c443f]">Med liv, indlevelse og ærlighed går vi forrest i projekter der gør en forskel på den lange bane. Vi vægter variation og detaljerigdom i vores arbejde, der skal fortælle historier og inspirere. Arbejde, der får hjertet til at slå lidt hurtigere. Igennem vilje og vedholdenhed finder vi balance mellem passion, hensyn og forretning. Vi arbejder med mennesker og for mennesker.</p>
          <div class="lg:max-h-[300px]">
              <p class="relative left-[-600px] text-[200px] font-medium text-[#d7d7d7] select-none">TÆKKER</p>
              <p class="relative bottom-24 lg:bottom-36 text-[40px] lg:text-[68px] font-light text-[#6a6a6a] select-none pl-[5%]">FORBINDELSER</p>
          </div>
      </div>

      <div class="bg-rosa w-screen flex flex-wrap items-center justify-between">
          <div class="w-full lg:w-1/2 flex justify-center py-10  min-w-[300px] grow- flex-col text-justify gap-5 px-[10%]">
              <p class="w-full text-[32px] lg:text-[45px] font-black text-green leading-[45px]">VI SÆTTER <br> AFTRYK</p>
              <p class="w-full text-[12px] lg:text-[20px] font-black text-green uppercase">Historisk, aktuelt og i fremtiden</p>
              <p class="w-full text-[12px] lg:text-[18px] text-green">Tækker støtter kulturen, kunsten og kreativiteten. Vi støtter mennesker, og retten til det gode liv for alle. Støtter tryghed, nysgerrighed og skaberkraft.</p>
              <NuxtLink class="text-red uppercase text-[12px] lg:text-[18px]">Læs mere her</NuxtLink>
          </div>
          <div class="w-full lg:w-1/2 max-h-[600px] overflow-y-hidden flex justify-end">
              <NuxtImg class="grow-1 w-full" draggable="false" src="../public/media/images/gravel.png" />
          </div>
      </div>

      <div class="mb-20 flex flex-col">
          <NuxtImg class="w-full h-auto object-cover object-top max-h-[400px]" draggable="false" src="../public/media/images/Nye.png" />
          <div class="flex flex-col lg:flex-row w-full lg:px-[15%] px-10 gap-12 mt-16">
              <p class="text-[25px] md:text-[30px] font-black text-brown leading-[45px] w-full lg:w-[35%]">LIV, VIBRATION OG <br> BALANCE</p>
              <p class="text-[20apx] font-regular text-brown leading-[20px] text-justify w-full lg:w-[30%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br><br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p class="text-[20apx] font-regular text-brown leading-[20px] text-justify w-full lg:w-[30%]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <NuxtLink to="" class="uppercase text-red text-right mt-5 px-10 lg:px-[15%]">Læs mere om nye</NuxtLink>
      </div>

      <div class="flex flex-col lg:flex-row lg:flex-wrap w-full min-h-[300px] lg:min-h-[600px]">
        <!-- <div class="lg:h-[600px] h-[300px] min-h-full w-full lg:w-[45%] overflow-hidden">
          <img src="/media/images/kontor.png" class=" aspect-video h-full relative -bottom-0" />    
        </div>

        <div class="hidden overflow-hidden grow-0 w-full lg:w-[120px] lg:h-full lg:flex items-end lg:justify-center">
            <p class="lg:transform lg:-rotate-90 uppercase relative lg:left-[230px] lg:-bottom-1 h-full text-[26px] lg:text-[46px] font-bold text-greenTwo leading-[45px] lg:leading-[70px] whitespace-nowrap">Tækker <br> Rådgivende Ingeniører</p>
        </div> -->
          
        <div class="p-10 bg-greenTwo/30 grow-1 w-full lg:w-[45%] min-w-[300px] flex flex-col justify-end gap-10 flex-grow">
          <div class="w-full lg:w-3/5 h-3/4 flex flex-col gap-5">
            <p class="lg:hidden text-[26px] lg:text-[46px] font-bold text-greenTwo">Tækker <br> Rådgivende Ingeniører</p>
              <p class="w-full xl:w-1/2 text-greenTwo text-psmall lg:text-justify leading-6"><span class="font-bold uppercase">Vi er engagerede ingeniører der kombinerer det bedste fra arkitektfaget og ingeniørkunsten.</span></p>
              <p class="w-full xl:w-1/2 text-greenTwo text-psmall lg:text-justify leading-6 text-justify">Tækker Rådgivende Ingeniører kombinerer det bedste fra arkitektfaget og ingeniørkunsten.
  
              Kernen i vores virksomhed er vores dygtige medarbejdere. Vi kombinerer det bedste fra arkitektfaget og ingeniørkunsten. Vi lægger stor vægt på kreativitet, engagement og effektivitet og værdsætter det gode samarbejde med kunder og partnere.                    
              </p>
              <NuxtLink class="text-red uppercase">www.taekker-ingenioerer.dk</NuxtLink>
          </div>
        </div>
      </div>  

      <div class="h-4/5 w-3/5 mx-[20%] border-t border-grey flex mt-20 pt-20 pb-40 gap-12">
          <div class="lg:w-1/3 flex flex-col justify-end gap-6">
              <h5 class="text-[34px] tracking-wider font-black uppercase">Indblik</h5>
              <p class="font-black">enim ad minim veniam, quis nostrud laboris nisi ut.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <NuxtLink class="text-[#ca4f1c] uppercase mt-20">Få indblik i vores projekter</NuxtLink>
          </div>
          <div class="overflow-hidden lg:w-2/3 flex gap-8">
      <div class="w-full flex flex-col gap-6 overflow-x-auto" ref="imageContainer" @scroll="handleScroll">
        <img v-for="(image, index) in images" :src="image" :alt="`Image ${index + 1}`" :key="index">
      </div>
      <div class="flex justify-center mt-4">
        <div class="mx-4">
          <span v-for="(image, index) in images" :key="index" @click="goToImage(index)" :class="{ active: index === currentImageIndex }" class="dot"></span>
        </div>
      </div>
    </div>
      </div>
  </div>
</template>

<style scoped>
  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 5px;
  }

  .dot.active {
    background-color: #555;
  }
</style>