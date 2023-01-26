const HomeComponent = {
  data() {
    return {
      activities: [
        {
          content: 'Graduated from FPT Jetking College',
          timestamp: '06/2019 - 10/2021'
        }, 
        {
          content: 'Working at ArtistsWorld',
          timestamp: '1/2022 - 12/2022'
        }
      ]
    }
  },
  template: `
    <section class="h-100 position-relative">
      <h1>
        I'm 
        <span style="color: #409EFF;">Nhat Nguyen</span>
        . I like learning Technologies and developing apps for helping everyone.
      </h1>

      <el-timeline class="position-absolute bottom-50">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </section>
  `
}
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles'
};

const routes = [
  { path: '/', component: HomeComponent, text: 'Home' },
  { path: '/about', component: Foo, text: 'About' },
  { path: '/contact', component: Bar, text: 'Contact me' },
  { path: '/words', component: Foo, text: 'Words' },
  { path: '/products', component: Bar, text: 'Products' }
]

const footerLinks = [
  { 
    url: 'https://www.facebook.com/profile.php?id=100085030080774', 
    class: 'fa-brands fa-square-facebook' 
  },
  { 
    url: 'https://github.com/isekaimaou1109', 
    class: 'fa-brands fa-square-github' 
  },
  { 
    url: 'https://www.linkedin.com/in/ukiyo-seven-a5b696228/', 
    class: 'fa-brands fa-linkedin' 
  },
  { 
    url: 'https://twitter.com/isekaimaou1109', 
    class: 'fa-brands fa-square-twitter' 
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

var app = new Vue({
  el: '#app',
  mounted() {
    window.addEventListener('resize', () => {
      this.currentWidth = window.innerWidth
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  data: {
    tableData: Array(20).fill(item),
    activeIndex: '1',
    data: routes,
    footerLinks,
    currentWidth: null,
    url: 'https://i.ibb.co/K6FvDbJ/title-icon.png'
  },
  router
})

