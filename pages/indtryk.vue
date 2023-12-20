<script setup>
import { ref } from 'vue';

const images = ref([
  { url: '/media/images/Headerbilleder-Aftryk.jpg' },
  { url: '/media/images/Headerbilleder-Kontakt.jpg' },
  { url: '/media/images/Headerbilleder-Kontakt.jpg' },
  { url: '/media/images/Headerbilleder-Kontakt.jpg' },
  { url: '/media/images/Headerbilleder-Kontakt.jpg' },
  // Add more images as needed
]);

const showSlideshow = ref(false);
const currentIndex = ref(0);

const openSlideshow = (index) => {
  currentIndex.value = index;
  showSlideshow.value = true;

  // Reset the animation classes for each image
  resetAnimationClasses();
};

const closeSlideshow = () => {
  showSlideshow.value = false;
};

const nextSlide = () => {
  if (currentIndex.value < images.value.length - 1) {
    currentIndex.value += 1;
    resetAnimationClasses();
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
    resetAnimationClasses();
  }
};

const resetAnimationClasses = () => {
  const imagesElements = document.querySelectorAll('.test');

  imagesElements.forEach((element) => {
    element.style.transform = `translateX(-${(currentIndex.value) * 100}%)`;
    element.offsetHeight; // Trigger reflow
  });
};
</script>
<template>
  <div class="flex flex-col gap-10 mb-52">
        <div class="overflow-hidden max-h-[600px]">
          <img src="/media/images/Headerbilleder-Indtryk.jpg" alt="" class="object-center w-full">
        </div>
        <div class="flex flex-col w-full gap-5">
            <div class="w-full flex flex-col items-center justify-center">
                <p class="w-full lg:w-2/3 text-[32px] lg:text-[45px] font-black text-brown leading-[45px] uppercase text-center">Studieture og inspirationsture</p>
                <p class="w-full lg:w-2/3 p-10 lg:px-32 lg:w-1/1 leading-8lg:translate-x-1/1 text-psm text-[#4c443f] text-center">Med liv, indlevelse og ærlighed går vi forrest i projekter der gør en forskel på den lange bane. Vi vægter variation og detaljerigdom i vores arbejde, der skal fortælle historier og inspirere. Arbejde, der får hjertet til at slå lidt hurtigere. Igennem vilje og vedholdenhed finder vi balance mellem passion, hensyn og forretning. Vi arbejder med mennesker og for mennesker.</p>
            </div>
            <div class="flex gap-10">
                <div v-for="(image, index) in images" :key="index" @click="openSlideshow(index)">
                    <img :src="image.url" alt="Image" class="cursor-pointer w-40 h-40" />
                </div>
            </div>
            <div v-if="showSlideshow" class="fixed top-0 left-0 w-full h-full flex items-center justify-between p-[10%] bg-[#000] bg-opacity-60">
                <div class="flex items-center gap-10">
                    <img v-for="(image, index) in images" :key="index" :src="image.url" alt="Slideshow Image" class="test max-w-4/5 max-h-4/5 animate-fade-in transform" />
                </div>
                <div class="fixed bottom-20 flex gap-20 w-full justify-center left-0">
                    <button @click="prevSlide" v-if="currentIndex > 0" class="text-white">&lt; Previous</button>
                    <button @click="nextSlide" v-if="currentIndex < images.length - 1" class="text-white">Next &gt;</button>
                </div>
                <button @click.stop="closeSlideshow" class="text-[#fff] absolute top-20 right-20 text-[40px]">Close</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.test {
transform: translateX(0%);
transition: all 0.5s ease-in-out;
}
</style>

