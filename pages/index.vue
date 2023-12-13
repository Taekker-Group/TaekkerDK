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
    <!-- Header skal flyttes til layouts -->
     <div class="w-full px-[20%] absolute h-[90vh]">
        <div class="flex flex-col h-full justify-between">
            <div class="flex justify-between">
                <img src="../public/media/images/navvifte.png" alt="taekker-vifte" class="hidden lg:block max-w-[25%] object-contain max-h-[100px]">
                <div class="flex flex-col mt-[60px]">
                    <nuxt-link to="" class="uppercase my-2 text-right text-[#ca4f1c]">Hvem vi er</nuxt-link>
                    <nuxt-link to="" class="uppercase my-2 text-right text-[#ca4f1c]">Kompetencer</nuxt-link>
                    <nuxt-link to="" class="uppercase my-2 text-right text-[#ca4f1c]">Aftryk</nuxt-link>
                    <nuxt-link to="" class="uppercase my-2 text-right text-[#ca4f1c]">Vi støtter</nuxt-link>
                    <nuxt-link to="" class="uppercase my-2 text-right text-[#ca4f1c]">Kontakt</nuxt-link>
                </div>
            </div>
            <div class="flex flex-col gap-2 bottom-0 right-[21%] w-[15px] absolute items-center">
                <p class="text-[#ca4f1c] text-[12px] rotate-[-90deg] w-40 relative bottom-20">sociale medier</p>
                <div class="bg-[#ca4f1c] w-[2px] h-[100px]"></div>
                <img src="../public/media/images/gravel.png" alt="">
                <img src="../public/media/images/gravel.png" alt="">
                <img src="../public/media/images/gravel.png" alt="">
            </div>
        </div>
    </div>
    <div>
        <img src="../public/media/images/taekkerbg.jpg" alt="">
    </div>
    <div class="">
        <p class="w-full p-10 lg:w-1/2 leading-8 text-justify lg:translate-x-1/2 text-psm text-[#4c443f]">Med liv, indlevelse og ærlighed går vi forrest i projekter der gør en forskel på den lange bane. Vi vægter variation og detaljerigdom i vores arbejde, der skal fortælle historier og inspirere. Arbejde, der får hjertet til at slå lidt hurtigere. Igennem vilje og vedholdenhed finder vi balance mellem passion, hensyn og forretning. Vi arbejder med mennesker og for mennesker.</p>
        <div class="lg:max-h-[300px]">
            <p class="relative left-[-600px] text-[200px] font-medium text-[#d7d7d7] select-none">TÆKKER</p>
            <p class="relative bottom-36 text-[68px] font-light text-[#6a6a6a] select-none pl-40">FORBINDELSER</p>
        </div>
    </div>
    <div class="bg-rosa w-screen mb-20 flex flex-wrap items-center justify-between">
        <div class="w-full lg:w-1/2 flex justify-center py-10  min-w-[500px] grow- flex-col text-justify gap-5 px-[10%]">
            <p class="w-full text-[45px] font-black text-green leading-[45px]">VI SÆTTER <br> AFTRYK</p>
            <p class="w-full text-[20px] font-black text-green uppercase">Historisk, aktuelt og i fremtiden</p>
            <p class="w-full text-[18px] text-green">Tækker støtter kulturen, kunsten og kreativiteten. Vi støtter mennesker, og retten til det gode liv for alle. Støtter tryghed, nysgerrighed og skaberkraft.</p>
            <NuxtLink class="text-[#ca4f1c] uppercase">Læs mere her</NuxtLink>
        </div>
        <div class="w-full lg:w-1/2 max-h-[600px] overflow-y-hidden flex justify-end">
            <NuxtImg class="grow-1 w-full" draggable="false" src="../public/media/images/gravel.png" />
        </div>
    </div>
    <div class="mb-20">
        <NuxtImg class="w-full h-auto object-cover max-h-[600px]" draggable="false" src="../public/media/images/Nye.png" />
        <div class="flex lg:px-[20%] gap-12 mt-16">
            <p class="text-[35px] font-black text-brown leading-[45px] w-[40%]">LIV, VIBRATION OG <br> BALANCE</p>
            <p class="text-[20apx] font-regular text-brown leading-[20px] text-justify w-[30%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br><br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p class="text-[20apx] font-regular text-brown leading-[20px] text-justify w-[30%]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br><br><br><br><br><br><NuxtLink to="" class="uppercase text-[#ca4f1c] text-left">Læs mere om nye</NuxtLink></p>
        </div>
        
    </div>
    <div class="flex flex-wrap w-full h-[300px] lg:h-[600px]">
        <div class="flex-none w-full h-full lg:w-[45%] grow-1 min-w-[413px] relative overflow-hidden bg-[url(public/media/images/kontor.png)] bg-center"></div>
        <div class="overflow-hidden grow-0 w-full lg:w-[120px] lg:h-full flex items-end lg:justify-center">
            <p class="lg:transform lg:-rotate-90 uppercase relative lg:left-[230px] lg:-bottom-1 h-full text-[26px] lg:text-[46px] font-bold text-greenTwo leading-[45px] lg:leading-[70px] whitespace-nowrap">Tækker <br> Rådgivende Ingeniører</p>
        </div>
        <div class="bg-greenTwo/30 grow-1 w-dull lg:w-[45%] min-w-[413px] pt-32 px-10 lg:pr-32 flex flex-col justify-end gap-10 pb-10 flex-grow">
            <p class="w-full xl:w-1/2 text-greenTwo text-psmall text-justify leading-6"><span class="font-bold uppercase">Vi er engagerede ingeniører der kombinerer det bedste fra arkitektfaget og ingeniørkunsten.</span>
            <br><br>Tækker Rådgivende Ingeniører kombinerer det bedste fra arkitektfaget og ingeniørkunsten.

            Kernen i vores virksomhed er vores dygtige medarbejdere. Vi kombinerer det bedste fra arkitektfaget og ingeniørkunsten. Vi lægger stor vægt på kreativitet, engagement og effektivitet og værdsætter det gode samarbejde med kunder og partnere.                    
            </p>
            <NuxtLink class="text-[#ca4f1c] uppercase">www.taekker-ingenioerer.dk</NuxtLink>
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
    <!-- Footer skal flyttes til layouts -->
 
        <div class="flex flex-row flex-wrap lg:flex-row uppercase gap-8 justify-start md:justify-center lg:justify-around bg-[#53493f] text-[#fff] p-6 lg:px-32 lg:py-20 text-sm">
            <img src="../public/media/images/vifte.png" alt="" class="object-contain">
            <div class="flex flex-col gap-4"> 
                <div to="/">Forside</div>
                <div>Administration</div>
                <div>Vicevært</div>
                <div>Indflytning</div>
                <div>Fraflytning</div>
                <div>Kontakt</div>
                <div>Job hos os</div>
            </div>
            <div class="flex flex-col gap-4">
                <div to="/">www.taekker.dk</div>
                <div>www.nye.dk</div>
                <div>www.sneglehusene.dk</div>
                <div>www.solsikkevaenget.dk</div>
                <div>www.taekker-ingeniorer.dk</div>
                <div>www.taekkerrealestate.dk</div>
                <div>www.wemoov.dk</div>
            </div>
            <div class="flex flex-col gap-4">
                <div to="/">Toldkammeret</div>
                <div>Vicevært</div>
                <div>Indflytning</div>
                <div>Fraflytning</div>
                <div>Kontakt</div>
            </div>
            <div class="flex objects-contain items-end gap-4">
                <img src="../public/media/images/gravel.png" alt="" class="w-[25px] h-[25px]">
                <img src="../public/media/images/gravel.png" alt="" class="w-[25px] h-[25px]">
                <img src="../public/media/images/gravel.png" alt="" class="w-[25px] h-[25px]">
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