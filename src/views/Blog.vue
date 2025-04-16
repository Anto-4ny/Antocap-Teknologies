<template>
    <v-container fluid class="py-16 mt-10 bg-grey-lighten-2" data-aos="fade-up">
      <v-row justify="center" class="text-center mb-10">
        <v-col cols="12" md="8">
          <h5 class="text-primary mb-2">Software Development Insights</h5>
          <h1 class="mb-4">Exploring the Latest in Software Development</h1>
          <p class="text-grey-darken-1">
            Stay updated with our latest posts on software development, technologies, and best practices. Discover insights, tips, and trends in the ever-evolving tech landscape.
          </p>
        </v-col>
      </v-row>
  
      <!-- Blog Posts -->
      <v-row class="mb-10" justify="center" align="center">
        <v-col v-for="(post, index) in blogPosts" :key="index" cols="12" md="4" data-aos="fade-up" :data-aos-delay="100 * (index % 2)">
          <v-card v-if="!post.isReadMoreVisible" class="elevation-12 blog-card text-center pa-4" style="background: white; color: black; height: 380px; display: flex; flex-direction: column;">
            <v-img :src="post.image" height="180px" class="mb-4" style="object-fit: cover; height: 180px; width: 100%;" />
            <div class="d-flex justify-space-between align-center mb-2">
              <h3 class="text-h6 font-weight-bold mb-2" style="flex: 1;">{{ post.title }}</h3>
              <v-icon color="grey-darken-1">mdi-clock-time-four</v-icon>
              <span class="text-grey-darken-1">{{ post.readTime }} min</span>
            </div>
            <p class="text-grey-darken-2" style="height: 70px; overflow: hidden;">{{ post.shortDescription }}</p>
            <v-btn @click="toggleReadMore(index)" class="mt-4" color="primary" text>Read More</v-btn>
          </v-card>
  
          <!-- Expanded Content -->
          <v-card v-if="post.isReadMoreVisible" class="elevation-12 blog-card text-center pa-4" style="background: white; color: black; height: auto;">
            <v-img :src="post.image" height="180px" class="mb-4" style="object-fit: cover; height: 180px; width: 100%;" />
            <div class="d-flex justify-space-between align-center mb-2">
              <h3 class="text-h6 font-weight-bold mb-2" style="flex: 1;">{{ post.title }}</h3>
              <v-icon color="grey-darken-1">mdi-clock-time-four</v-icon>
              <span class="text-grey-darken-1">{{ post.readTime }} min</span>
            </div>
            <p class="text-grey-darken-2">{{ post.fullDescription }}</p>
            <v-btn @click="toggleReadMore(index)" class="mt-4" color="secondary" text>Back to Blogs</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useHead } from '@vueuse/head'
  
  // Import images from assets folder
  import postImage1 from '@/assets/post1.jpeg'
  import postImage2 from '@/assets/post2.jpg'
  import postImage3 from '@/assets/post3.jpg'
  import postImage4 from '@/assets/post4.jpg'
  import postImage5 from '@/assets/post5.jpeg'
  
  // List of blog posts with title, description, read time, full description, and image
  const blogPosts = ref([
    {
      title: 'The Future of Software Development',
      shortDescription: 'An in-depth look at how AI, cloud computing, and other trends are shaping the future of software development.',
      fullDescription: 'In this blog post, we explore the potential impact of artificial intelligence (AI), cloud computing, and automation on software development. As technology advances, the way we approach coding and project management is changing drastically. We dive into these emerging technologies and their effect on the software industry. Stay ahead by understanding these trends and how they will affect software developers in the coming years. AI-powered development tools, cloud-based environments, and automated processes will continue to evolve, reshaping how teams collaborate and deliver software faster than ever before.',
      readTime: 5,
      image: postImage1, // Use imported image
      isReadMoreVisible: false,
    },
    {
      title: 'Best Practices in Agile Development',
      shortDescription: 'A comprehensive guide on Agile methodology, including its benefits, challenges, and how to implement it in your projects.',
      fullDescription: 'Agile software development has become the go-to methodology for modern teams. It offers flexibility and adaptability, making it easier to manage projects and respond to change. In this blog post, we cover the core principles of Agile, the benefits it brings to the development process, and some common pitfalls to avoid. We also share tips on how to implement Agile effectively in your own projects. Key Agile practices include continuous delivery, collaborative planning, and maintaining close communication between teams and clients. With Agile, you can ensure that you’re always aligned with your client’s goals and adapting to their needs as the project evolves.',
      readTime: 7,
      image: postImage2, // Use imported image
      isReadMoreVisible: false,
    },
    {
      title: 'Cloud-Native Architecture: Benefits and Challenges',
      shortDescription: 'Learn about cloud-native architecture, how it enhances scalability, and the challenges it presents for developers.',
      fullDescription: 'Cloud-native architecture is rapidly gaining traction due to its ability to improve scalability, reduce costs, and increase development speed. In this blog post, we delve into the concept of cloud-native development, its components, and how it benefits businesses in the long run. We also discuss some of the challenges developers face when adopting this architecture and how to mitigate them. For example, managing distributed systems and maintaining high availability can be complex. However, leveraging cloud-native tools such as Kubernetes and containerization can help solve these challenges and improve the overall development process.',
      readTime: 6,
      image: postImage3, // Use imported image
      isReadMoreVisible: false,
    },
    {
      title: 'Introduction to Machine Learning',
      shortDescription: 'A beginner-friendly guide to understanding the core concepts of machine learning, algorithms, and use cases.',
      fullDescription: 'Machine learning is transforming many industries by enabling machines to learn from data and make decisions without explicit programming. In this blog post, we introduce machine learning, explore its types (supervised, unsupervised, reinforcement learning), and discuss common algorithms and real-world applications. This post is designed to provide a solid foundation for beginners who want to dive into the world of machine learning. Examples of machine learning applications include spam email filters, recommendation systems, and self-driving cars. Understanding how machine learning algorithms work and how they can be implemented will give you a significant advantage in the rapidly growing field of data science.',
      readTime: 8,
      image: postImage4, // Use imported image
      isReadMoreVisible: false,
    },
    {
      title: 'Building Scalable Web Applications',
      shortDescription: 'Explore techniques and best practices for building web applications that scale effectively as your user base grows.',
      fullDescription: 'Building scalable web applications is crucial for any growing business. In this post, we cover the essential principles of scalability, including load balancing, caching strategies, and database optimization. We also discuss cloud-based solutions and containerization that can improve the scalability of your web application as it scales up. By understanding and applying these best practices, you can ensure that your application can handle an increasing number of users and maintain high performance. Scalable web applications enable businesses to respond quickly to market changes and customer demands, providing a better experience for users.',
      readTime: 7,
      image: postImage5, // Use imported image
      isReadMoreVisible: false,
    },
  ])
  
  // Function to toggle the "Read More" visibility
  function toggleReadMore(index) {
    // Hide all other posts
    blogPosts.value.forEach((post, i) => {
      if (i !== index) {
        post.isReadMoreVisible = false;
      }
    });
  
    // Toggle visibility for the clicked post
    blogPosts.value[index].isReadMoreVisible = !blogPosts.value[index].isReadMoreVisible;
  }


