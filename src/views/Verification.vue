<template>
    <DefaultLayout>
        <h2 class="text-3xl mb-4">Verification</h2>
        <Card class="!h-fit py-1">
            <!-- component -->
            <form class="p-5" method="post" @submit="sendVerificatioinInfo">
                <div class="mx-4 p-4">
                    <div class="flex items-center">
                        <div class="flex items-center relative">
                            <div :class="[currentTabIndex >= 0 
                                ? (currentTabIndex == 0  ? 'border-emerald-600 text-white bg-emerald-600' : 'border-emerald-600 text-emerald-600')
                                : 'border-gray-300 text-white', 
                                'rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2']">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div :class="[currentTabIndex >= 0 
                                ? 'text-emerald-600' 
                                : 'text-gray-500', 
                                'absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase']">Registration as private user</div>
                        </div>
                        <div :class="[currentTabIndex > 0
                            ? 'border-emerald-600' 
                            : 'border-gray-300',
                            'flex-auto border-t-2 transition duration-500 ease-in-out' ]">
                        </div>
                        <div class="flex items-center text-white relative">
                            <div :class="[currentTabIndex >= 1 
                                ? (currentTabIndex == 1  ? 'border-emerald-600 text-white bg-emerald-600' : 'border-emerald-600 text-emerald-600')
                                : 'border-gray-300 text-white', 
                                'rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2']">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus ">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="8.5" cy="7" r="4"></circle>
                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                </svg>
                            </div>
                            <div :class="[currentTabIndex >= 1 
                                ? 'text-emerald-600' 
                                : 'text-gray-500', 
                                'absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase']">Address</div>
                        </div>
                        <div :class="[currentTabIndex > 1
                            ? 'border-emerald-600' 
                            : 'border-gray-300',
                            'flex-auto border-t-2 transition duration-500 ease-in-out' ]">
                        </div>
                        <div class="flex items-center text-gray-500 relative">
                            <div :class="[currentTabIndex >= 2 
                                ? (currentTabIndex == 2  ? 'border-emerald-600 text-white bg-emerald-600' : 'border-emerald-600 text-emerald-600')
                                : 'border-gray-300 text-white', 
                                'rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2']">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail ">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div :class="[currentTabIndex >= 2 
                                ? 'text-emerald-600' 
                                : 'text-gray-500', 
                                'absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase']">Documentation</div>
                        </div>
                    </div>
                </div>
                <div class="mt-8 p-4">
                    <div v-if="currentTabIndex === 0">
                        <h4 class="text-xl">Personal Information</h4>
                        <p>Insert your personal information</p>
                        <div class="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label for="first-name"
                                    class="block mb-2 text-sm font-medium text-gray-900 text-white">First
                                    Name
                                    <span class="text-red-500">*</span></label>
                                <input type="text" name="first-name" id="first-name" v-model="personalInfo.firstName"
                                    class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                            </div>
                            <div>
                                <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 text-white">Last
                                    Name
                                    <span class="text-red-500">*</span></label>
                                <input type="text" name="last-name" id="last-name" v-model="personalInfo.lastName"
                                    class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                            </div>
                            <div>
                                <label for="country" class="block mb-2 text-sm font-medium text-gray-900 text-white">Country
                                    of residence
                                    <span class="text-red-500">*</span></label>
                                <select v-model="personalInfo.country"
                                    class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                                    <option selected>Choose a country</option>
                                    <option class="bg-red" value="US">United States</option>
                                    <option class="bg-red" value="CA">Canada</option>
                                    <option class="bg-red" value="FR">France</option>
                                    <option class="bg-red" value="DE">Germany</option>
                                </select>
                            </div>
                            <div>
                                <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 text-white">Gender
                                    <span class="text-red-500">*</span></label>
                                <select v-model="personalInfo.gender"
                                    class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                                    <option selected>Male</option>
                                    <option class="bg-red" value="US">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div v-if="currentTabIndex === 1">
                        <h4 class="text-xl">Address of residence</h4>
                        <p>Enter your address</p>
                        <div class="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label for="address" class="block mb-2 text-sm font-medium text-gray-900 text-white">Address
                                    <span class="text-red-500">*</span></label>
                                <input type="text" name="address" id="address" v-model="personalInfo.address"
                                    class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500" required>
                            </div>
                            <div>
                                <label for="province"
                                    class="block mb-2 text-sm font-medium text-gray-900 text-white">State/Country/Province
                                    <span class="text-red-500">*</span></label>
                                <input type="text" name="province" id="province" v-model="personalInfo.state"
                                    class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500" required>
                            </div>
                            <div>
                                <label for="zipcode" class="block mb-2 text-sm font-medium text-gray-900 text-white">Zip
                                    code
                                    <span class="text-red-500">*</span></label>
                                <input type="text" name="zipcode" id="zipcode" v-model="personalInfo.zipcode"
                                    class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500" required>
                            </div>
                            <div>
                                <label for="city" class="block mb-2 text-sm font-medium text-gray-900 text-white">City
                                    <span class="text-red-500">*</span></label>
                                <input type="text" name="city" id="city" v-model="personalInfo.city"
                                    class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500" required>
                            </div>
                        </div>
                    </div>
                    <div v-if="currentTabIndex === 2">
                        <h4 class="text-xl">Required documentation: Valid ID or National Identity Document</h4>
                        <p>To complete the verificatioin process you need to send a digitized copy of your ID or passport.
                        </p>
                        <div class="max-w-xl mt-4">
                            <vue-dropzone
                                ref="myVueDropzone" 
                                id="dropzone" 
                                :options="dropzoneOptions"
                                v-on:vdropzone-success="dropzoneSuccess"
                            />
                        </div>
                    </div>
                    <div v-if="tabError" class="text-lg text-red-500 mt-3">
                        Please fill in all fields.
                    </div>
                    <div class="flex py-2 mt-4">
                        <button type="button" class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                            hover:bg-gray-200  
                            bg-gray-100 
                            text-gray-700 
                            border duration-200 ease-in-out 
                            border-gray-600 transition"
                            @click="() =>currentTabIndex == 0 ? 0 : currentTabIndex--">Previous</button>
                        <div class="flex-auto flex flex-row-reverse">
                            <button v-if="currentTabIndex<2" type="button" class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                                hover:bg-emerald-600  
                                bg-emerald-600 
                                text-emerald-100 
                                border duration-200 ease-in-out 
                                border-emerald-600 transition"
                                @click="nextStep">Next</button>
                            <button v-if="currentTabIndex==2" type="submit" class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                                hover:bg-emerald-600  
                                bg-emerald-600 
                                text-emerald-100 
                                border duration-200 ease-in-out 
                                border-emerald-600 transition"
                                >Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </Card>
    </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import vueDropzone from 'vue2-dropzone-vue3';
