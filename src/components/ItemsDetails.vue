<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id: string = route.params.order as string;
const Category: string = route.params.categories as string;

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

const items = ref<Product | null>(null);
const itemImage = ref<string | undefined>(undefined);
const loading = ref(false);
const submitLoading = ref(false);

fetch('https://dummyjson.com/products/' + id)
  .then((res) => res.json())
  .then((data) => {
    items.value = data;
    itemImage.value = data.images[0];
    loading.value = true;
  })
  .catch(() => {
    location.hash = '#/404';
  });

function sendIt() {
  submitLoading.value = true;
  if (items.value) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const body = {
      title: items.value.title,
      images: items.value.images,
      price: items.value.price,
    };
    fetch('https://ena8ev5d4j2je.x.pipedream.net', {
      method: 'POST',
      headers,
      mode: 'cors',
      body: JSON.stringify(body),
    })
      .then(() => {
        submitLoading.value = false;
      })
      .catch((error) => {
        console.log('Looks like there was a problem: ', error);
        submitLoading.value = false;
      });
  }
}
</script>
<template>
    <section
      class="bg-gray-100 h-screen w-screen flex justify-center items-center shadow-box"
    >
      <div v-if="loading" class="max-w-xs md:max-w-screen-md md:flex md:items-stretch">
        <div class="w-full h-56 md:h-96">
          <img
            class="w-full h-full object-cover bg-center rounded-t-lg md:h-full md:rounded-l-lg md:rounded-tr-none"
            :src="itemImage"
          />
        </div>
        <div
          class="bg-white rounded-b-lg md:rounded-r-lg md:rounded-bl-none p-5 flex flex-col justify-between items-start"
        >
          <p class="mb-2 text-gray-400 tracking-widest text-sm">{{ Category }}</p>
          <h2 class="text-2xl text-gray-900 mb-4">
            {{ items?.title }}
          </h2>
          <p class="text-gray-500">
            {{ items?.description }}
          </p>
          <div class="flex space-x-4 items-center mb-4 mt-6">
            <h2 class="text-3xl text-gray-800">$ {{ items?.price }}</h2>
          </div>
          <button
            v-show="!submitLoading"
            class="bg-gray-900 text-white font-semibold flex space-x-2 w-full justify-center rounded items-center py-2"
            @click="sendIt()"
          >
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                fill="#FFF"
              />
            </svg>
            <span>Buy it</span>
          </button>
          <button v-show="submitLoading" class="bg-gray-900 text-white font-semibold flex space-x-2 w-full justify-center rounded items-center h-10">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto; animation-play-state: running; animation-delay: 0s;" height="35px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
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
          </button>
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
    </section>
</template>