<script setup>
const data = [ {
            title: 'Tre boliger i tasiilaq  - Østgrønland Byen ligger på den store ø Ammassalik',
            subTitle: 'Tasiilaq',
            images: {
                one: '/media/images/grønland1.png',
                two: '/media/images/grønland2.png',
                three: '/media/images/grønland3.png',
            }
        },
        {
            title: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT SED DO.',
                subTitle: 'LOREM IPSUM',
                images: {
                    one: '/media/images/kirke1.png',
                    two: '/media/images/kirke2.png',
                    three: '/media/images/kirke3.png',
                }
        },
        {
                title: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT SED DO.',
                subTitle: 'LOREM IPSUM',
                images: {
                    one: '/media/images/paradis3.png',
                    two: '/media/images/paradis1.png',
                    three: '/media/images/paradis2.png',
                },
        }
]
</script>

<template>
  <div class="flex flex-col gap-10 mb-52">
      <div class="overflow-hidden lg:h-[600px]">
          <img src="/media/images/Aftryk.jpg" alt="">
      </div>

    <div class="flex flex-col lg:px-52">
        <div class="border-b border-brown/50 pb-32">
            <p class="w-full pb-10 lg:px-32 lg:w-1/1 leading-8 text-justify lg:translate-x-1/1 text-psm text-brown"><span class="uppercase mr-5">Vi sætter aftryk</span> Historisk, aktuelt og i fremtiden</p>
            <p class="w-full lg:px-32 lg:w-1/1 leading-8 text-justify lg:translate-x-1/1 text-psm text-brown">Vores koncern har mange kompetencer og en omfattende portefølje af spændende projekter der demonstrerer vores engagement og ekspertise. Her på siden kan du udforske nogle af vores mest bemærkelsesværdige historier, hvor vi deler vores passion og dedikation til at sætte unikke og meningsfulde aftryk.</p>
        </div>

        <GalleriesHorizontal :data="data[0]" />
        <GalleriesHorizontal :data="data[1]"/>
        <GalleriesHorizontal :data="data[2]"/>
    </div>
    </div>
</template>