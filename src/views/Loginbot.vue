<template>
	<DefaultLayout>
		<div class="space-y-1">
			<form ref="formRef" novalidate @submit.stop.prevent="handleSubmit" @reset="handleReset">
				Bot Name
				<input class="bg-inherit rounded-lg focus:outline" v-model.lazy="auth.botName"
					placeholder="nombre del bot" />
				<p>Botname is: {{ auth.botName }}</p>
				<br>
				API Url
				<input class="bg-inherit" v-model.lazy="auth.url" placeholder="direccion del bot" />
				<p>Bot Url is: {{ auth.url }}</p>
				<br>
				Username
				<input class="bg-inherit" v-model.lazy="auth.username" placeholder="username" />
				<p>Username is: {{ auth.username }}</p>
				<br>
				Password
				<input class="bg-inherit" v-model.lazy="auth.password" placeholder="password" />
				<p>Username password is: {{ auth.password }}</p>
				<br>
				<button type="reset">Reset </button>
				<br>
				<button @submit.stop.prevent="handleSubmit">Submmit</button>
				<router-link to="/">Go to Home</router-link>
			</form>
		</div>
		<!-- <VueApexCharts width="220" height="90" type="bar" :options="chartOptions" :series="series"></VueApexCharts> -->
	</DefaultLayout>
	<!--<div>
		<Card>
			<input v-model="auth.botName" placeholder="edit me" />
		</Card>
	</div> -->
	<!--<div>
				<t-input value="Hello world" name="my-input" />
		<form ref="formRef" novalidate @submit.stop.prevent="handleSubmit" @reset="handleReset">
			<b-form-group label="Bot Name" label-for="name-input">
				<b-form-input id="name-input" v-model="auth.botName" placeholder="Bot Name"
					@keydown.enter.native="handleOk"></b-form-input>
			</b-form-group>
			<b-form-group :state="urlState" label="API Url" label-for="url-input" invalid-feedback="API Url required">
				<b-form-input id="url-input" v-model="auth.url" :state="urlState" required
					@keydown.enter.native="handleOk"></b-form-input>
			</b-form-group>
			<b-form-group :state="nameState" label="Username" label-for="username-input"
				invalid-feedback="Name and Password are required.">
				<b-form-input id="username-input" v-model="auth.username" required placeholder="Freqtrader"
					@keydown.enter.native="handleOk"></b-form-input>
			</b-form-group>
			<b-form-group label="Password" label-for="password-input" invalid-feedback="Invalid Password"
				:state="pwdState">
				<b-form-input id="password-input" v-model="auth.password" required type="password"
					@keydown.enter.native="handleOk"></b-form-input>
			</b-form-group>
			<div>
				<b-alert v-if="errorMessage" class="alert-wrap" show variant="warning">
					{{  errorMessage  }}
					<br />
					<span v-if="errorMessageCORS">
						Please also check your bot's CORS configuration:
						<a href="https://www.freqtrade.io/en/latest/rest-api/#cors">Freqtrade CORS
							documentation</a></span>
				</b-alert>
			</div>
			<div v-if="inModal === false" class="float-right">
				<b-button class="mr-2" type="reset" variant="danger">Reset</b-button>
				<b-button type="submit" variant="primary">Submit</b-button>
			</div>
		</form>
	</div>-->
	<!--<div class="flex items-center justify-center h-screen px-6 bg-gray-200">
		<div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
			<div class="flex items-center justify-center">
				<svg class="w-10 h-10" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
						fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" />
					<path
						d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
						fill="white" />
				</svg>
				<span class="text-2xl font-semibold text-gray-700">Login Bot</span>
			</div>

			<form class="mt-4" @submit.prevent="login">
				<label class="block">
					<span class="text-sm text-gray-700">Botname</span>
					<input type="name-input"
						class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
						v-model="auth.botName" />
				</label>

				<label class="block">
					<span class="text-sm text-gray-700">API Url</span>
					<input type="email"
						class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
						v-model="email" />
				</label>

				<label class="block">
					<span class="text-sm text-gray-700">Username</span>
					<input type="email"
						class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
						v-model="email" />
				</label>

				<label class="block mt-3">
					<span class="text-sm text-gray-700">Password</span>
					<input type="password"
						class="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
						v-model="password" />
				</label>

				<div class="flex items-center justify-between mt-4">
					<div>
						<label class="inline-flex items-center">
							<input type="checkbox"
								class="text-indigo-600 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500" />
							<span class="mx-2 text-sm text-gray-600">Remember me</span>
						</label>
					</div>

					<div>
						<a class="block text-sm text-indigo-700 fontme hover:underline" href="#">Forgot your
							password?</a>
					</div>
				</div>

				<div class="mt-6">
					<button type="submit"
						class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500">
						Sign in
					</button>
				</div>
			</form>
		</div>
	</div>-->
