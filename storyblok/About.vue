<template>
    <h2>{{ blok.headline }}</h2>
    <picture>
        <img :src="blok.image.filename" :alt="blok.image.alt" />
    </picture>
    <Richtext :text="blok.description" />
</template>

<script setup lang="ts">
    import Richtext from '~/components/Richtext.vue';

    defineProps({
        blok: Object as () => any
    })
</script>