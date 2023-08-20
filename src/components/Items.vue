<script setup lang="ts">
import allitems from "@/../items.json";
const Category:(any) = location.hash.substring(location.hash.lastIndexOf("\/") + 1, location.hash.length);
const allitem = allitems.filter(function(e:any){
    if (e.title == Category) {
        return e.item;
    }
})
const items:object = allitem[0].item;
function changePage(i: any) {
    location.hash = `#/${Category}/${i.id}`;
}
</script>

<template>
    <div class="min-h-screen">
        <h2 class="px-6 pt-6 pb-6">
            <a class="font-semibold text-3xl pl-2 sm:pl-12 pt-12 pb-2 underline" href="#/">All Categories</a> 
            <a class="text-3xl"> &gt;</a>
            <a class="font-semibold text-3xl pl-2 pt-12 pb-2 underline">{{ Category }}</a>
        </h2>
        <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-2 flex justify-center items-center min-h-screen p-12 pt-0">
            <div v-for="(i, key, index) in items" :key="key" :index="index">
                <div class="group relative" @click.prevent="changePage(i)">
                    <img :src="i.images" class="group rounded-md" />
                    <button class="h-full flex justify-center items-center absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-60 bg-black">
                        <div class="items-center justify-center flex flex-col text-white font-bold tarcking-widest pl-2">
                            <p>{{ i.title }}</p>
                            <p>NZ$ {{ i.price }}</p>
                        </div>
                        <div class="text-white font-semibold flex space-x-2 justify-center rounded items-center mt-5 p-4">
                            <svg class="w-8" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                                    fill="#FFF"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>