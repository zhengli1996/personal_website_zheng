export const seo = {
  title: 'Zheng Li | FEA Engineer',
  description:
    'This is Zheng',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
