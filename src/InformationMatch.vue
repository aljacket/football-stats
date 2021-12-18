<template>
    <div class="flex flex-col items-center">
        <div class="w-full grid grid-cols-2 gap-2 mb-8">
            <div class="bg-green-400 text-white font-bold text-xl rounded-lg">HOME</div>
            <div class="bg-blue-600 text-white font-bold text-xl rounded-lg">AWAY</div>

            <div
                v-for="info in informations"
                :key="info.id"
                class="flex flex-col items-center border p-2"
            >
            <TableInfo :information="info"/>
            </div>
        </div>

        <router-link
            :to="{name:'Home'}"
            class="py-3 px-10 bg-blue-600 text-white font-bold rounded-full mb-4"
        >
            Chiudi
        </router-link>
    </div>
</template>

<script>
import SourceData from '@/data.json'
import TableInfo from '@/components/TableInfo.vue'

export default {
  name: 'InfoMatch',
  components: {
    TableInfo
  },
  data () {
    return {}
  },
  computed: {
    informations () {
      return SourceData.information
    }
  }
}
</script>
