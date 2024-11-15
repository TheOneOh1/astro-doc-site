import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [starlight({
    title: 'Docs Heaven',
    customCss: [
      './src/styles/custom.css'
    ],
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
          directory: 'CI-CD' // Ensure this matches your folder name
        }
    }, {
      label: 'Installation', // Add this section
      autogenerate: {
          directory: 'Installation' // Ensure this matches your folder name
        }
      }, {
        label: 'Notes', // Add this section
        autogenerate: {
            directory: 'Notes' // Ensure this matches your folder name
          }
        }, {
          label: 'Scripts', // Add this section
          autogenerate: {
              directory: 'Scripts' // Ensure this matches your folder name
            }
    }]
  })],
  outDir: './dist',
  output: 'static',
  site: 'https://theoneoh1.github.io',
  base: '/astro-doc-site'
});
