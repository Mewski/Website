<template>
    <v-app v-if="!busy">
        <div>
            <div>
                <TheNavbar />
            </div>
            <v-main style="height: 100vh">
                <NuxtLayout>
                    <NuxtPage />
                </NuxtLayout>
            </v-main>
        </div>
    </v-app>
    <v-app v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            busy: true,
        }
    },
    mounted() {
        this.busy = false;
    },
    watch: {
        group() {
            this.busy = true
        },
    }
})
</script>

<style scoped>
.centered-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 32px));
}
</style>