module.exports = {
    title: '李元芳芳',
    des
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about/' },
        { text: 'External', link: 'https://google.com' },
        {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'Chinese', link: '/' },
                  { text: 'Japanese', link: '/about/'}
                ]
        }
        ],
        sidebar: 'auto'
    },
  }