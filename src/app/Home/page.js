import Spline from '@splinetool/react-spline/next';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <main>
      <PageTransition>

        <Spline
          scene="https://prod.spline.design/ZhbH21qFrY3nHEqO/scene.splinecode"
        />
      </PageTransition>
    </main>
  );
}
