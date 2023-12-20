<script setup>
const data = [ {
            title: 'KINSHIP – A WEAVING OF VOICES',
            kunstner: 'Mette Borup Kristensen',
            subTitle: 'Kinship - a weaving of voices',
            images: {
                one: '/media/images/kinshipone.png',
                two: '/media/images/kinshiptwo.png',
                three: '/media/images/kinshipthree.png',
            }
        },
        {
            title: 'EVA FORAN NYMA I NYE.',
                subTitle: 'CYKELSTATIVET EVA FORAN NYMA I NYE.',
                kunstner: 'Jørgen Carlo Larsen',
                images: {
                    one: '/media/images/Eva3.png',
                    two: '/media/images/Eva2.png',
                    three: '/media/images/Eva1.png',
                }
        },
        {
                title: 'SKULPTUR MED FLERE FUNKTIONER.',
                subTitle: 'SKULTUR MED FLERE FUNKTIONER I NYE',
                kunstner: 'Jørgen Carlo Larsen',
                images: {
                    one: '/media/images/skulp1.png',
                    two: '/media/images/skulp2.png',
                    three: '/media/images/skulp3.png',
                },
        }
]
</script>

<template>
  <div class="flex flex-col gap-10 mb-52">
      <div class="overflow-hidden lg:h-[600px]">
          <img src="../public/media/images/Vistoetter.jpg" alt="">
      </div>

    <div class="flex flex-col lg:px-52">
        <div class="border-b border-brown/50 pb-32">
            <p class="w-full p-10 lg:px-32 lg:w-1/1 leading-8 text-justify lg:translate-x-1/1 text-psm text-brown">Med liv, indlevelse og ærlighed går vi forrest i projekter der gør en forskel på den lange bane. Vi vægter variation og detaljerigdom i vores arbejde, der skal fortælle historier og inspirere. Arbejde, der får hjertet til at slå lidt hurtigere. Igennem vilje og vedholdenhed finder vi balance mellem passion, hensyn og forretning. Vi arbejder med mennesker og for mennesker.</p>
        </div>


        <GalleriesHorizontal :data="data[0]"/>
        <GalleriesHorizontal :data="data[1]"/>
        <GalleriesHorizontal :data="data[2]"/>
    </div>
    </div>
</template>