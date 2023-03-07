<template>
    <div v-if="user" class="mr-2">
        <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ props }">
                <v-btn min-height="44px" v-bind="props">
                    <v-avatar class="mr-2" color="primary" density="compact">
                        <v-img
                            src="https://cdn.discordapp.com/avatars/713865748199506036/75ef7b759692c3c0713494a87b16b542.png?size=1024">
                        </v-img>
                    </v-avatar>
                    mewski
                    <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
            </template>

            <v-card elevation="5" min-width="300">
                <v-list>
                    <v-list-item
                        prepend-avatar="https://cdn.discordapp.com/avatars/713865748199506036/75ef7b759692c3c0713494a87b16b542.png?size=1024">
                        <v-list-item-title>mewski</v-list-item-title>
                        <v-list-item-subtitle>lead developer</v-list-item-subtitle>
                    </v-list-item>
                    <v-divider class="mt-2"></v-divider>
                    <v-list-item class="mt-2" link>
                        <v-list-item-title>dashboard</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title>settings</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title>logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-menu>
    </div>
    <div v-else>
        <v-btn class="mr-3" color="primary" elevation="2" prepend-icon="mdi-account" to="/login" variant="outlined">login
        </v-btn>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const menu = ref(false);
        const user = useSupabaseUser();

        return {
            menu,
            user,
        };
    },
});
</script>
  
<style scoped></style>