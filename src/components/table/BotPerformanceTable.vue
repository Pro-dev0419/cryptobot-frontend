<template>
    <easy-data-table ref="tradesTable" v-if="tableItems.length>1" hide-footer primary-key="botId"
        :items="tableItems" :headers="tableFields" class="min-w-full">
        <template #item-botName="row">
            <div class="d-flex flex-row">
                <!-- <b-form-checkbox v-if="row.item.botId && botStore.botCount > 1"
                    v-model="botStore.botStores[row.item.botId].isSelected" title="Show bot in Dashboard" /> -->
                <span>{{ row.botName }}</span>
            </div>
        </template>
        <template #item-profitOpen="row">
            <profit-pill v-if="row.profitOpen && row.botId != 'Summary'" :profit-ratio="row.profitOpenRatio"
                :profit-abs="row.profitOpen" :stake-currency="row.stakeCurrency" />
        </template>
        <template #item-profitClosed="row">
            <profit-pill v-if="row.profitClosed && row.botId != 'Summary'"
                :profit-ratio="row.profitClosedRatio" :profit-abs="row.profitClosed"
                :stake-currency="row.stakeCurrency" />
        </template>
    </easy-data-table>
</template>

<script lang="ts">
import ProfitPill from '@/components/general/ProfitPill.vue';
import { formatPrice } from '@/shared/formatters';
import { defineComponent, computed } from 'vue';
import { useBotStore } from '@/stores/ftbotwrapper';
import { createBotSubStore } from '@/stores/ftbot';
import { ProfitInterface, ComparisonTableItems } from '@/types';
import type { Header, Item } from "vue3-easy-data-table";


export default defineComponent({
    name: 'BotPerformanceTable',
    components: { ProfitPill },
    setup() {
        const botStore = useBotStore();

        const tableFields: Header[] = [
            { value: 'botName', text: 'Bot Performance' },
            { value: 'trades', text: 'Trades' },
            { value: 'profitOpen', text: 'Open Profit' },
            { value: 'profitClosed', text: 'Closed Profit' }
        ];

        // const tableItems = [
        // 	{ "botName": "Curry", "trades": 178, "profitOpen": 77, "profitClosed": 77, }
        // ];

        const tableItems = computed(() => {
            const val: ComparisonTableItems[] = [];
            const summary: ComparisonTableItems = {
                botId: undefined,
                botName: 'Summary',
                profitClosed: 0,
                profitClosedRatio: undefined,
                profitOpen: 0,
                profitOpenRatio: undefined,
                stakeCurrency: 'USDT',
                wins: 0,
                losses: 0,
            };

            Object.entries(botStore.allProfit).forEach(([k, v]: [k: string, v: ProfitInterface]) => {
                const allStakes = botStore.allOpenTrades[k].reduce((a, b) => a + b.stake_amount, 0);
                const profitOpenRatio =
                    botStore.allOpenTrades[k].reduce((a, b) => a + b.profit_ratio * b.stake_amount, 0) /
                    allStakes;
                const profitOpen = botStore.allOpenTrades[k].reduce((a, b) => a + (b.profit_abs ?? 0), 0);

                // TODO: handle one inactive bot ...
                val.push({
                    botId: k,
                    botName: botStore.availableBots[k].botName,
                    trades: `${botStore.allOpenTradeCount[k]} / ${botStore.allBotState[k]?.max_open_trades || 'N/A'
                        }`,
                    profitClosed: v.profit_closed_coin,
                    profitClosedRatio: v.profit_closed_ratio || 0,
                    stakeCurrency: botStore.allBotState[k]?.stake_currency || '',
                    profitOpenRatio,
                    profitOpen,
                    wins: v.winning_trades,
                    losses: v.losing_trades,
                    balance: botStore.allBalance[k]?.total,
                    stakeCurrencyDecimals: botStore.allBotState[k]?.stake_currency_decimals || 3,
                });
                if (v.profit_closed_coin !== undefined) {
                    summary.profitClosed += v.profit_closed_coin;
                    summary.profitOpen += v.profit_all_coin;
                    summary.wins += v.winning_trades;
                    summary.losses += v.losing_trades;
                    // summary.decimals = this.allBotState[k]?.stake_currency_decimals || summary.decimals;
                }
            });
            val.push(summary);
            return val;
        });


        return {
            formatPrice,
            tableFields,
            tableItems,
            botStore,
        };
    },
});
</script>

