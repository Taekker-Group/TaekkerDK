<script setup>
const companies = ref([
    {
        id: 1,
        name: "Tækker Rødgivende Ingeniører",
        url: "https://www.taekker.dk/",
    },
    {
        id: 2,
        name: "Tækker Udlejning Og Salg",
        url: "https://www.taekker.dk/",
    },
    {
        id: 3,
        name: "Tækker Administration",
        url: "https://www.taekker.dk/",
    },
    {
        id: 4,
        name: "Nye, 8200 Aarhus Nord",
        url: "https://www.taekker.dk/",
    },
    {
        id: 5,
        name: "NYMA, Den lokale købmand i Nye",
        url: "https://www.taekker.dk/",
    },
    {
        id: 6,
        name: "WeMoov - Biludlejning i Nye",
        url: "https://www.taekker.dk/",
    }
]);

const openDrawerId = ref(null);

const toggleDrawer = (companyid) => {
  if (openDrawerId.value === companyid) {
    // If the clicked drawer is already open, close it
    openDrawerId.value = null;
  } else {
    // Otherwise, open the clicked drawer and close the others
    openDrawerId.value = companyid;
  }
};
</script>

<template>
    <div class="flex flex-col gap-10 mb-52">
        <div class="overflow-hidden max-h-[600px]">
            <img src="/media/images/Headerbilleder-Kompetencer.jpg" alt="" class="w-full">
        </div>
  
      <div class="flex flex-col px-10 lg:px-52">
          <div class="pb-32">
              <p class="w-full p-10 lg:px-32 lg:w-1/1 leading-8 text-justify lg:translate-x-1/1 text-psm text-brown">Med liv, indlevelse og ærlighed går vi forrest i projekter der gør en forskel på den lange bane. Vi vægter variation og detaljerigdom i vores arbejde, der skal fortælle historier og inspirere. Arbejde, der får hjertet til at slå lidt hurtigere. Igennem vilje og vedholdenhed finder vi balance mellem passion, hensyn og forretning. Vi arbejder med mennesker og for mennesker.</p>
            </div>
            <div class="relative">
              <Drawer v-for="company, i in companies" :key="company.id" :companyData="company" :showDrawer="openDrawerId === company.id" @update:showDrawer="openDrawerId = null"/>
            </div>
            <div class="flex flex-col lg:items-end ">
              <div class="w-full lg:w-1/2 pt-52 flex flex-col gap-5">
                <p class="w-full text-[32px] lg:text-[45px] font-black text-brown leading-[45px]">Job hos os</p>
                <p class="w-full leading-8 text-justify text-psm text-brown">Du er velkommen til at søge arbejde hos os uopfordret. Vi leder altid efter engagerede og kvalificerede medarbejdere. Vi beder dig dog om følgende, hvis du søger arbejde.</p>
                <p class="w-full leading-8 text-justify text-psm text-brown">Send os:</p>
                <ul class="list-disc pl-5">
                  <li class="w-full leading-8 text-justify text-psm text-brown">En ansøgning på en A4 side</li>
                  <li class="w-full leading-8 text-justify text-psm text-brown">Et CV på en A4 side</li>
                  <li class="w-full leading-8 text-justify text-psm text-brown">Et fotografi af dig</li>
                  <li class="w-full leading-8 text-justify text-psm text-brown">Relevante anbefalinger</li>
                  <li class="w-full leading-8 text-justify text-psm text-brown">Relevante eksamens- og kursusbeviser</li>
                </ul>
                <p class="w-full leading-8 text-justify text-psm text-brown">Inden du kaster dig over en ansøgning, så læs om vores tankegang og find ud af, om vi er noget for dig.</p>
                <p class="w-full leading-8 text-justify text-psm text-brown">Du er også velkommen til at sende en uopfordret ansøgning til mailadressen: info@taekker.dk. Du er også velkommen til at ringe og få en uforpligtende snak. Telefon nr: 86 19 18 44.</p>
                
              </div>
              <p class="lg:w-[450px] pt-32 text-[18px] lg:text-[18px] leading-8 font-thin text-center text-brown uppercase">Hos Tækker har vi engagerede og energiske medarbejdere, der kombinerer kreativitet og faglighed for at skabe de bedste løsninger for vores kunder og samarbejdspartnere.</p>
          </div>
      </div>
    </div>
  </template>