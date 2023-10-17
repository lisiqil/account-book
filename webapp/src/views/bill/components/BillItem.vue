<script setup>
import { computed } from "vue";
import dayjs from "dayjs";
import { showToast } from "vant";
import { useRouter } from "vue-router";

// 对接接口 查询账单详情
import { deleteBill } from "@/api/bill";

const router = useRouter();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const emits = defineEmits(["delete"]);

// 当日总支出
const totalExpenses = computed(() => {
  return props.item.bills.reduce((cur, bill) => {
    if (bill.pay_type === 1) cur += Number(bill?.amount);
    return cur;
  }, 0);
});

// 当日总收入
const totalIncome = computed(() => {
  return props.item.bills.reduce((cur, bill) => {
    if (bill.pay_type === 2) cur += Number(bill?.amount);
    return cur;
  }, 0);
});

// 查看详情
const clickDetail = async (id) => {
  router.push({
    name: "detail",
    query: { id },
  });
};

const clickDelete = async (id) => {
  if (!id) return;
  const { code, message } = await deleteBill(id);
  if (code === 200) {
    showToast(message);
    emits("delete");
  }
};
</script>

<template>
  <!-- <div class="card-list"> -->
  <van-cell-group inset class="card">
    <!-- 单日统计 -->
    <div class="card-title">
      <span class="card-title-date"> {{ props.item.date }} </span>
      <span class="card-title-amount">
        <span class="expense"
          ><van-icon name="minus" />￥{{ totalExpenses }}</span
        >
        |
        <span class="income"><van-icon name="plus" />￥{{ totalIncome }}</span>
      </span>
    </div>

    <!-- 单日清单 -->
    <van-swipe-cell v-for="bill in props.item.bills" :key="bill.id">
      <van-cell @click="clickDetail(bill.id)" class="card-item">
        <div class="item-body">
          <span>
            <van-tag
              mark
              :type="bill.pay_type === 1 ? 'primary' : 'warning'"
              size="large"
              >{{ bill.type_name }}
            </van-tag>
          </span>
          <span :style="{ color: 'green' }" v-if="bill.pay_type === 1"
            >- {{ bill.amount }}
          </span>
          <span :style="{ color: 'red' }" v-else>+ {{ bill.amount }}</span>
        </div>
        <div class="item-footer">
          <span>
            <!-- {{ dayjs(Number(bill.date)).format("HH:mm") }} -->
            {{ dayjs(Number(bill.date)).format("HH:mm") }}
          </span>
          <span v-if="bill.remark">
            {{ " | " + bill.remark + bill.id }}
          </span>
        </div>
      </van-cell>
      <template #right>
        <van-button
          square
          type="danger"
          text="删除"
          style="height: 100%"
          @click="clickDelete(bill.id)"
        />
      </template>
    </van-swipe-cell>
  </van-cell-group>
</template>

<style lang="less" scoped>
.card-list {
  background-color: #f7f8fa;
  padding: 0 10px;
  height: 80vh;
}
.card {
  margin-top: 10px;
  border: 1px solid #f7f8fa;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

  .card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    background-color: #f7f8fa;
    color: #000000;
    .card-title-date {
      font-size: 18px;
    }
    .card-title-amount {
      font-size: 16px;
      font-weight: 600;
      .expense {
        margin-left: 15px;
        color: red;
      }
      .income {
        color: green;
      }
    }
  }

  .card-item {
    padding: 10px 10px;
    .item-body {
      font-size: 18px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
    }
    .item-footer {
      padding-top: 10px;
      font-size: 13px;
      text-align: left;
    }
  }
}
</style>
