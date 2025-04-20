export interface Profile {
  id: number;
  name: string;
  image: string;
  link: string;
  description: string;
}

export const PROFILES_DATA: Profile[] = [
  {
    id: 1,
    name: 'Sed ut perspiciatis',
    image: '/assets/images/profile_a.png',
    link: '#',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor',
    image: '/assets/images/profile_b.png',
    link: '#',
    description:
      'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.',
  },
  {
    id: 3,
    name: 'Nemo enim ipsam',
    image: '/assets/images/profile_c.png',
    link: '#',
    description:
      'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.',
  },
];
