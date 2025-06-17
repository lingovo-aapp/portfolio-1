<template>
  <div id="app">
    <!-- Left Sidebar Navigation -->
    <nav class="sidebar">
      <div class="sidebar-content">
        <div class="artist-name">ALEXA MARTSCH</div>
        
        <div class="nav-section">
          <h3 class="section-title">Photography</h3>
          <ul class="nav-list">
            <li><a href="#urban-solitude" @click="showWork('urban-solitude')" :class="{ active: currentWork === 'urban-solitude' }">Urban Solitude</a></li>
            <li><a href="#disappearing-act" @click="showWork('disappearing-act')" :class="{ active: currentWork === 'disappearing-act' }">Disappearing Act</a></li>
            <li><a href="#midday-static" @click="showWork('midday-static')" :class="{ active: currentWork === 'midday-static' }">Midday Static</a></li>
            <li><a href="#dragonfly" @click="showWork('dragonfly')" :class="{ active: currentWork === 'dragonfly' }">Dragonfly</a></li>
            <li><a href="#lines" @click="showWork('lines')" :class="{ active: currentWork === 'lines' }">Lines</a></li>
          </ul>
        </div>

        <div class="nav-section">
          <h3 class="section-title">Digital Art</h3>
          <ul class="nav-list">
            <li><a href="#misaligned" @click="showWork('misaligned')" :class="{ active: currentWork === 'misaligned' }">Misaligned</a></li>
            <li><a href="#grin-grieve" @click="showWork('grin-grieve')" :class="{ active: currentWork === 'grin-grieve' }">Grin + Grieve</a></li>
            <li><a href="#catnip" @click="showWork('catnip')" :class="{ active: currentWork === 'catnip' }">Catnip</a></li>
          </ul>
        </div>

        <div class="nav-section">
          <h3 class="section-title">Logos</h3>
          <ul class="nav-list">
            <li><a href="#lingovo" @click="showWork('lingovo')" :class="{ active: currentWork === 'lingovo' }">Lingovo</a></li>
            <li><a href="#annoy" @click="showWork('annoy')" :class="{ active: currentWork === 'annoy' }">Annoy</a></li>
            <li><a href="#getscript" @click="showWork('getscript')" :class="{ active: currentWork === 'getscript' }">getScript</a></li>
          </ul>
        </div>

        <div class="nav-section">
          <h3 class="section-title">Music</h3>
          <ul class="nav-list">
            <li><a href="#theme-song" @click="showWork('theme-song')" :class="{ active: currentWork === 'theme-song' }">Theme Song</a></li>
          </ul>
        </div>

        <div class="nav-section">
          <h3 class="section-title">Apps</h3>
          <ul class="nav-list">
            <li><a href="#lingovo-app" @click="showWork('lingovo-app')" :class="{ active: currentWork === 'lingovo-app' }">Lingovo: Language Learning</a></li>
          </ul>
        </div>

        <div class="nav-section bottom-nav">
          <ul class="nav-list">
            <li><a href="#about" @click="showWork('about')" :class="{ active: currentWork === 'about' }">About</a></li>
            <li><a href="mailto:alexamartsch@gmail.com">Email</a></li>
            <li><a href="https://linkedin.com/in/amartsch" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main class="main-content">
      <!-- Work Display -->
      <div v-if="currentWorkData" class="work-display">
        <h1 class="work-title">{{ currentWorkData.title }}</h1>
        
        <div class="work-media" v-if="currentWorkData.type === 'image'">
          <img :src="currentWorkData.media" :alt="currentWorkData.title" class="work-image" />
        </div>

        <div class="work-media" v-else-if="currentWorkData.type === 'audio'">
          <audio controls class="work-audio">
            <source :src="currentWorkData.media" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>

        <div class="work-media" v-else-if="currentWorkData.type === 'app'">
          <a :href="currentWorkData.link" target="_blank" class="app-link">
            <img :src="currentWorkData.media" :alt="currentWorkData.title" class="work-image app-image" />
            <div class="app-overlay">
              <span class="app-link-text">View App</span>
            </div>
          </a>
        </div>

        <div class="work-info">
          <div class="work-year">{{ currentWorkData.year }}</div>
          <div class="work-medium">{{ currentWorkData.medium }}</div>
          <div class="work-description">{{ currentWorkData.description }}</div>
        </div>
      </div>

      <!-- About Page -->
      <div v-else-if="currentWork === 'about'" class="about-content">
        <h1 class="page-title">About</h1>
        <div class="about-text">
          <p>Alexandra Chen is a contemporary visual artist based in New York City, working primarily in interactive installations, digital media, and photography. Her work explores themes of identity, memory, and the ephemeral nature of human experience in digital spaces.</p>
          
          <p>With a background in fine arts and interactive media, Alexandra's practice bridges traditional and contemporary methodologies, creating immersive experiences that speak to the complexity of modern life and our relationship with technology.</p>
          
          <p>Her installations have been featured in galleries across New York, Los Angeles, and internationally, focusing on the intersection of physical and digital realms.</p>
        </div>
      </div>

      <!-- Default/Welcome State -->
      <div v-else class="welcome-content">
        <h1 class="welcome-title">Visual Artist & Interactive Designer</h1>
        <p class="welcome-subtitle">Exploring the intersection of physical and digital realms through contemporary interactive installations.</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface WorkItem {
  id: string
  title: string
  year: string
  medium: string
  type: 'image' | 'audio' | 'app'
  media: string
  link?: string
  description: string
}

