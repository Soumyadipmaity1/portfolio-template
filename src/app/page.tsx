import BackgroundAnimation from '@/components/BackgroundAnimation';
import ParticlesNetwork from '@/components/ParticlesNetwork';
import Matrix3DEffect from '@/components/Matrix3DEffect';
import HomeHero from '@/components/HomeHero';

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <Matrix3DEffect />
      <ParticlesNetwork />
      <HomeHero />
    </>
  );
}
