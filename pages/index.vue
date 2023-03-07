<template>
    <a>home</a>
    <v-card class="centered-card" elevation="10" max-width="374">
        <v-card-title>Card title</v-card-title>
        <v-card-subtitle>Subtitle text</v-card-subtitle>
        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum
            fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.
        </v-card-text>
        <v-card-actions>
            <v-btn> Action 1</v-btn>
            <v-btn> Action 2</v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
.centered-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 32px));
}
</style>

<script lang="ts">
export default {
    setup() {
        useServerSeoMeta({
            title: 'My Amazing Site',
            ogTitle: 'My Amazing Site',
            description: 'This is my amazing site, let me tell you all about it.',
            ogDescription: 'This is my amazing site, let me tell you all about it.',
            ogImage: 'https://example.com/image.png',
            twitterCard: 'summary_large_image',
        })
    }
}
</script>