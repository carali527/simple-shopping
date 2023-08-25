<script setup lang="ts">
import { ref } from 'vue';
const AllCategories = ref([]);

fetch('https://dummyjson.com/products/categories')
.then((res) => {
    return res.json();
}).then((data) => {
    AllCategories.value = data;
}).catch(() => {
    location.hash = '#/404';
});
</script>

<template>
    <div class="bg-gray-200 flex justify-center items-center min-h-screen">
        <div class="bg-gray-100 space-y-6 h-auto w-full p-12 flex flex-col">
            <h2 class="font-semibold text-3xl pl-2 sm:pl-4 pb-2 underline">All Categories &gt;</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 flex justify-center items-center p-4 pt-0">
                <div class="p-4" v-for="(i, key, index) in AllCategories" :key="key" :index="index">
                    <a class="text-xl font-semibold underline" :href="'/simple-shopping/#/'+i">{{ i }}</a>
                </div>
            </div>
        </div>
    </div>
</template>