<template>
    <div class="richtext" :class="[styleClass]">
        <Vue3RuntimeTemplate :template="resolvedRichtext"></Vue3RuntimeTemplate>
    </div>
</template>

<script setup lang="ts">
    import type { ISbRichtext } from 'storyblok-js-client';
    import type { IRichtext } from '~/interfaces/IRichtext';
    import Vue3RuntimeTemplate from 'vue3-runtime-template';

    const props = defineProps({
        text: { type: Object as () => ISbRichtext | IRichtext, required: true },
        styleClass: { type: String, required: false, default: '' },
    })

    const resolvedRichtext = computed(() => renderRichText(props.text));
</script>