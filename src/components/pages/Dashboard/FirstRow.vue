<template>
	<div class="h-full">
		<Card>
			<div class="flex w-full items-center justify-between mb-3">
				<span class="card_title_1">Balance</span>
				<i class="las la-expand" />
			</div>
			<easy-data-table v-if="balanceCurrencies" class="dashboard-balance-tbl table-sm min-w-full"
				:items="balanceCurrencies" :headers="tableFields" hide-footer></easy-data-table>
			<!-- <div class="flex w-full items-center justify-between mb-3">
				<h3 class="font-semibold text-white">4.2m</h3>

				<BarChart />
			</div>
			<div class="flex flex-col gap-0.5">
				<span class="text-xs text-[#ffffff80]">
					<i class="las la-angle-up mr-1" /> the balance of all cryptocurrency
				</span>
				<span class="text-xs text-[#ffffff80]">
					<i class="las la-user mr-1" /> your have on the exchange
				</span>
				<span class="text-xs text-[#ffffff80]">
					<i class="las la-times-circle mr-1" /> 1,3% more than last week
				</span>
			</div> -->
		</Card>
	</div>

	<!--	<div class="h-full">
		<Card>
			<div class="flex w-full items-center justify-between mb-3">
				<span class="card_title_1">STORE SALES</span>
				<i class="las la-expand" />
			</div>
			<div class="flex w-full items-center justify-between mb-3">
				<h3 class="font-semibold text-white">$35.2K</h3>

				<LineChart />
			</div>
			<div class="flex flex-col gap-0.5">
				<span class="text-xs text-[#ffffff80]">
					<i class="las la-angle-up mr-1" /> 20.4% more than last week
				</span>
				<span class="text-xs text-[#ffffff80]">
					<i class="las la-shopping-bag mr-1" /> 33.5% new orders
				</span>
				<span class="text-xs text-[#ffffff80]">
					<i class="las la-dollar-sign mr-1" /> 6.21% conversion rate
				</span>
			</div>
		</Card>
	</div>-->

	<div class="h-full">
		<Card>
			<div class="flex w-full items-center justify-between mb-3">
				<span class="card_title_1">PORTFOLIO DISTRIBUTION</span>
				<i class="las la-expand" />
			</div>
			<PieChart v-if="balanceCurrencies" :currencies="balanceCurrencies" />

			<!-- <BalanceChart v-if="balanceCurrencies" :currencies="balanceCurrencies" /> -->
			<!-- <div class="flex w-full items-center justify-between mb-3">
				<h3 class="font-semibold text-white">4,490</h3>

				<PieChart />
			</div>
			<div class="flex flex-col gap-0.5">
				<span class="text-xs text-[#ffffff80]">
					<i class="las la-angle-up mr-1" /> All cryptocurrency in
				</span>
				<span class="text-xs text-[#ffffff80]">
					<i class="lab la-facebook-f mr-1" /> your portfolio in Exchange
				</span>
				<span class="text-xs text-[#ffffff80]">
					<i class="lab la-youtube mr-1" /> see below
				</span>
			</div> -->
		</Card>
	</div>

	<div class="col-span-2">
		<Card>
			<!--	<div class="flex w-full items-center justify-between mb-3">
				<span class="card_title_1">BANDWIDTH</span>
				<i class="las la-expand" />
			</div>
			<div class="flex w-full items-center justify-between mb-3">
				<h3 class="font-semibold text-white">4.5TB</h3>

				<DonutChart />
			</div>
			<div class="flex flex-col gap-0.5">
				<span class="text-xs text-[#ffffff80]">
					<i class="las la-angle-up mr-1" /> 5.3% more than last week
				</span>
				<span class="text-xs text-[#ffffff80]">
					<i class="las la-hdd mr-1" /> 10.5% from total usage
				</span>
				<span class="text-xs text-[#ffffff80]">
					<i class="las la-hand-pointer mr-1" /> 2MB per visit
				</span>
			</div>-->
			<!-- <table class="min-w-full">
				<thead>
					<tr>
						<th>BOT PERFORMANCE</th>
						<th>TRADES</th>
						<th>OPEN PROFIT</th>
						<th>CLOSED PROFIT</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Athenea 1</td>
						<td>1/3</td>
						<td>-2.42% (-72,773)</td>
						<td>0.00% (-2664,291)</td>
					</tr>
				</tbody>
			</table> -->
			<div class="flex w-full items-center justify-between mb-3">
				<span class="card_title_1">PROFIT</span>
				<i class="las la-expand" />
			</div>
			<bot-performance-table />
		</Card>
	</div>
</template>

<script lang="ts">
import Card from "@/components/core/Card.vue";
import BotPerformanceTable from "@/components/table/BotPerformanceTable.vue";
import BarChart from "@/components/charts/BarChart.vue";
import LineChart from "@/components/charts/LineChart.vue";
import PieChart from "@/components/charts/PieChart.vue";
import DonutChart from "@/components/charts/DonutChart.vue";
import type { Header, Item } from "vue3-easy-data-table";

import { formatPrice, formatPercent } from '@/shared/formatters';
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useBotStore } from '@/stores/ftbotwrapper';


export default defineComponent({
	name: "FirstRow",
	props: {

	},
	emits: [],
	setup() {
		const botStore = useBotStore();
		const hideSmallBalances = ref(true);

		const smallBalance = computed((): any => {
			return Number((0.1 ** botStore.activeBot?.stakeCurrencyDecimals).toFixed(8));
		});

		const balanceCurrencies = computed(() => {
			if (!hideSmallBalances.value) {
				return botStore.activeBot?.balance.currencies;
			}

			if (botStore.activeBot != undefined) {
				return botStore.activeBot?.balance.currencies?.filter(
					(v) => v.est_stake >= smallBalance.value,
				);
			} else {
				return;
			}
		});
		// const balanceCurrencies: Item[] = [
		// 	{ "currency": "Curry", "free": 178, "est_stake": 77 }
		// ];

		const tableFields: Header[] = [
			{ value: 'currency', text: 'Currency' },
			{ value: 'free', text: 'Available' },
			{
				value: 'est_stake',
				text: `in ${botStore.activeBot?.balance.stake}`
			},
		];

		const formatCurrency = (value: any) => {
			return value ? value.toFixed(5) : '';
		};

		onMounted(async () => {
			await botStore.allGetDaily({ timescale: 30 });
			// botStore.activeBot.getTrades();
			botStore.activeBot?.getOpenTrades();
			botStore.activeBot?.getProfit();
		});

		return {
			botStore,
			formatPrice,
			hideSmallBalances,
			formatPercent,
			smallBalance,
			balanceCurrencies,
			tableFields,
			formatCurrency,
		};
	},
	components: {
		Card,
		BarChart,
		LineChart,
		PieChart,
		DonutChart,
		BotPerformanceTable,
	}
});
</script>

<style lang="scss">
.vue3-easy-data-table {
	border: none !important;

	table,
	colgroup,
	tr,
	td,
	th,
	thead,
	tbody,
	span {
		color: white;
		background-color: transparent !important;
	}

	tr:hover td {
		color: white ! important;
	}

	.vue3-easy-data-table__main {
		background-color: transparent !important;
	}
}
</style>
