<template>
    <div class="flex flex-col items-center justify-center space-y-16">
        <img src="@/assets/logo.png" alt="atletcio Calabritto" class="w-48 h-48">
        <router-link
            :to="{name:'InfoMatch'}"
            class="py-3 px-10 bg-blue-600 text-white font-bold rounded-full"
          >
            Inizia
          </router-link>
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
