import Presentation from "@/components/Presentation/Presentation";
import StepContainer from "@/components/Step/StepContainer";
import VideoContainer from "@/components/Video/VideoContainer";
import Welcome from "@/components/Welcome/Welcome";

const Home = () => {
  return (
    <section>
      <Welcome />
      <Presentation />
      <StepContainer />
      <VideoContainer />
    </section>
  );
}

export default Home;
