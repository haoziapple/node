<template>
    <div class="fillcontain">
        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="4">
                <p style="margin:5px;text-align:right">*输入原密码：</p>
            </el-col>

            <el-col :span="5">
                <el-input
                    placeholder="请输入"
                    v-model="orignPwd"
                    type="password"
                    clearable>
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="4">
                <p style="margin:5px;text-align:right">*输入新密码：</p>
            </el-col>

            <el-col :span="5">
                <el-input
                    placeholder="请输入"
                    v-model="newPwd"
                    type="password"
                    clearable>
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="4">
                <p style="margin:5px;text-align:right">*再次输入新密码：</p>
            </el-col>

            <el-col :span="5">
                <el-input
                    placeholder="请输入"
                    v-model="twicePwd"
                    type="password"
                    clearable>
                </el-input>
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
                orignPwd: '',
                newPwd: '',
                twicePwd: '',
            }
        }
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
</style>
