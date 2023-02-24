<template>
	<DefaultLayout>
		<Card>
			<easy-data-table class="min-w-full" :items="marketplaceData" :headers="tableFields" hide-footer>
				<template #item-popularity="row">
					<progress-bar :percent="row.popularity" />
				</template>
				<template #item-subscribe="row">
					<button class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-1 px-4 rounded-full">
						Subscribe
					</button>
				</template>
			</easy-data-table>
		</Card>
	</DefaultLayout>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Card from "@/components/core/Card.vue";
import ProgressBar from "@/components/utils/progressBar.vue";


export default defineComponent({
	name: "Marketplace",
	props: {

	},
	emits: [],
	setup() {
		const marketplaceData = computed(() => {
			return [{
				index: '1',
				name: 'Bitcoin',
				category: 'crypto',
				popularity: '40',
				revenue: '$33',
				minStartBalance: '$10',
				price: '$50',
				profileTrader: 'Info',
				subscribe: 'Subscribe'
			},
			{
				index: '2',
				name: 'Aptos',
				category: 'crypto',
				popularity: '70',
				revenue: '$53',
				minStartBalance: '$15',
				price: '$70',
				profileTrader: 'Info',
				subscribe: 'Subscribe'
			}];
		});
		const tableFields = computed(() => {
			return [
				{ value: 'index', text: 'NO' },
				{ value: 'name', text: 'Name' },
				{ value: 'category', text: 'Category' },
				{ value: 'popularity', text: 'Popularity' },
				{ value: 'revenue', text: 'Revenue' },
				{ value: 'minStartBalance', text: ' Min Starting Balance' },
				{ value: 'price', text: 'Price' },
				{ value: 'profileTrader', text: 'Profile Trader/Info' },
				{ value: 'subscribe', text: 'Subscribe' }
			];
		});

		return {
			tableFields,
			marketplaceData,
		}
	},
	components: {
		Card,
		DefaultLayout,
		ProgressBar
	}
});
</script>

<style lang="scss">

</style>
