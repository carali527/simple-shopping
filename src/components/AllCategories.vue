<script setup lang="ts">
import { ref } from 'vue';
const AllCategories = ref([]);
const loading = ref(false);
fetch('https://dummyjson.com/products/categories')
.then((res) => {
    return res.json();
}).then((data) => {
    AllCategories.value = data;
}).catch(() => {
    location.hash = '#/404';
});

window.setTimeout(( () => loading.value = true ), 500);
</script>

<template>
    <div class="bg-gray-200 flex justify-center items-center min-h-screen">
        <div class="bg-gray-100 space-y-6 h-auto w-full p-12 flex flex-col">
            <h2 class="font-semibold text-3xl pl-2 sm:pl-4 pb-2 underline">All Categories &gt;</h2>
            <div v-if="loading" class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 flex justify-center items-center p-4 pt-0">
                <div class="p-4" v-for="(i, key, index) in AllCategories" :key="key" :index="index">
                    <a class="text-xl font-semibold underline" :href="'/simple-shopping/#/'+i">{{ i }}</a>
                </div>
            </div>
            <div v-if="!loading">
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
    </div>
</template>