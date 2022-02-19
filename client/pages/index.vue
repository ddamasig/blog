<template>
  <div>
    <v-row
      class="pa-2 mt-1 justify-center"
      v-for="(blog,index) in blogs"
      :key="index"
    >
      <v-col
        cols="12"
        xs="10"
        sm="10"
        md="6"
      >
        <c-blog-post
          :blog="blog"
        ></c-blog-post>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="py-12 my-12"></v-col>
    </v-row>
    <!-- Comment Input -->
    <c-comment-input-bottom-sheet v-if="$store.getters['comments/showCommentInput']"></c-comment-input-bottom-sheet>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    blogs: [
      {
        title: 'Conor McGregor',
        subtitle: 'notoriousmma@example.com',
        content: 'Cras ac nunc leo. Aenean eleifend venenatis odio, vel egestas ipsum faucibus sed. Duis feugiat vel erat pretium cursus. Nulla suscipit convallis lectus, ut aliquam quam dignissim at.',
        photo: '/header-7.jpg',
        likes: '29.2k',
        comments: '10k',
        areCommentsDisabled: false,
      },
      // {
      //   title: 'Juan Dela Cruz',
      //   subtitle: 'jdelacruz@example.com',
      //   content: 'Cras ac nunc leo. Aenean eleifend venenatis odio, vel egestas ipsum faucibus sed. Duis feugiat vel erat pretium cursus. Nulla suscipit convallis lectus, ut aliquam quam dignissim at.',
      //   photo: '/header-1.jpg',
      //   likes: '2.5k',
      //   comments: '421',
      //   areCommentsDisabled: true,
      // },
      // {
      //   title: 'Khabib Nurmagomedov',
      //   subtitle: 'eaglemma@example.com',
      //   content: 'Cras ac nunc leo. Aenean eleifend venenatis odio, vel egestas ipsum faucibus sed. Duis feugiat vel erat pretium cursus. Nulla suscipit convallis lectus, ut aliquam quam dignissim at.',
      //   photo: null,
      //   likes: '7.8k',
      //   comments: '3k',
      //   areCommentsDisabled: true,
      // },
    ]
  }),
}
</script>
