<template>
    <div class="m-3">
        <!-- 导入组件 -->
        <el-upload class="upload-demo" action="" :auto-upload="false" :show-file-list="false" :on-change="handleImport"
            accept=".xlsx, .xls">
            <el-button type="primary">导入Excel</el-button>
        </el-upload>
    </div>

</template>