import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{
  //   type: 'autogenerated', dirName: '.'
  // }],
  // But you can create a sidebar manually
  presSidebar: [
    'pres/intro',
    'pres/features',
    {
      type: 'category',
      label: 'Concepts',
      items: ['pres/concepts/gateway', 'pres/concepts/access-control', 'pres/concepts/locales', 'pres/concepts/users-infos'],
    },
    'pres/design'
  ],
  tutoSidebar: [
    'tuto/install',
    'tuto/route',
    'tuto/security',
    'tuto/route-predicate',
    'tuto/route-filter',
    'tuto/route-test',
  ],
  docuSidebar: [
    'doc/start',
    {
      type: 'category',
      label: 'Configuration',
      items: ['doc/conf/files', 'doc/conf/https'],
    },
    {
      type: 'category',
      label: 'Interface utilisateur',
      items: ['doc/ui/top-bar', 'doc/ui/access-control', 'doc/ui/application', 'doc/ui/gateway'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['doc/api/current-user'],
    },
  ],
};

export default sidebars;