const currentWork = ref<string>('')

const works = ref<Record<string, WorkItem>>({
  // Photography Section
  'urban-solitude': {
    id: 'urban-solitude',
    title: 'Urban Solitude',
    year: '2023',
    medium: 'Digital Photography',
    type: 'image',
    media: '/images/urban-solitude.jpg',
    description: 'An exploration of isolation in metropolitan environments. This series captures the paradox of being alone while surrounded by millions of people, finding moments of solitude within the urban landscape.'
  },
  'disappearing-act': {
    id: 'disappearing-act',
    title: 'Disappearing Act',
    year: '2023',
    medium: 'Digital Photography',
    type: 'image',
    media: '/images/disappearing-act.jpg',
    description: 'A photographic study of transient moments and ephemeral subjects that seem to vanish before our eyes, exploring themes of impermanence and the fleeting nature of existence.'
  },
  'midday-static': {
    id: 'midday-static',
    title: 'Midday Static',
    year: '2022',
    medium: 'Digital Photography',
    type: 'image',
    media: '/images/midday-static.jpg',
    description: 'Capturing the harsh, unforgiving light of midday and the static energy it creates in urban environments. A meditation on time, heat, and the suspended animation of peak daylight hours.'
  },
  'dragonfly': {
    id: 'dragonfly',
    title: 'Dragonfly',
    year: '2023',
    medium: 'Macro Photography',
    type: 'image',
    media: '/images/dragonfly.jpg',
    description: 'An intimate portrait of nature\'s precision and delicacy. This macro study reveals the intricate beauty and engineering marvel of one of nature\'s most agile creatures.'
  },
  'lines': {
    id: 'lines',
    title: 'Lines',
    year: '2022',
    medium: 'Architectural Photography',
    type: 'image',
    media: '/images/lines.jpg',
    description: 'A geometric exploration of architectural forms and the lines that define our built environment. This series examines how linear elements create rhythm, movement, and visual harmony in urban spaces.'
  },

  // Digital Art Section
  'misaligned': {
    id: 'misaligned',
    title: 'Misaligned',
    year: '2023',
    medium: 'Digital Art, Generative Design',
    type: 'image',
    media: '/images/misaligned.jpg',
    description: 'A digital exploration of imperfection and the beauty found in misalignment. This piece challenges our desire for perfect symmetry and celebrates the unexpected harmony in disorder.'
  },
  'grin-grieve': {
    id: 'grin-grieve',
    title: 'Grin + Grieve',
    year: '2023',
    medium: 'Digital Art, Mixed Media',
    type: 'image',
    media: '/images/grin-grieve.jpg',
    description: 'A duality study examining the complex relationship between joy and sorrow, exploring how these seemingly opposite emotions often coexist and inform each other in the human experience.'
  },
  'catnip': {
    id: 'catnip',
    title: 'Catnip',
    year: '2022',
    medium: 'Digital Illustration',
    type: 'image',
    media: '/images/catnip.jpg',
    description: 'A playful digital composition inspired by feline behavior and the euphoric effects of catnip. This piece explores themes of pleasure, instinct, and the simple joys found in nature.'
  },

  // Logos Section
  'lingovo': {
    id: 'lingovo',
    title: 'Lingovo',
    year: '2023',
    medium: 'Logo Design, Brand Identity',
    type: 'image',
    media: '/images/lingovo-logo.jpg',
    description: 'Brand identity design for a language learning platform. The logo combines linguistic elements with modern typography to create a memorable and approachable brand presence.'
  },
  'annoy': {
    id: 'annoy',
    title: 'Annoy',
    year: '2022',
    medium: 'Logo Design',
    type: 'image',
    media: '/images/annoy-logo.jpg',
    description: 'A provocative logo design that plays with negative space and typography to create an intentionally disruptive visual identity that challenges conventional design expectations.'
  },
  'getscript': {
    id: 'getscript',
    title: 'getScript',
    year: '2023',
    medium: 'Logo Design, Tech Branding',
    type: 'image',
    media: '/images/getscript-logo.jpg',
    description: 'Logo design for a developer tool platform. The design incorporates coding elements and clean typography to appeal to the technical community while maintaining accessibility.'
  },

  // Music Section
  'theme-song': {
    id: 'theme-song',
    title: 'Theme Song',
    year: '2023',
    medium: 'Original Composition, Electronic Music',
    type: 'audio',
    media: '/audio/theme-song.mp3',
    description: 'An original electronic composition that serves as a sonic exploration of digital landscapes. This piece combines ambient textures with rhythmic elements to create an immersive auditory experience.'
  },

  // Apps Section
  'lingovo-app': {
    id: 'lingovo-app',
    title: 'Lingovo: Language Learning',
    year: '2023',
    medium: 'Mobile App Design, UX/UI',
    type: 'app',
    media: '/images/lingovo-app.jpg',
    link: 'https://lingovo.app', // Replace with your actual app link
    description: 'A comprehensive language learning application designed to make language acquisition engaging and accessible. The app features interactive lessons, progress tracking, and gamified learning experiences.'
  }
})

