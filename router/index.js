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
        name: 'Window Cleaning',
        path: '#commercial-window-cleaning'
      },
      {
        name: 'Exterior Window Cleaning',
        path: '#commercial-exterior-window-cleaning'
      },
      {
        name: 'Office Exterior Cleaning',
        path: '#commercial-office-exterior-cleaning'
      },
      {
        name: 'Professional Exterior Cleaning',
        path: '#professional-commercial-exterior-cleaning'
      },
      {
        name: 'Exterior Soft Washing',
        path: '#commercial-exterior-soft-washing'
      },
      {
        name: 'Dryer Vent Cleaning',
        path: '#commercial-dryer-vent-cleaning'
      },
      {
        name: 'Bathroom Exhaust Cleaning',
        path: '#commercial-bathroom-exhaust-cleaning'
      },
      {
        name: 'Bathroom Exhaust Repair',
        path: '#commercial-bathroom-exhaust-repair'
      },
      {
        name: 'Gutter Cleaning',
        path: '#commercial-gutter-cleaning'
      },
      {
        name: 'HVAC Cleaning',
        path: '#commercial-hvac-cleaning'
      },
      {
        name: 'Air Quality Testing',
        path: '#commercial-air-quality-testing'
      },
      {
        name: 'Caulking Services',
        path: '#commercial-caulking-services'
      },
      {
        name: 'Sealing Services',
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