// Get dynamic URL safely
const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://antocapteknologies.com/blog'

useHead({
  title: 'Exploring the Latest in Software Development | Antocap Teknologies',
  meta: [
    {
      name: 'description',
      content: 'Stay updated with the latest posts on software development, technologies, and best practices. Discover insights, tips, and trends in the ever-evolving tech landscape.'
    },
    {
      name: 'keywords',
      content: 'software development, technology trends, agile development, cloud computing, machine learning, web development, software best practices, DevOps, mobile apps, backend frameworks, frontend development, web design, app design, seo services, html, vue developer, best software development company in kenya, nairobi and the world, bot creation, pin recovery'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'language', content: 'English' },
    { name: 'google-site-verification', content: '5hBLXfg-cAkfTMQDRDlg4h78fQ8fo6xtex41hVJFlz4' },

    // Open Graph
    { property: 'og:title', content: 'Exploring the Latest in Software Development | Antocap Teknologies' },
    { property: 'og:description', content: 'Stay updated with the latest posts on software development, technologies, and best practices. Discover insights, tips, and trends in the ever-evolving tech landscape.' },
    { property: 'og:image', content: 'https://antocapteknologies.com/Antocap-logo.jpg' },
    { property: 'og:url', content: currentUrl },
    { property: 'og:type', content: 'website' },

    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Exploring the Latest in Software Development | Antocap Teknologies' },
    { name: 'twitter:description', content: 'Stay updated with software development trends, agile tips, and cutting-edge tech insights.' },
    { name: 'twitter:image', content: 'https://antocapteknologies.com/Antocap-logo.jpg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Antocap Teknologies Blog',
        url: 'https://antocapteknologies.com/blog',
        description: 'A blog exploring the latest in software development, technology trends, and IT innovations.',
        publisher: {
          '@type': 'Organization',
          name: 'Antocap Teknologies',
          logo: {
            '@type': 'ImageObject',
            url: 'https://antocapteknologies.com/Antocap-logo.jpg'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl
        },
        author: {
          '@type': 'Person',
          name: 'Antony Ndambuki'
        },
        image: 'https://antocapteknologies.com/Antocap-logo.jpg'
      })
    }
  ]
})
</script>
 
  <style scoped>
  .blog-card {
    background: white !important;
    color: black;
    transition: transform 0.3s ease;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .blog-card:hover {
    transform: translateY(-10px);
  }
  
  .blog-card img {
    border-radius: 8px;
    object-fit: cover;
  }
  
  .v-btn {
    border-radius: 5px;
  }
  
  .v-btn:hover {
    background-color: #00b4d8;
  }
  
  .v-btn:focus {
    outline: none;
  }
  
  .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  