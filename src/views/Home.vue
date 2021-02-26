<template>
  <div>
    <yh-panel></yh-panel>
    <div class="layui-container ">
      <div class="layui-row layui-col-space10">
        <yh-list></yh-list>
        <div
          class="yh-list-sidbar layui-col-md4 layui-hide-sm layui-hide-xs layui-show-md-inline-block"
        >
          <yh-tips></yh-tips>
          <yh-sign></yh-sign>
          <yh-weekly></yh-weekly>
          <yh-ads></yh-ads>
          <yh-hots></yh-hots>
          <yh-links></yh-links>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import List from '@/components/contents/List'
import Tips from '@/components/sidbars/Tips'
import Sign from '@/components/sidbars/Sign'
import Weekly from '@/components/sidbars/Weekly'
import Ads from '@/components/sidbars/Ads'
import Links from '@/components/sidbars/Links'
export default {
  name: 'home',
  props: {},
  components: {
    'yh-panel': Panel,
    'yh-list': List,
    'yh-tips': Tips,
    'yh-sign': Sign,
    'yh-weekly': Weekly,
    'yh-ads': Ads,
    'yh-links': Links
  },
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>
