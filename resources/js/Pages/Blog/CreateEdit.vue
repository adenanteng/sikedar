<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

import UpdateInformationForm from "./Partials/UpdateInformationForm.vue";
import DeleteForm from "./Partials/DeleteForm.vue";
import UpdateHeroForm from "./Partials/UpdateHeroForm.vue";
import UpdateContentForm from "./Partials/UpdateContentForm.vue";
import PreviousButton from "@/Components/PreviousButton.vue";

</script>

<template>
    <AppLayout title="Blog"
               name="Blog"
               desc="lorem ipsum"
    >

        <template #previous>
            <PreviousButton />
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10">
                <div >
                    <UpdateInformationForm :blog="$page.props.blog ?? '' " />

                    <SectionBorder />
                </div>

                <template v-if="$page.props.blog">
<!--                    <UpdateHeroForm :blog="$page.props.blog" />-->

<!--                    <SectionBorder />-->

                    <UpdateContentForm :blog="$page.props.blog" />

                    <SectionBorder />

                    <DeleteForm :blog="$page.props.blog" />
                </template>
            </div>
        </div>
    </AppLayout>
</template>
