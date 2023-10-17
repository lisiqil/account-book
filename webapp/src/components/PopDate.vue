<script setup lang="js">
import { ref, defineProps, defineEmits, defineExpose } from "vue";

const { selectedDate, formatter, type, title } = defineProps({
  selectedDate: {
    type: Date,
    required: true,
  },
  formatter: {
    type: Function,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["onChange"]);
const showDate = ref(false);
const minDate = ref(new Date(2021, 0, 1));
const maxDate = ref(new Date());
defineExpose({
  showDate,
});

const _formatter = (type, option) => {
  if (type === 'year') {
    option.text += ' 年';
  }
  if (type === 'month') {
    option.text += ' 月';
  }
  return option;
};
</script>

<template>
  <van-popup v-model:show="showDate" position="bottom" round>
    <van-date-picker
      :v-model="selectedDate"
      :title="title || '选择年月'"
      :columns-type="type == 'month-day' ? ['month', 'day'] : ['year', 'month']"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter || _formatter"
      @confirm="(date) => emit('onChange', date)"
      @cancel="() => (showDate = false)"
    />
  </van-popup>
</template>

<style lang="less" scoped></style>
