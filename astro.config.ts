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
    }]
  })],
  outDir: './dist',
  output: 'static',
  site: 'https://theoneoh1.github.io',
  base: '/astro-doc-site'
});