</template>

<script lang="ts">

import DefaultLayout from "@/layouts/DefaultLayout.vue";

import { useUserService } from '@/shared/userService';

import { AuthPayload } from '@/types';

import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from '@/composables/router-helper';
import { useBotStore } from '@/stores/ftbotwrapper';
import Card from '@/components/core/Card.vue';

// const defaultURL = 'http://192.168.1.138:8080';
const defaultURL = 'http://213.194.169.88:8080';

export default defineComponent({
	name: "Login",
	props: {
		inModal: { default: false, type: Boolean },
	},
	emits: ["loginResult"],
	setup(props, { emit }) {
		const router = useRouter();
		const route = useRoute();
		const botStore = useBotStore();
		const nameState = ref<boolean | null>();
		const pwdState = ref<boolean | null>();
		const urlState = ref<boolean | null>();
		const errorMessage = ref<string>("");
		const errorMessageCORS = ref<boolean>(false);
		const formRef = ref<HTMLFormElement>();
		const auth = ref<AuthPayload>({
			botName: "Athenea1",
			url: defaultURL,
			username: "freq",
			password: "freq",
		});
		const emitLoginResult = (value: boolean) => {
			emit("loginResult", value);
		};
		const checkFormValidity = () => {
			const valid = formRef.value?.checkValidity();
			nameState.value = valid || auth.value.username !== "";
			pwdState.value = valid || auth.value.password !== "";
			return valid;
		};
		const resetLogin = () => {
			auth.value.url = defaultURL;
			auth.value.username = "";
			auth.value.password = "";
			nameState.value = null;
			pwdState.value = null;
			errorMessage.value = "";
		};
		const handleReset = (evt) => {
			evt.preventDefault();
			resetLogin();
		};
		const handleSubmit = () => {
			// Exit when the form isn't valid
			/*if (!checkFormValidity()) {
				return;
			}*/
			errorMessage.value = "";
			const userService = useUserService(botStore.nextBotId);
			// Push the name to submitted names
			userService
				.login(auth.value)
				.then(() => {
					const botId = botStore.nextBotId;
					botStore.addBot({
						botName: auth.value.botName,
						botId,
						botUrl: auth.value.url,
					});
					if (botStore.selectedBot === "") {
						console.log(`selecting bot ${botId}`);
						botStore.selectBot(botId);
					}
					emitLoginResult(true);
					botStore.allRefreshFull();
					if (props.inModal === false) {
						if (typeof route.query?.redirect === "string") {
							const resolved = router.resolve({ path: route.query?.redirect });
							if (resolved.route.name !== "404") {
								router.push(resolved.route.path);
							}
							else {
								router.push("/");
							}
						}
						else {
							router.push("/");
						}
					}
				})
				.catch((error) => {
					errorMessageCORS.value = false;
					// this.nameState = false;
					console.error(error);
					if (error.response && error.response.status === 401) {
						nameState.value = false;
						pwdState.value = false;
						errorMessage.value =
							"Connected to bot, however Login failed, Username or Password wrong.";
					}
					else {
						urlState.value = false;
						errorMessage.value = `Login failed.
Please verify that the bot is running, the Bot API is enabled and the URL is reachable.
You can verify this by navigating to ${auth.value.url}/api/v1/ping to make sure the bot API is reachable`;
						if (auth.value.url !== window.location.origin) {
							errorMessageCORS.value = true;
						}
					}
					console.error(errorMessage.value);
					emitLoginResult(false);
				});
		};
		const handleOk = (evt) => {
			evt.preventDefault();
			handleSubmit();
		};
		return {
			nameState,
			pwdState,
			urlState,
			errorMessage,
			auth,
			checkFormValidity,
			resetLogin,
			handleReset,
			handleOk,
			handleSubmit,
			formRef,
			errorMessageCORS,
		};
	},
	components: { Card }
});
</script>

<style scoped>

</style>