const router = [
  {
    name: 'Home',
    path: '/',
    navigation: false,
    mobile: true
  },
  {
    name: 'About',
    path: '/about',
    navigation: true
  },
  {
    name: 'Services',
    path: '/services',
    navigation: true,
    children: [
      {
        name: 'Commercial Window Cleaning',
        path: '#commercial-window-cleaning'
      },
      {
        name: 'Commercial Exterior Window Cleaning',
        path: '#commercial-exterior-window-cleaning'
      },
      {
        name: 'Commercial Exterior Soft Washing',
        path: '#commercial-exterior-soft-washing'
      },
      {
        name: 'Commercial Dryer Vent Cleaning',
        path: '#commercial-dryer-vent-cleaning'
      },
      {
        name: 'Commercial Bathroom Exhaust Cleaning',
        path: '#commercial-bathroom-exhaust-cleaning'
      },
      {
        name: 'Commercial Gutter Cleaning',
        path: '#commercial-gutter-cleaning'
      },
      {
        name: 'Commercial HVAC Cleaning',
        path: '#commercial-hvac-cleaning'
      },
      {
        name: 'Commercial Air Quality Testing',
        path: '#commercial-air-quality-testing'
      },
      {
        name: 'Commercial Caulking Services',
        path: '#commercial-caulking-services'
      },
      {
        name: 'Commercial Sealing Services',
        path: '#commercial-sealing-services'
      }
    ]
  },
  {
    name: 'Blog',
    path: '/blog',
    navigation: true
  },
  {
    name: 'Contact',
    path: '/contact',
    navigation: true
  },
  {
    name: 'FAQ',
    path: '/faq',
    navigation: true
  }
]

export default router
