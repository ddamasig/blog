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
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    blogs: [
      {
        title: 'Juan Dela Cruz',
        subtitle: 'jdelacruz@example.com',
        content: 'Cras ac nunc leo. Aenean eleifend venenatis odio, vel egestas ipsum faucibus sed. Duis feugiat vel erat pretium cursus. Nulla suscipit convallis lectus, ut aliquam quam dignissim at.',
        photo: '/header-8.jpeg',
        likes: '2.5k',
        comments: '421',
      },
      {
        title: 'Conor McGregor',
        subtitle: 'notoriousmma@example.com',
        content: 'Cras ac nunc leo. Aenean eleifend venenatis odio, vel egestas ipsum faucibus sed. Duis feugiat vel erat pretium cursus. Nulla suscipit convallis lectus, ut aliquam quam dignissim at.',
        photo: '/header-2.jpg',
        likes: '29.2k',
        comments: '10k',
      },
      {
        title: 'Khabib Nurmagomedov',
        subtitle: 'eaglemma@example.com',
        content: 'Cras ac nunc leo. Aenean eleifend venenatis odio, vel egestas ipsum faucibus sed. Duis feugiat vel erat pretium cursus. Nulla suscipit convallis lectus, ut aliquam quam dignissim at.',
        photo: null,
        likes: '7.8k',
        comments: '3k',
      }
    ]
  }),
}
</script>
