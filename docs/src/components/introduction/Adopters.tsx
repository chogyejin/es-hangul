import { useIsDarkMode } from '@/hooks/use-is-dark-mode';
import Image from 'next/image';
import { ComponentProps } from 'react';

/**
 * 이 곳에 적용한 조직을 추가해주세요.
 */
export const adopterLogoImagePropsList = [
  {
    src: '/adopters/비바리퍼블리카.png',
    darkSrc: '/adopters/비바리퍼블리카_darkmode.png',
    alt: '비바리퍼블리카',
    height: 80,
    width: 262.6,
  },
  {
    src: '/adopters/아임웹.png',
    darkSrc: '/adopters/아임웹_darkmode.png',
    alt: '아임웹',
    height: 80,
    width: 367,
  },
] as const satisfies Array<
  Pick<ComponentProps<typeof Image>, 'src' | 'alt'> &
    Required<Pick<ComponentProps<typeof Image>, 'width' | 'height'>> & {
      darkSrc: string;
    }
>;

export const Adopters = () => {
  const isDarkMode = useIsDarkMode();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
      {adopterLogoImagePropsList.map(props => (
        <Image key={props.src} {...props} src={isDarkMode ? props.darkSrc : props.src} />
      ))}
    </div>
  );
};
