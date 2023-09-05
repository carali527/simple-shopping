<script setup lang="ts">
import { ref } from 'vue';
const items = ref({});
const Category:(any) = location.hash.substring(2);
const url:(string) = 'https://dummyjson.com/products/category/' + Category;
const loading = ref(false);

fetch(url)
.then((res) => {
    return res.json();
}).then((data) => {
    if(data.products.length == 0) {
        location.hash = '#/404';
    }
    items.value = data.products;
    loading.value = true;
}).catch((error) => {
    location.hash = '#/404';
});
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
        <div v-if="loading" class="grid md:grid-cols-3 lg:grid-cols-4 gap-2 flex justify-center items-center min-h-screen p-12 pt-0">
            <div v-for="(i, key, index) in items" :key="key" :index="index">
                <div class="group relative" @click.prevent="changePage(i)">
                    <img :src="i.images[0]" class="group rounded-md" />
                    <button class="h-full flex justify-center items-center absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-60 bg-black">
                        <div class="items-center justify-center flex flex-col text-white font-bold tarcking-widest pl-2">
                            <p>{{ i.title }}</p>
                            <p>$ {{ i.price }}</p>
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
        <div v-if="!loading" class="h-auto w-full min-h-screen flex justify-center items-center">
            <svg class="h-24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto; animation-play-state: running; animation-delay: 0s;" height="35px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="rotate(0 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93908f" style="animation-play-state: running; animation-delay: 0s;">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                </g><g transform="rotate(30 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93908f" style="animation-play-state: running; animation-delay: 0s;">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                </g><g transform="rotate(60 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93908f" style="animation-play-state: running; animation-delay: 0s;">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                </g><g transform="rotate(90 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93908f" style="animation-play-state: running; animation-delay: 0s;">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                </g><g transform="rotate(120 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93908f" style="animation-play-state: running; animation-delay: 0s;">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                </g><g transform="rotate(150 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93908f" style="animation-play-state: running; animation-delay: 0s;">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                </g><g transform="rotate(180 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93908f" style="animation-play-state: running; animation-delay: 0s;">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                </g><g transform="rotate(210 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93908f" style="animation-play-state: running; animation-delay: 0s;">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                </g><g transform="rotate(240 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93908f" style="animation-play-state: running; animation-delay: 0s;">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                </g><g transform="rotate(270 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93908f" style="animation-play-state: running; animation-delay: 0s;">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                </g><g transform="rotate(300 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93908f" style="animation-play-state: running; animation-delay: 0s;">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                </g><g transform="rotate(330 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#93908f" style="animation-play-state: running; animation-delay: 0s;">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                </g>
            </svg>
        </div>
    </div>
</template>