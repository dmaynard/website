const config = {
  siteTitle: 'David Maynard: Software Artist',
  siteTitleShort: 'Software Artist',
  siteTitleAlt: 'David S Maynard',
  siteLogo: '/logos/LegoDSM32.png',
  siteUrl: 'https://www.softwareartist.com',
  repo: 'https://github.com/dmaynard/website',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'David Maynard is a computer scientist recently retired from a fascinating career tracking the computer revolution in Silicon Valley',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-141491749-2',
  disqusShortname: 'dmaynard',
  postDefaultCategoryID: 'Tech',
  userName: 'David',
  userEmail: 'davidsmaynard@google.com',
  userTwitter: 'dsmaynard',
  userLocation: 'Menlo Park, CA',
  userAvatar: 'https://s.gravatar.com/avatar/f5cd3881ebc908584683006ba132d6b0',
  userDescription:
    'Engelbart\'s Group  => Xerox PARC => Electronic Arts => SGI => 3DO => Google => Box',
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
