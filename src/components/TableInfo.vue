<template>
    <div class="text-xl font-bold">{{ information.title }}</div>
    <div class="flex items-center justify-between w-full">
        <div @click="remove()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div>{{data}}</div>
        <div @click="count(i)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TableInfo',
  props: {
    information: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      data: 0
    }
  },
  methods: {
    count () {
      this.data = this.data + 1
    },
    remove () {
      if (this.data > 0) {
        this.data = this.data - 1
      }
    }
  }
}
</script>