const currentWorkData = ref<WorkItem | null>(null)

const showWork = (workId: string) => {
  currentWork.value = workId
  if (workId === 'about') {
    currentWorkData.value = null
  } else {
    currentWorkData.value = works.value[workId] || null
  }
}

onMounted(() => {
  // Set default work on load
  showWork('urban-solitude')
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  min-height: 100vh;
  background: #000;
  color: #fff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Sidebar Navigation */
.sidebar {
  width: 320px;
  background: #000;
  padding: 2rem;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid #333;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.artist-name {
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  margin-bottom: 3rem;
  color: #fff;
}

.nav-section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 400;
  color: #ccc;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.nav-list {
  list-style: none;
}

.nav-list li {
  margin-bottom: 0.5rem;
}

.nav-list a {
  color: #999;
  text-decoration: none;
  font-size: 0.95rem;
  line-height: 1.4;
  transition: color 0.3s ease;
  display: block;
  padding: 0.25rem 0;
}

.nav-list a:hover,
.nav-list a.active {
  color: #fff;
}

.nav-list a.active {
  color: #a589fc;
}

.bottom-nav {
  margin-top: auto;
}

/* Main Content */
.main-content {
  flex: 1;
  margin-left: 320px;
  padding: 2rem;
  background: #000;
}

/* Work Display */
.work-display {
  max-width: 1000px;
}

.work-title {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: #fff;
  letter-spacing: -0.02em;
}

.work-media {
  margin-bottom: 2rem;
}

.work-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  object-fit: cover;
}

.work-audio {
  width: 100%;
  max-width: 600px;
  height: 60px;
  background: #111;
  border-radius: 8px;
}

.work-audio::-webkit-media-controls-panel {
  background-color: #111;
}

.work-audio::-webkit-media-controls-play-button,
.work-audio::-webkit-media-controls-pause-button {
  background-color: #a589fc;
  border-radius: 50%;
}

/* App Link Styles */
.app-link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.app-link:hover {
  transform: scale(1.02);
}

.app-image {
  cursor: pointer;
}

.app-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(165, 137, 252, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.app-link:hover .app-overlay {
  opacity: 1;
}

.app-link-text {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.work-info {
  max-width: 600px;
}

.work-year {
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 0.5rem;
}

.work-medium {
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.work-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #ddd;
}

/* About Page */
.about-content {
  max-width: 700px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: #fff;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #ddd;
  margin-bottom: 1.5rem;
}

/* Welcome Content */
.welcome-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 60vh;
  max-width: 800px;
}

.welcome-title {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: #fff;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.welcome-subtitle {
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.6;
  max-width: 600px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .sidebar {
    width: 280px;
  }
  
  .main-content {
    margin-left: 280px;
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    position: relative;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #333;
  }
  
  .main-content {
    margin-left: 0;
  }
  
  .work-title,
  .page-title {
    font-size: 2rem;
  }
  
  .welcome-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .sidebar {
    padding: 1rem;
  }
  
  .main-content {
    padding: 1rem;
  }
  
  .artist-name {
    font-size: 1.2rem;
  }
  
  .work-title,
  .page-title {
    font-size: 1.8rem;
  }
  
  .welcome-title {
    font-size: 2rem;
  }
}

/* Custom Scrollbar */
.sidebar::-webkit-scrollbar {
  width: 4px;
}

.sidebar::-webkit-scrollbar-track {
  background: #111;
}

.sidebar::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 2px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
