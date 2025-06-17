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
          <p>I’m a hobbyist passionate about photography, digital art, and editing. My journey into digital creation started in 2021, when I began using generative AI tools like ArtBreeder to create abstract designs. Since then, I’ve been exploring the intersection of technology and creativity, using AI to craft my own unique art pieces.</p>

          <p>While I don't consider myself a professional artist, my work allows me to express the fascination I have with digital art, constantly pushing the boundaries of what’s possible with generative AI. I enjoy experimenting with different techniques and mediums, always learning and evolving in the process.</p>

          <p>Photography has always been a part of my creative journey, and it continues to shape my visual storytelling. My work is a blend of photography and digital manipulation, creating immersive and thought-provoking pieces that reflect my personal exploration of the digital world.</p>
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
    year: '2020',
    medium: 'Digital Photography (iPhone)',
    type: 'image',
    media: '/images/urban-solitude.jpg',
    description: 'Captured during a mandatory two-week self-isolation in Hong Kong, this image reflects the tension between solitude and urban life. From my apartment balcony, I documented the paradox of being confined to a small space amidst a sprawling city. The towering buildings and bustling streets serve as a constant reminder of the world beyond, while the quiet, stillness of the moment speaks to a deeper sense of personal isolation during the pandemic. This photograph explores the fragility of individual space within the relentless flow of metropolitan life.'
  },
  'disappearing-act': {
    id: 'disappearing-act',
    title: 'Disappearing Act',
    year: '2020',
    medium: 'Digital Photography (iPhone)',
    type: 'image',
    media: '/images/disappearing-act.jpg',
    description: 'Captured during the COVID-19 pandemic, this image of Taipei 101 reflects a moment of eerie stillness as the towering skyscraper fades into the clouds. The fog enveloping the top of the building mirrors the uncertainty of the times, creating a sense of something disappearing — both physically and symbolically. The image serves as a metaphor for the surreal experience of the pandemic, where familiar structures and routines began to feel distant and elusive, just as the top of the 101 vanishes into the mist.'
  },
  'midday-static': {
    id: 'midday-static',
    title: 'Midday Static',
    year: '2022',
    medium: 'Digital Photography (iPhone)',
    type: 'image',
    media: '/images/midday-static.jpg',
    description: 'This image captures the Central Plaza Tower, a final snapshot of Hong Kong before I left. The towering structure, bathed in the stark light of midday, represents both the modernity of the city and the overwhelming presence of its architecture. The sharp lines and reflections of the glass facades mirror the tension I felt during my last days — a quiet moment amidst the rush. The photo encapsulates a sense of stillness in a city that never truly stops, reflecting my own sense of departure and the static feeling that lingered as I prepared to leave.'
  },
  'dragonfly': {
    id: 'dragonfly',
    title: 'Dragonfly',
    year: '2022',
    medium: 'Digital Photography (iPhone)',
    type: 'image',
    media: '/images/dragonfly.jpg',
    description: 'A captivating close-up of illuminated glass lanterns, this photograph explores the delicate beauty of intricate designs and the interplay of light and shadow. The lamps, adorned with dragonfly motifs, glow with a soft, ethereal light, creating a surreal atmosphere. The layered composition adds depth, making it feel as though the viewer is surrounded by floating orbs of light. This image evokes a sense of calm and wonder, where natural and artificial elements converge in a harmonious dance of illumination.'
  },
  'lines': {
    id: 'lines',
    title: 'Lines',
    year: '2022',
    medium: 'Digital Photography (iPhone)',
    type: 'image',
    media: '/images/lines.jpg',
    description: 'An abstract exploration of architectural lines and forms, this image focuses on the interplay of light, shadow, and geometry. The stark contrast between the sharp, clean lines of the building and the soft, glowing light seeping through creates a sense of tension. The minimalist composition directs attention to the structural elements, almost transforming the space into a surreal, otherworldly landscape. This photograph evokes feelings of openness, precision, and the subtle beauty of design found in everyday urban environments.'
  }

  // Digital Art Section
  'misaligned': {
    id: 'misaligned',
    title: 'Misaligned',
    year: '2023',
    medium: 'Digital Art, Generative Design',
    type: 'image',
    media: '/images/misaligned.jpg',
    description: 'A bold, graphic portrait that plays with abstraction and distortion. The sharp contrasts and exaggerated features create an unsettling, almost surreal quality, while the red lips and smoke introduce an element of intrigue. The piece challenges perceptions of beauty and identity, evoking a sense of tension and mystery.'
  },
  'grin-grieve': {
    id: 'grin-grieve',
    title: 'Grin + Grieve',
    year: '2025',
    medium: 'Digital Art, Generative Design',
    type: 'image',
    media: '/images/grin-grieve.jpg',
    description: 'Drawing inspiration from the iconic duality of traditional theater masks, this artwork features two contrasting skulls. One exudes a wide, cheerful grin, while the other wears a somber, melancholic expression. The bold lines and stark simplicity emphasize the tension between opposing emotions — a visual commentary on the complexities of human experience, where joy and sorrow coexist.'
  },
  'catnip': {
    id: 'catnip',
    title: 'Catnip',
    year: '2025',
    medium: 'Digital Art, Generative Design',
    type: 'image',
    media: '/images/catnip.jpg',
    description: 'A playful and edgy reinterpretation of the 'bad boy' trope, featuring a group of cats in streetwear. Each cat exudes attitude, from the cigarette to the middle finger, all while rocking bold ANNOY branding. This satirical piece combines humor and rebellion, offering a cheeky commentary on pop culture's obsession with coolness and defiance, but with a lighthearted feline twist.'
  }

  // Logos Section
  'lingovo': {
    id: 'lingovo',
    title: 'Lingovo',
    year: '2024',
    medium: 'Digital Design (Figma)',
    type: 'image',
    media: '/images/lingovo-logo.jpg',
    description: 'A minimalist logo for a language learning app, combining the visual elements of different writing systems. The red character, representing a Chinese script, contrasts with the black English A, symbolizing the app's focus on bridging diverse languages. The clean, modern design reflects the app's approachability and clarity.'
  },
  'annoy': {
    id: 'annoy',
    title: 'Annoy',
    year: '2025',
    medium: 'Generative Design',
    type: 'image',
    media: '/images/annoy-logo.jpg',
    description: 'A modern, bold logo inspired by the Hollywood sign for a new fashion brand. The design captures the essence of confidence and attitude, using clean lines and striking text to make a statement.'
  },
  'getscript': {
    id: 'getscript',
    title: 'getScript',
    year: '2023',
    medium: 'Logo Design, Tech Branding',
    type: 'image',
    media: '/images/getscript-logo.jpg',
    description: 'Logo design for a developer tool platform. The design incorporates coding elements and clean typography to appeal to the technical community while maintaining accessibility.'
  }

  // Music Section
  'theme-song': {
    id: 'theme-song',
    title: 'Theme Song',
    year: '2025',
    medium: 'Original Composition, UK Hip Hop/Rap, Afrobeats, Generative AI',
    type: 'audio',
    media: '/audio/theme-song.mp3',
    description: 'Created using Suno AI, "Theme Song" blends UK Hip Hop/Rap and Afrobeats to deliver a high-energy anthem for Lingovo. \nLYRICS: \nYOU THINK YOU SUCK AT ENGLISH? MEET THE WORLD\'S WORST SPEAKER! \nTHIS GUY TRIED TO ASK FOR DIRECTIONS AND ENDED UP DECLARING WAR ON THREE COUNTRIES! \nHE DOWNLOADS LINGOVO AND BAM! 30 DAYS LATER... \nHE\'S DEBATING PHILOSOPHY WITH OXFORD PROFESSORS! \nHIS DOG STARTS TAKING NOTES DURING HIS PHONE CALLS! \nTHE U.N. BEGS HIM TO MEDIATE WORLD PEACE TALKS! \nHE READS THE PHONE BOOK ALOUD AND IT BECOMES A BESTSELLER! \nSHAKESPEARE\'S GHOST SHOWS UP TO ASK FOR WRITING TIPS! \nLINGOVO, WE DON\'T JUST TEACH ENGLISH, WE CREATE VERBAL SUPERVILLAINS! \nWARNING, MAY CAUSE EXTREME ELOQUENCE AND SPONTANEOUS POETRY OUTBURSTS! \nDOWNLOAD NOW OR STAY A LINGUISTIC CAVEMAN! \nLINGOVO, TURNING MUMBLING MEATBAGS INTO WORD WIZARDS SINCE YESTERDAY!'
  }

  // Apps Section
  'lingovo-app': {
    id: 'lingovo-app',
    title: 'Lingovo: Language Learning',
    year: '2025',
    medium: 'Mobile App Design, UX/UI',
    type: 'app',
    media: '/images/lingovo-app.jpg',
    link: 'https://lingovo.app',
    description: 'Introducing Lingovo – A language learning app created entirely by me, from the ground up. As the solo founder, I designed every aspect of the UI/UX, driven by the belief that language learning should be natural, interactive, and tailored to the learner. Inspired by the "By the Nature" method — a technique that gradually introduces vocabulary through graded readers — Lingovo brings that concept to life with on-demand translations, interactive text, and an instant dictionary. It’s a personalized, immersive experience designed to empower learners at their own pace.'
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
