<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <div class="border-b border-[#4c443f]/50 px-10 lg:px-0 pb-32">
        <p class="text-xsmall uppercase mb-5 mt-32">Lille tekst + tidsperioden 2023-2024</p>
        <p class="text-h4 lg:text-h3 font-black text-brown uppercase">{{ data.title }}</p>
        <p class="text-h4 lg:text-h3 font-black text-brown uppercase" v-if="data.kunstner">Af kunstner {{ data.kunstner }}</p>
        <div class="flex w-full gap-5 relative h-[400px] my-10">
            <div class="flex justify-center gap-5 absolute left-0">
                <img class="h-[400px]" :src="data.images.one" />
                <img class="h-[400px]" :src="data.images.two" />
                <img class="h-[400px]" :src="data.images.three" />
            </div>
        </div>
        <div class="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 mb-5">
            <div class="lg:w-1/3">
                <p class="uppercase text-psmall font-bold text-brown mb-5">Fakta</p>
                 <p class="text-psmall text-brown text-left mb-2 uppercase">Værk: Kinship – a weaving of voices</p>
                 <p class="text-psmall text-brown text-left mb-2 uppercase">Kunstner: Mette Borup Kristensen</p>
                 <p class="text-psmall text-brown text-left mb-2 uppercase">Udstillingssted: Enter artspace</p>
                 <p class="text-psmall text-brown text-left mb-2 uppercase">Støttet af: Tækker Group</p>
                 <p class="text-psmall text-brown text-left mb-2 uppercase">Udstillingsperiode: November 2024</p>
            </div>
            <div class="p-10 lg:p-0 lg:w-2/3">
                <p class="uppercase text-psmall font-bold text-brown mb-5">{{data.subTitle}}</p>
                <p class="text-psmall text-brown text-justify mb-5">Kinship – a weaving of voices undersøger kinship/slægtskab som tema. Begrebet kinship bruges også for at definere slægtsskab med andre arter, planter som dyr og sted – og i den amerikanske videnskabsteoretiker (forsker, feminist og forfatter) Donna Haraways begreb ‘to make kin’ / at skabe slægt. <br><br>
Mette Borup Kristensen er optaget af altings indbyrdes forbindelse til hinanden og menneskets forbindelse til naturen. I udstillingen dykker hun dybere i sin egen slægt og den nedarvede forkærlighed til håndens arbejde, det æstetiske, materialesans og forhold til naturen... </p>
                <NuxtLink class="text-red font-bold text-link" to="" >WWW.ENTERARTSOACE.DK/KINSHIP-A-WEAVING OF VOICES</NuxtLink>
            </div>
        </div>
    </div>
</template>