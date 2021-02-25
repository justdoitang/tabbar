<template>
  <div class="nav-bar">
    <div class="left"><slot name="left">1</slot></div>
    <div class="center"><slot name="center">2</slot></div>
    <div class="right"><slot name="right">3</slot></div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  }

  .left,.right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>
