<template>
  <div>
    <el-form :model="sourceInfo">
      <el-form-item label="serverType">
        <el-select v-model="sourceInfo.serverType">
          <el-option label="RTK" value="RTK"></el-option>
          <el-option label="RTD" value="RTD"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="format">
        <el-select v-model="sourceInfo.format">
          <el-option
            v-for="item in formatOptions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="solution">
        <el-select v-model="sourceInfo.solution">
          <el-option
            v-for="item in solutionOptions"
            :key="item.key"
            :label="item.label"
            :value="item.key"
          />
        </el-select>
      </el-form-item>
      <el-form-item prop="navSystem">
        <span slot="label">
          <span>导航系统</span>
          <i class="el-icon-plus" />
        </span>
        <el-table
          v-if="sourceInfo.navSystem"
          ref="multipleTable"
          :data="navTable"
          class="table"
          style="width: 100%"
        >
          <el-table-column
            prop="type"
            label=""
            sortable
            :sort-by="['GPS', 'BDS', 'GLO', 'GAL', 'QZSS']"
            min-width="100"
          />
          <el-table-column prop="point" label="频点" min-width="180" />
          <el-table-column
            prop="code"
            label="卫星编号"
            show-overflow-tooltip
            :min-width="'520'"
          />
        </el-table>
        <div v-else style="opacity: 0; width: 800px">---</div>
      </el-form-item>
    </el-form>
    <el-button @click="click">bbbb</el-button>
    <el-checkbox-group v-model="navList">
      <el-checkbox label="GPS" />
      <el-checkbox v-if="sourceInfo.format !== 'RTCM2.3'" label="BDS" />
      <el-checkbox v-if="sourceInfo.format !== 'RTCM2.3'" label="GLO" />
      <el-checkbox v-if="sourceInfo.format !== 'RTCM2.3'" label="GAL" />
      <el-checkbox
        v-if="
          sourceInfo.format !== 'RTCM2.3' && sourceInfo.format !== 'RTCM2.4'
        "
        label="QZSS"
      />
    </el-checkbox-group>
    <div class="container" @mousemove="handleMove">
      <p>{{ count }}</p>
    </div>
    <div class="container" @mousemove="handleMove2">
      <p>{{ count2 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [],
      navTable: [],
      sourceInfo: {
        mountpoint: "",
        identifier: "",
        serverType: "RTK",
        format: "RTCM3.3",
        navSystem: "",
        network: "",
        rtcmRate: 0,
        ephemerisRate: -1,
        msm: 1,
        solution: 0,
        satelliteUsedVoList: []
      },
      formatOptions: [
        "RTCM3.3",
        "RTCM3.2",
        "RTCM3.0",
        "RTCM2.3",
        "RTCM2.4",
        "CMR"
      ],
      rtcmRateOptions: [
        { key: 0, label: "接收GGA时播发" },
        { key: 1, label: "1 秒/次" },
        { key: 5, label: "5 秒/次" },
        { key: 10, label: "10 秒/次" }
      ],
      solutionOptions: [
        { key: 0, label: "单基站" },
        { key: 1, label: "多基站" }
      ],
      count: 0,
      handleMove: () => {},
      count2: 0,
      handleMove2: () => {},
    };
  },
  computed: {
    getServerType() {
      if (this.sourceInfo.serverType !== undefined) {
        return this.sourceInfo.serverType;
      }
    },
    getFormat() {
      if (this.sourceInfo.format !== undefined) {
        return this.sourceInfo.format;
      }
    }
  },
  watch: {
    language() {
      this.$nextTick(() => {
        this.$refs.sourceInfoForm && this.$refs.sourceInfoForm.clearValidate();
      });
    },
    getServerType(val, oldVal) {
      if (val === "RTD") {
        this.formatOptions = ["RTCM2.3", "RTCM2.4"];
        this.sourceInfo.solution = 0;
        this.solutionOptions = [{ key: 0, label: "单基站" }];
        this.sourceInfo.format = "RTCM2.3";
      } else {
        if (oldVal === "RTD") {
          this.formatOptions = [
            "RTCM3.3",
            "RTCM3.2",
            "RTCM3.0",
            "RTCM2.3",
            "RTCM2.4",
            "CMR"
          ];
          this.solutionOptions = [
            { key: 0, label: "单基站" },
            { key: 1, label: "多基站" }
          ];
        }
      }
    },
    getFormat(val, oldVal) {
      if (val === "RTCM2.3") {
        this.navList = this.navList.filter(item => {
          return item === "GPS";
        });
        this.sourceInfo.navSystem = this.navList.join(" ");
        this.navTable = this.navTable.filter(item => {
          return item.type == "GPS";
        });
        this.sourceInfo.navSystem = this.navTable
          .map(item => {
            return item.type;
          })
          .join(" ");
      } else if (val === "RTCM2.4") {
        this.navList = this.navList.filter(item => {
          return item !== "QZSS";
        });
        this.sourceInfo.navSystem = this.navList.join(" ");
        this.navTable = this.navTable.filter(item => {
          return item.type !== "QZSS";
        });
        this.sourceInfo.navSystem = this.navTable
          .map(item => {
            return item.type;
          })
          .join(" ");
      }
    }
  },
  methods: {
    click() {
      this.sourceInfo.navSystem = this.navList.join(",");

      // 减，表格中包含非已选项
      this.navTable.forEach((item, index, array) => {
        if (!this.navList.includes(item.type)) {
          array.splice(index, 1);
        }
      });
      // 增，已选项包含表格没有的导航系统
      if (this.navList.length > 0) {
        const types = this.navTable.map(item => {
          return item.type;
        });
        this.navList.forEach(item => {
          if (!types.includes(item)) {
            this.navTable.push({ type: item, point: "", code: "" });
          }
        });
      }
    },
    getCount() {
      this.count += 1;
    },
    getCount2() {
      this.count2 += 1;
    },
    debounce(func, wait = 1000) {
      let timer = null;
      return function() {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(func, wait);
      };
    },
    throttle(func, wait = 1000) {
      let timer = null;
      return function() {
        if (!timer) {
          timer = setTimeout(function() {
            timer = null;
            func();
          }, wait);
        }
      };
    }
  },
  mounted() {
    this.handleMove = this.debounce(this.getCount, 1000);
    this.handleMove2 = this.throttle(this.getCount2, 1000);
  }
};
</script>
<style lang="scss">
.container {
  width: 500px;
  height: 100px;
  background-color: rgb(119, 118, 118);
}
</style>
