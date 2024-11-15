import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [starlight({
    title: 'Docs Heaven',
    components: {
      Search: './src/components/starlight/Search.astro'
    },
    // social: {
    //   github: 'https://github.com/TheOtterlord/starlight-auth'
    // },
    sidebar: [{
      label: 'Guides',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }, {
      label: 'CI-CD', // Add this section
      autogenerate: {
          directory: 'ci-cd' // Ensure this matches your folder name
        }
    }]
  })],
  outDir: './dist',
  output: 'static',
  site: 'https://theoneoh1.github.io',
  base: '/astro-doc-site'
});