import Toast from 'v-toast';
import { fetchWrapper } from '@/shared/fetch-wrapper';
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Card from "@/components/core/Card.vue";
import { useAuthStore } from '@/stores';

const baseUrl = 'http://localhost:3003/api';

export default defineComponent({
    name: "Verification",
    data () {
        return {
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                maxFiles: 1,
                acceptedFiles: 'image/*',
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { "My-Awesome-Header": "header value" }
            }
        }
    },
    setup() {
        const authStore = useAuthStore();
        const currentTabIndex = ref(0);
        const tabError = ref(false);
        const personalInfo = ref({
            user_id: authStore.user.user.id,
            firstName : null,
            lastName: null,
            country: null,
            gender: null,
            address: null,
            state: null,
            zipcode: null,
            city: null,
            identifyImg: null
        });
        const nextStep = () => {
            switch (currentTabIndex.value) {
                case 0:
                    if(personalInfo.value.firstName && personalInfo.value.lastName && personalInfo.value.country && personalInfo.value.gender) {
                        currentTabIndex.value++;
                        tabError.value = false;
                    } else {
                        tabError.value = true;
                    }
                    break;
                case 1:
                    if(personalInfo.value.address && personalInfo.value.country && personalInfo.value.zipcode && personalInfo.value.city) {
                        currentTabIndex.value++;
                        tabError.value = false;
                    } else {
                        tabError.value = true;
                    }
                    break;
                default:
                    break;
            }
        }

        const dropzoneSuccess = (file: any, response: any) => {
            personalInfo.value.identifyImg = file.dataURL;
            console.log(file);
        }

        const sendVerificatioinInfo = async (e: any) => {
            e.preventDefault();
            if(!personalInfo.value.identifyImg) {
                tabError.value = true;
            } else {
                fetchWrapper.post(`${baseUrl}/kyc-verification`, { verificationInfo: personalInfo.value })
                    .then(res => Toast.success({
                        message: res.status,
                        duration: 3000
                    }))
                    .catch(error => Toast.error({
                        message: error,
                        duration: 3000
                    }));
            }
            
        }
        return {
            currentTabIndex,
            tabError,
            personalInfo,
            nextStep,
            dropzoneSuccess,
            sendVerificatioinInfo
        }
     },
    components: {
        vueDropzone,
        DefaultLayout,
        Card
    }
});

</script>
<style lang="scss">
.toast-mask .toast {
    max-width: 50%;
    height: auto;
    white-space: pre-wrap;
}
</style>