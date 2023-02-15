<template>
	<DefaultLayout>
		<h2 class="text-3xl mb-2">Kraken</h2>
		<p class="text-lg mb-2">Please fill your api keys to connect the bots to your account</p>
		<Card class="!h-fit py-1">
			<div class="w-full">
				<div class="space-y-4 md:space-y-6">
					<p v-if="errors.length">
					<ul>
						<li v-for="error in errors" class="text-red-500">{{ error }}</li>
					</ul>
					</p>
					<form class="space-y-4 md:space-y-6" action="#" @submit="handleSubmit">
						<div class="flex items-center">
							<label for="apikey" class="w-28 mb-2 text-sm font-medium text-gray-900 text-white">
							Api Key <span class="text-red-500">*</span></label>
							<input type="apikey" name="apikey" id="apikey" v-model="apiKey"
								class="bg-opacity-25 border border-gray-300 sm:text-sm rounded-lg block flex-1 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-gray-500">
						</div>
						<div class="flex items-center">
							<label for="apisecret"
								class="w-28 mb-2 text-sm font-medium text-gray-900 text-white">Api Secret
								<span class="text-red-500">*</span></label>
							<input type="apisecret" name="apisecret" id="apisecret" v-model="apiSecret"
								class="bg-opacity-25 border border-gray-300 sm:text-sm rounded-lg block flex-1 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-gray-500">
						</div>
						<button type="submit" class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-10 ml-28 border border-green-500 hover:border-transparent rounded-lg">
							Send</button>
					</form>
				</div>
			</div>
		</Card>
	</DefaultLayout>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Card from "@/components/core/Card.vue";
import { fetchWrapper } from '@/shared/fetch-wrapper';
import { useAuthStore } from '@/stores';
const baseUrl = 'http://localhost:3003/api';

export default defineComponent({
	name: "Kraken",
	props: {

	},
	emits: [],
	setup() {
		const errors: any = ref([]);
		const apiKey = ref(null);
		const apiSecret = ref(null);
        const authStore = useAuthStore();
		const handleSubmit = async (e: any) => {
			e.preventDefault();
			if(apiKey.value && apiSecret.value) {
				const Kraken = await fetchWrapper.post(`${baseUrl}/apikey/kraken`, { user_id: authStore.user.user.id, key: apiKey.value, secret: apiSecret.value});
			}

			errors.value = [];

            if (!apiKey.value) {
                errors.value.push('Api Key required.');
            }
            if (!apiSecret.value) {
                errors.value.push('Api Secret required.');
            }
		}

		return {
			errors,
			apiKey,
			apiSecret,
			handleSubmit
		}
	},

	components: {
		Card,
		DefaultLayout
	}
});
</script>

<style lang="scss">

</style>
