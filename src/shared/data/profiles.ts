export interface Profile {
  id: number;
  name: string;
  image: string;
  description: string;
  bio?: string;
  email?: string;
  location?: string;
  joinedAt?: string;
  interests?: string[];
}

export const PROFILES_DATA: Profile[] = [
  {
    id: 1,
    name: 'Sed ut perspiciatis',
    image: '/assets/images/profile_a.png',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
    bio: 'Product designer with a passion for building beautiful user experiences.',
    email: 'sed@example.com',
    location: 'Berlin, Germany',
    joinedAt: '2022-03-15',
    interests: ['Design', 'Art', 'Photography'],
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor',
    image: '/assets/images/profile_b.png',
    description:
      'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.',
    bio: 'Front-end engineer crafting web experiences with React and TypeScript.',
    email: 'lorem@example.com',
    location: 'Seoul, South Korea',
    joinedAt: '2021-08-02',
    interests: ['Coding', 'Coffee', 'Hiking'],
  },
  {
    id: 3,
    name: 'Nemo enim ipsam',
    image: '/assets/images/profile_c.png',
    description:
      'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.',
    bio: 'Digital marketer focused on growth and data-driven strategies.',
    email: 'nemo@example.com',
    location: 'San Francisco, USA',
    joinedAt: '2023-01-10',
    interests: ['Marketing', 'Analytics', 'Travel'],
  },
];
