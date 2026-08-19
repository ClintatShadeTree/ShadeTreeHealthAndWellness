import Hero from '../components/Hero';
import Process from '../components/Process';
import AboutMe from '../components/AboutMe';
import Value from '../components/Value';
import TherapyVsCoaching from '../components/TherapyVsCoaching';

export default function Home({ data }: { data: any }) {
  return (
    <>
      <Hero data={data} />
      <Process data={data.process} />
      <AboutMe data={data.about} />
      <Value data={data.value} />
      <TherapyVsCoaching data={data.therapyVsCoaching} />
    </>
  );
}
