<template>
    <DefaultLayout>
        <h2 class="text-3xl mb-4">Verification</h2>
        <Card class="!h-fit py-1">
            <Wizard navigable-tabs :doneButton="{ text: 'Submit' }" :custom-tabs="[
                {
                    title: 'Registration as private user',
                },
                {
                    title: 'Address',
                },
                {
                    title: 'Documentation',
                }
            ]" :beforeChange="onTabBeforeChange" @change="onChangeCurrentTab" @complete:wizard="wizardCompleted">
                <div v-if="currentTabIndex === 0">
                    <h4 class="text-xl">Personal Information</h4>
                    <p>Insert your personal information</p>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label for="first-name"
                                class="block mb-2 text-sm font-medium text-gray-900 text-white">First
                                Name
                                <span class="text-red-500">*</span></label>
                            <input type="text" name="first-name" id="first-name"
                                class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                        </div>
                        <div>
                            <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 text-white">Last
                                Name
                                <span class="text-red-500">*</span></label>
                            <input type="text" name="last-name" id="last-name"
                                class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                        </div>
                        <div>
                            <label for="country" class="block mb-2 text-sm font-medium text-gray-900 text-white">Country
                                of residence
                                <span class="text-red-500">*</span></label>
                            <select
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
                            <select
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
                            <input type="text" name="address" id="address"
                                class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                        </div>
                        <div>
                            <label for="province"
                                class="block mb-2 text-sm font-medium text-gray-900 text-white">State/Country/Province
                                <span class="text-red-500">*</span></label>
                            <input type="text" name="province" id="province"
                                class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                        </div>
                        <div>
                            <label for="zipcode" class="block mb-2 text-sm font-medium text-gray-900 text-white">Zip
                                code
                                <span class="text-red-500">*</span></label>
                            <input type="text" name="zipcode" id="zipcode"
                                class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                        </div>
                        <div>
                            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 text-white">City
                                <span class="text-red-500">*</span></label>
                            <input type="text" name="city" id="city"
                                class="bg-opacity-75 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                        </div>
                    </div>
                </div>
                <div v-if="currentTabIndex === 2">
                    <h4 class="text-xl">Required documentation: Valid ID or National Identity Document</h4>
                    <p>To complete the verificatioin process you need to send a digitized copy of your ID or passport.
                    </p>
                    <div class="max-w-xl mt-4">
                        <label
                            class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                            <span class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <span class="font-medium text-gray-600">
                                    Drop files to Attach, or
                                    <span class="text-blue-600 underline">browse</span>
                                </span>
                            </span>
                            <input type="file" name="file_upload" class="hidden">
                        </label>
                    </div>
                </div>
            </Wizard>
        </Card>
    </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Card from "@/components/core/Card.vue";
import Wizard from 'form-wizard-vue3';
import 'form-wizard-vue3/dist/form-wizard-vue3.css';

export default defineComponent({
    name: "Verification",
    data() {
        return {
            currentTabIndex: 0,
        };
    },
    methods: {
        onChangeCurrentTab(index: any, oldIndex: any) {
            console.log(index, oldIndex);
            this.currentTabIndex = index;
        },
        onTabBeforeChange() {
            if (this.currentTabIndex === 0) {
                console.log('First Tab');
            }
            console.log('All Tabs');
        },
        wizardCompleted() {
            console.log('Wizard Completed');
        },
    },
    computed: {
        nextButtonOptions() {
            return this.currentTabIndex === 2
                ? {
                    text: 'Submit',
                    icon: 'check',
                    hideIcon: true, // default false but selected for sample
                    hideText: false, // default false but selected for sample
                    disabled: true,
                }
                : { disabled: false };
        },
    },
    setup() { },
    components: {
        DefaultLayout,
        Wizard,
        Card
    }
});

</script>

<style lang="scss">
.form-wizard-vue {
    .fw-step-title.active {
        color: white;
    }

    .fw-body-list {
        border-bottom: 1px solid #6b7280;
    }

    .fw-list-wrapper-icon {
        border: 1px solid #22c55e;
        background: transparent !important;
    }

    .fw-list-progress-active {
        background: linear-gradient(90deg, #22c55e 3.88%, #0000 105.52%) !important;
    }

    .fw-btn {
        background: transparent;
        border: 1px solid #15803d;
        color: #22c55e;

        &:hover {
            color: white;
            background-color: #22c55e;
        }
    }

    .fw-footer {
        padding: 10px 60px;
    }
}
</style>
