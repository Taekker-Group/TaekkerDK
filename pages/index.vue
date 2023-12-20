<script setup>
import img from '../public/media/images/grønland2.png';
import vifte from '../public/media/images/grønland3.png';

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
      <div class="overflow-hidden max-h-[600px] w-full">
          <img class="object-fill w-full object-left-bottom" src="/media/images/header.jpg" alt="">
      </div>
      <div class="">
          <p class="w-full p-10 lg:w-1/2 leading-8 text-justify lg:translate-x-1/2 text-psmall text-[#4c443f]">Med liv, indlevelse og ærlighed går vi forrest i projekter der gør en forskel på den lange bane. Vi vægter variation og detaljerigdom i vores arbejde, der skal fortælle historier og inspirere. Arbejde, der får hjertet til at slå lidt hurtigere. Igennem vilje og vedholdenhed finder vi balance mellem passion, hensyn og forretning. Vi arbejder med mennesker og for mennesker.</p>
          <div class="lg:max-h-[300px]">
              <p class="relative left-[-600px] text-[200px] font-medium select-none text-brown/25">TÆKKER</p>
              <p class="relative bottom-24 lg:bottom-36 text-[40px] lg:text-[68px] font-light text-brown select-none pl-[5%]">FORBINDELSER</p>
          </div>
      </div>

      <div class="bg-rosa w-screen flex flex-wrap items-center justify-between">
          <div class="w-full lg:w-1/2 flex justify-left py-10  min-w-[300px] grow- flex-col text-left gap-5 px-[10%]">
              <p class="w-full text-[32px] lg:text-[45px] font-bold text-green leading-[45px]">VI GIVER GODE PROJEKTER ET EKSTRA SKUB</p>
              <p class="w-full text-[12px] lg:text-[20px] text-green">Tækker giver en hjælpende hånd til kreativiteten og de gode ideer. Vi støtter mennesker.</p>
              <p class="w-full leading-8 text-psmall text-green">
