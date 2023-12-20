<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const links = ref([{name: "HVEM VI ER", link: "/hvem-er-vi"}, {name: "KOMPETENCER", link: "/kompetencer"}, {name: "AFTRYK", link: "/aftryk"}, {name: "VI STØTTER", link: "/vi-stoetter"}, {name: "KONTAKT", link: "/kontakt"}]);
const showAside = ref(true);
const isNavOpen = ref(false);
let lastScrollTop = 0;

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > window.innerHeight - 700) { //window.innerHeight
    // Scrolling down and past the height of the window
    showAside.value = false;
  } else {
    // Scrolling up
    showAside.value = true;
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

const imageSrc = computed(() => showAside 
    ? '../public/media/images/textLogo.png' 
    : '../public/media/images/vifte.png');
</script>

<template>
  <header>
    <Transition name="fadeOnly">
      <div v-if="showAside" key="logo" class="fixed top-10 ml-10 z-10 image-class">
        <NuxtLink to="/">
          <NuxtImg class="select-none w-[50%] lg:w-[100%]" draggable="false" src="/media/images/textLogo.png" />
        </NuxtLink>
      </div>
      <div v-else key="vifte" class="fixed top-10 ml-10 z-10 image-class h-10">
        <NuxtLink to="/">
          <img class="select-none w-[50%] lg:w-[50%]" draggable="false" src="/media/images/vifte.png" />
        </NuxtLink>
      </div>
    </Transition>

    <NuxtIcon :name="!isNavOpen ? 'BurgerMenu' : 'Close'" :class="isNavOpen ? 'text-[#fff]' : 'text-red'" class="lg:hidden fixed z-[50] right-0 pt-10 pr-5 scale-150" @click="isNavOpen = !isNavOpen"/>
      <aside class="fixed z-10 right-0 w-full lg:top-[10%] cursor-pointer">
        <nav :class="isNavOpen ? 'block' : 'hidden lg:flex'" class="flex flex-col text-center lg:text-right gap-5 lg:gap-2 absolute top-0 left-0 lg:left-[83%] w-screen lg:w-[200px] h-screen bg-red lg:bg-red/0 p-20 lg:p-0 cursor-pointer">
          <NuxtLink v-for="(link, index) in links" :to="link.link" :key="`link-${index}`" @click="isNavOpen = false" class="text-[#fff] lg:text-red text-p mr-5 select-none fade-item cursor-pointer">
            {{ link.name }}
          </NuxtLink>
        </nav>
      </aside>
      <div class="fixed z-20 left-[95%] lg:top-[50%] flex flex-col items-center gap-2">
      <span class="w-[1px] h-20 bg-red block"></span>
        <NuxtIcon name="instagram" class="w-4 h-4 bg-red rounded-sm text-[#fff] flex justify-center items-center text-xsmall font-semibold" />
        <NuxtIcon name="Facebook" class="w-4 h-4 bg-red rounded-sm text-[#fff] flex justify-center items-center text-xsmall font-semibold" />
        <NuxtIcon name="Linkedin" class="w-4 h-4 bg-red rounded-sm text-[#fff] flex justify-center items-center text-xsmall font-semibold" />
      </div>
  </header>
  <slot />

  <footer class="flex flex-row flex-wrap lg:flex-row gap-8 justify-start md:justify-center lg:justify-around bg-brown text-[#fff] p-6 lg:px-32 lg:py-20 text-sm">
            <img src="/media/images/vifte.png" alt="" class="object-contain">
            <div class="flex flex-col gap-4"> 
                <div class="text-link" to="/">Forside</div>
                <div class="text-link">Administration</div>
                <div class="text-link">Vicevært</div>
                <div class="text-link">Indflytning</div>
                <div class="text-link">Fraflytning</div>
                <div class="text-link">Kontakt</div>
                <div class="text-link">Job hos os</div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="text-link" to="/">www.taekker.dk</div>
                <div class="text-link">www.nye.dk</div>
                <div class="text-link">www.sneglehusene.dk</div>
                <div class="text-link">www.solsikkevaenget.dk</div>
                <div class="text-link">www.taekker-ingeniorer.dk</div>
                <div class="text-link">www.taekkerrealestate.dk</div>
                <div class="text-link">www.wemoov.dk</div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="text-link" to="/">Toldkammeret</div>
                <div class="text-link">Vicevært</div>
                <div class="text-link">Indflytning</div>
                <div class="text-link">Fraflytning</div>
                <div class="text-link">Kontakt</div>
            </div>
            <div class="flex objects-contain items-end gap-4">
                <img src="/media/images/gravel.png" alt="" class="w-[25px] h-[25px]">
                <img src="/media/images/gravel.png" alt="" class="w-[25px] h-[25px]">
                <img src="/media/images/gravel.png" alt="" class="w-[25px] h-[25px]">
            </div>
          </footer>
</template>
  
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateX(2.5rem);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.fadeOnly-enter-active, .fadeOnly-leave-active {
  transition: opacity 0.5s;
}
.fadeOnly-enter-from, .fadeOnly-leave-to {
  opacity: 0;
}
.fadeOnly-enter-to, .fadeOnly-leave-from {
  opacity: 1;
}

.router-link-active {
  font-weight: bold; /* Your styling for active links */
}

</style>
