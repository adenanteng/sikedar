<script setup>
import moment from "moment/moment";
import {useForm} from "@inertiajs/vue3";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import InputError from "@/Components/InputError.vue";
import {ref} from "vue";

const props = defineProps({
    course_id: Number,
    comment: Object,
    child: Object,
    child_idx: Number,
    mother: {
        type: Boolean,
        default: false
    }
})

const form = useForm({
    id: null,
    comment: null,
    course_id: props.course_id,
    parent_id: props.child.id
});

const storeInformation = () => {
    // if (props.course.name == null) {
    form.post(route('courseComment.store'), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => {
            form.reset()
            show.value=false
        },
    });
    // } else {
    //     form.put(route('course.update', props.course), {
    //         errorBag: 'updateInformation',
    //         preserveScroll: true,
    //         onSuccess: () => showPage(),
    //     });
    // }
};

const likeComment = (item) => {
    form.post(route('courseComment.like', item), {
        // errorBag: 'updateInformation',
        preserveScroll: true,
        onSuccess: () => {

        },
    });
};

const dislikeComment = (item) => {
    form.post(route('courseComment.dislike', item), {
        // errorBag: 'updateInformation',
        preserveScroll: true,
        onSuccess: () => {

        },
    });
};

const show = ref(false)
function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}
</script>

<template>
    <div class="flex space-x-4 text-sm text-gray-500 ml-10 ">
        <div class="flex-none py-0">
            <img :src="props.child.user.profile_photo_url" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
        </div>
        <div :class="[props.child_idx === 0 ? '' : '', 'flex-1 pb-3']">
            <h3 class="font-medium text-sm text-gray-900">
                {{ props.child.user.name }}
                <template v-if="props.child.mother_name && props.mother">
                    <i class="fa-regular fa-angle-right" />
                    {{ props.child.mother_name }}
                </template>
            </h3>
            <div class="prose prose-sm max-w-none text-gray-500" v-html="props.child.content" />
            <p class="text-xs">
                <time :datetime="formattedDate(props.child.created_at)">
                    {{ formattedDate(props.child.created_at) }}
                </time>
            </p>
            <div class="flex justify-between items-start gap-5 mt-2" >
                <div class="" >
                    <button @click="show=!show" class="font-medium text-primary-600">Balas</button>
                    <div v-if="show" class="">
                        <TextAreaInput
                            id="comment"
                            v-model="form.comment"
                            class="mt-1 block w-full"
                            rows="2"
                            autofocus
                            required
                        />
                        <PrimaryButton
                            as="button"
                            @click="storeInformation"
                            class="mt-3"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                        >
                            Kirim
                        </PrimaryButton>
                        <InputError :message="form.errors.comment" class="mt-2" />
                    </div>
                </div>
                <div class="flex-none flex space-x-5 mr-5">
                    <div class="space-x-2">
                        <button type="button" @click="likeComment(props.child.id)">
                            <i class="text-lg fa-heart"
                               :class="props.child.has_upvoted ? 'fa-solid text-red-600' : 'fa-regular text-primary-600' " />
                        </button>
                        <span
                            v-if="props.child.likes != 0"
                            :class="props.child.has_upvoted ? 'text-red-600' : 'text-primary-600' "
                        >{{ props.child.likes }}</span>
                    </div>

                    <div class="space-x-2">
                        <button type="button" @click="dislikeComment(props.child.id)">
                            <i class="text-lg fa-thumbs-down"
                               :class="props.child.has_downvoted ? 'fa-solid text-primary-600' : 'fa-regular text-primary-600' " />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <template v-for="(child, childIdx ) in props.child.child">
        <CommentChildSection
            :course_id="props.course_id"
            :comment="props.comment"
            :child="child"
            :child_idx="childIdx"
            :mother="true"
        />
    </template>
</template>
