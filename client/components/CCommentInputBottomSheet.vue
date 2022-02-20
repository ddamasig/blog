<template>
  <!-- Comment Input-->
  <v-bottom-sheet
    inset
    v-model="show"
    hide-overlay
    class="ma-0 pa-0"
    persistent
  >
    <c-comment-input class="d-block d-sm-none" :bottom-sheet="true"></c-comment-input>
  </v-bottom-sheet>
</template>

<script>
export default {
  data: () => ({
    show: true,
  })
}
</script>