Vi vil gerne gøre vores for at styrke spændende initiativer, store som små. Vi giver opbakning til alt fra borgerinddragende projekter, lokalsport og stedsspecifikke kunstværker, til frivillige ildsjæle der brænder for fællesskabet. 
 </p>
              <NuxtLink class="text-red uppercase text-link">Læs mere her</NuxtLink>
          </div>
          <div class="w-full lg:w-1/2 max-h-[600px] overflow-y-hidden flex justify-end">
              <NuxtImg class="grow-1 w-full" draggable="false" src="/media/images/gravel.png" />
          </div>
      </div>

      <div class="mb-20 flex flex-col">
          <NuxtImg class="w-full h-auto object-cover object-top max-h-[400px]" draggable="false" src="/media/images/Nye.png" />
          <div class="flex flex-col lg:flex-row w-full lg:px-[15%] px-10 gap-12 mt-16">
              <p class="text-[25px] md:text-[30px] font-black text-brown leading-[45px] w-full lg:w-[35%]">LIV, VARIATION OG <br> BALANCE</p>
              <p class="text-[20apx] font-regular text-brown leading-[20px] text-justify w-full lg:w-[30%]">Nye er uden sammenligning Danmarks største private byudviklingsprojekt. Vi tror på at fremtiden by er grøn og socialt bæredygtig. Med en naturbaseret tilgang udvikler vi ud fra en idé om ikke bare det gode liv, men et anderledes liv. Ideen om en bevidst hverdag guidet af værdierne liv, variation og balance. En hverdag med plads til at være et helt menneske, plads til individualitet og plads til fællesskab.</p>
              <p class="text-[20apx] font-regular text-brown leading-[20px] text-justify w-full lg:w-[30%]">Byen der startede som bar mark men på sigt vil rumme 12.000-15.000 indbyggere finder man 10 km fra Aarhus centrum. Byggeriet blev igangsat i 2016, mens de første beboere flyttede ind i 2018. Visionen er at kombinere det bedste fra den tætte by og det bedste fra parcelhuskvarteret, så man får ’byen i forhaven og naturen i baghaven’.</p>
            </div>
            <NuxtLink to="" class="uppercase text-red text-right mt-5 px-10 text-link lg:px-[15%]">Læs mere om nye</NuxtLink>
      </div>

      <div class="flex flex-col lg:flex-row lg:flex-wrap w-full min-h-[300px] lg:min-h-[600px]">
        <div class="lg:h-[600px] h-[300px] min-h-full w-full lg:w-[45%] overflow-hidden">
          <img src="/media/images/kontor.png" class=" aspect-video h-full relative -bottom-0" />    
        </div>
        <div class="hidden overflow-hidden grow-0 w-full lg:w-[120px] lg:h-[600px] h-[300px] lg:flex items-end lg:justify-center">
           <img src="/assets/icons/TRI.svg" class="h-full" />
        </div>
          
        <div class="p-10 bg-greenTwo/30 grow-1 w-full lg:w-[45%] min-w-[300px] flex flex-col justify-end gap-10 flex-grow">
          <div class="w-full lg:w-3/5 h-3/4 flex flex-col gap-5">
            <p class="lg:hidden text-[26px] lg:text-[46px] font-bold text-greenTwo">Tækker <br> Rådgivende Ingeniører</p>
              <p class="w-full xl:w-1/2 text-greenTwo text-psmall lg:text-justify leading-6"><span class="font-bold uppercase">VI KOMBINERER DET BEDSTE FRA ARKITEKTFAGET OG INGENIØRKUNSTEN.</span></p>
              <p class="w-full xl:w-1/2 text-greenTwo text-psmall lg:text-justify leading-6 text-justify">Tækker Rådgivende Ingeniører yder rådgivning inden for alt fra bærende konstruktioner og bygningsinstallationer til tværfaglig byggeteknisk rådgivning, støtte til bygherre, bæredygtighed, energi og indeklima.

Frem for alt er vi bedst til at være til stede og nærværende i vores opgaver. Den opgave, vi sidder med, er altid den vigtigste, og du kan være sikker på, at vi altid tager telefonen. Kernen i vores virksomhed er dygtige, engagerede og ikke mindst arbejdsomme medarbejdere, der ligesom resten af koncernen lægger stor vægt på en kreativ tilgang til opgaver, store som små.
</p>
              <NuxtLink class="text-red uppercase text-link">www.taekker-ingenioerer.dk</NuxtLink>
          </div>
        </div>
      </div>  

      <div class="h-4/5 max-h-[800px] w-3/5 mx-[20%] flex mt-20 pt-20 pb-40 gap-12">
        <div class="lg:w-1/3 flex flex-col justify-end gap-6">
            <h5 class="text-[34px] tracking-wider font-black uppercase text-brown">Aftryk</h5>
            <p class="font-black text-brown">enim ad minim veniam, quis nostrud laboris nisi ut.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <NuxtLink to="/indtryk" class="text-red uppercase mt-20 text-link">Få indblik i vores projekter</NuxtLink>
        </div>
          <div class="overflow-hidden lg:w-2/3 flex gap-8">
              <div class="w-full flex flex-col gap-6 overflow-x-auto" ref="imageContainer" @scroll="handleScroll">
                <img v-for="(image, index) in images" :src="image" :alt="`Image ${index + 1}`" :key="index">
              </div>
            <div class="flex items-end mt-4">
              <div class="mx-4">
                <span v-for="(image, index) in images" :key="index" @click="goToImage(index)" :class="{ active: index === currentImageIndex }" class="dot bg-red/50"></span>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<style scoped>
  .dot {
    display: inline-block;
    width: 20px;
    height: 2px;
    cursor: pointer;
    margin: 0 5px;
  }

  .dot.active {
    background-color: #e84e0f;
  }
</style>