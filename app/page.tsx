import Presentation from "@/components/Presentation/Presentation";
import StepContainer from "@/components/Step/StepContainer";
import Welcome from "@/components/Welcome/Welcome";

const Home = () => {
  return (
    <section>
      <Welcome />
      <Presentation />
      <StepContainer />
    </section>
  );
}

export default Home;
