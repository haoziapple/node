<template>
    <div class="fillcontain">
        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="4">
                <p style="margin:5px;text-align:right">*库存不足告警值：</p>
            </el-col>

            <el-col :span="5">
                <el-input
                    placeholder="请输入"
                    v-model="stockWarn"
                    clearable>
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="20" :offset="4">
                <p style="text-align:left;">备注：设置最低库存告警阈值，低于阈值时，系统将在商品管理中标红提醒</p>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="6" :offset="4">
                <el-button type="primary">保存</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
		data() {
            return {
                stockWarn: '',
            }
        }
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
</style>
