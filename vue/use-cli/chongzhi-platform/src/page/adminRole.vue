<template>
    <div class="fillcontain">
        <el-row  type="flex" justify="center"  style="margin: 20px; padding: 20px; background-color:#EFF2F7">
            <el-col :span="3">
                <p style="margin:5px;text-align:right">角色名称：</p>
            </el-col>

            <el-col :span="3">
                <el-input
                    placeholder="请输入"
                    v-model="roleName"
                    clearable>
                </el-input>
            </el-col>

            <el-col :span="3">
                <p style="margin:5px;text-align:right">角色状态：</p>
            </el-col>
            <el-col :span="6">
                <el-select v-model="roleStatus" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>

            <el-col :span="6">
                <el-button type="primary">搜索<i class="el-icon-search el-icon--right"></i></el-button>
                <el-button type="primary">清空<i class="el-icon-delete el-icon--right"></i></el-button>
            </el-col>
        </el-row>

        <el-row  type="flex" justify="space-between"  style="margin: 20px;">
            <el-col :span="3">
                <p style="margin:5px;text-align:left">角色列表</p>
            </el-col>

            <el-col :span="3">
                <el-button type="primary">新增<i class="el-icon-edit el-icon--right"></i></el-button>
            </el-col>
        </el-row>

        <!-- 表格展示 -->
        <div class="table_container">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  label="序号"
                  prop="id">
                </el-table-column>
                <el-table-column
                  label="角色名称"
                  prop="roleName">
                </el-table-column>
                <el-table-column
                  label="角色状态"
                  prop="status">
                </el-table-column>
                <el-table-column
                  label="添加时间"
                  prop="addTime">
                </el-table-column>
                <el-table-column label="操作" width="250">
                  <template scope="scope">
                    <el-button
                      size="mini"
                      >查看</el-button>
                    <el-button
                      size="mini"
                      type="Success"
                      >修改</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      >删除</el-button>
                  </template>
                </el-table-column>
            </el-table>

            <!-- 分页控制 -->
            <div class="Pagination">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30]"
                    :page-size="limit"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    //表格数据
    var tableData1 = new Array();
    tableData1.push({
        id: 1,
    roleName: '系统管理员',
    status: '有效',
    addTime: '2017-05-15 18:00:00'
    });
    tableData1.push({
        id: 2,
    roleName: '商品管理员',
    status: '有效',
    addTime: '2017-05-15 18:00:00'
    });
    tableData1.push({
        id: 3,
    roleName: '客服管理员',
    status: '有效',
    addTime: '2017-05-15 18:00:00'
    });
  export default {
    data() {
      return {
        roleName: '',
        options: [{
          value: '0',
          label: '有效'
        }, {
          value: '1',
          label: '无效'
        }],
        roleStatus: '',
        tableData: tableData1.slice(0, 20),
        offset: 0,
        limit: 20,
        count: tableData1.length,
        currentPage: 1
      }
    },
    methods: {
        handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.limit = val;
                this.offset = 0;
                this.currentPage = 1;
                this.tableData = tableData1.slice(this.offset, this.offset + this.limit)
            },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.offset = (val - 1)*this.limit;
            // TODO 获取新分页数据
            this.tableData = tableData1.slice(this.offset, this.offset + this.limit)
        }
    }
  }
</script>

<style lang="less" scoped>
	@import '../style/mixin';
</style>
