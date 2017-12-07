<template>
    <div class="fillcontain">
        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="4">
                <p style="margin:5px;text-align:right">*商品名称：</p>
            </el-col>

            <el-col :span="5">
                <el-input
                    placeholder="请输入"
                    v-model="itemName"
                    clearable>
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="4">
                <p style="margin:5px;text-align:right">*商品分类：</p>
            </el-col>

            <el-col :span="5">
                <el-select v-model="itemCategory" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="4">
                <p style="margin:5px;text-align:right">*面额（元）：</p>
            </el-col>

            <el-col :span="5">
                <el-input
                    placeholder="请输入"
                    v-model="itemValue"
                    clearable>
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="4">
                <p style="margin:5px;text-align:right">*成本价（元）：</p>
            </el-col>

            <el-col :span="5">
                <el-input
                    placeholder="请输入"
                    v-model="itemCost"
                    clearable>
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="4">
                <p style="margin:5px;text-align:right">*库存：</p>
            </el-col>

            <el-col :span="5">
                <el-input
                    placeholder="请输入"
                    v-model="itemStock"
                    :disabled="true"
                    clearable>
                </el-input>
            </el-col>

            <el-col :span="4">
                <el-button type="primary">导入</el-button>
            </el-col>
        </el-row>

        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="4">
                <p style="margin:5px;text-align:right">*商品销售价配置：</p>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="toAddPrice()">新增</el-button>
            </el-col>
        </el-row>

        <el-table
            :data="tableData"
            border
            style="width: 90%;margin-left:20px">
            <el-table-column
            prop="id"
            label="序号">
            </el-table-column>
            <el-table-column
            prop="value"
            label="面额（元）">
            </el-table-column>
            <el-table-column
            prop="levelName"
            label="下游用户等级">
            </el-table-column>
            <el-table-column
            prop="price"
            label="销售价（元）">
            </el-table-column>
            <el-table-column label="操作" width="250">
                  <template scope="scope">
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)"
                      >删除</el-button>
                  </template>
                </el-table-column>
        </el-table>

        <el-row :gutter="20" style="margin: 10px; padding:10px">
            <el-col :span="6" :offset="4">
                <el-button type="primary">保存</el-button>
            </el-col>
        </el-row>

        <el-dialog title="新增销售价" v-model="dialogFormVisible">
                <el-form :model="newPrice">
                    <el-form-item label="面额（元）" label-width="100px">
                        <el-input v-model="newPrice.value" auto-complete="off" :disabled="true"></el-input>
                    </el-form-item>
                    
                    <el-form-item label="*下游用户等级" label-width="100px">
                        <el-select v-model="newPrice.level" placeholder="请选择">
                            <el-option
                            v-for="item in levelOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="销售价（元）" label-width="100px">
                        <el-input v-model="newPrice.price" auto-complete="off"></el-input>
                    </el-form-item>
                    
                </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addPrice">保存</el-button>
              </div>
            </el-dialog>
    </div>
</template>

<script>
    export default {
		data() {
            return {
                itemName: '',
                itemCategory: '',
                itemValue: '',
                itemCost: '',
                itemStock: '',
                options: [{
                    value: '0',
                    label: '移动电话卡'
                    }, {
                    value: '1',
                    label: '电信电话卡'
                }],
                tableData: [],
                dialogFormVisible: false,
                newPrice: {},
                levelOptions: [{
                    value: '0',
                    label: '一级代理商'
                    }, {
                    value: '1',
                    label: '二级代理商'
                }]
            }
        },
        methods: {
            toAddPrice(){
                this.newPrice.id = this.tableData.length + 1;
                this.newPrice.value = this.itemValue;
                this.dialogFormVisible = true;
            },
            addPrice(){
                this.dialogFormVisible = false;
                for(var i=0; i<this.levelOptions.length; i++) {
                    if(this.levelOptions[i].value == this.newPrice.level) {
                        this.newPrice.levelName = this.levelOptions[i].label;
                    }
                }
                this.tableData.push({
                    id: this.newPrice.id,
                    level: this.newPrice.level,
                    levelName: this.newPrice.levelName,
                    value: this.newPrice.value,
                    price: this.newPrice.price
                });
                this.newPrice = {}
            },
            handleDelete(index, row) {
                console.table(row)
                this.tableData.splice(index, 1);
            }
        }
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
</style>
