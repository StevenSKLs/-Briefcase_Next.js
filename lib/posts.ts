import Certifics from '@/components/Certifics';
import Initial from '@/components/Initial';
import Person from '@/components/Person';
import Proyects from '@/components/SectionProyects';
import SectionSkills from '@/components/SectionSkills';
import { Post } from './typings';

const Postw = [
  {
    title: 'initial',
    path: Initial,
  },
  {
    title: 'person',
    path: Person,
  },
  {
    title: 'certifics',
    path: Certifics,
  },
  {
    title: 'proyects',
    path: Proyects,
  },
  {
    title: 'sectionSkills',
    path: SectionSkills,
  },
];

export const getProps = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Postw);
    }, 1000);
  });
};
