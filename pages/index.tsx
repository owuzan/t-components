import Page from "@/components/Page";
import Button from "@/components/Button";

const Home = () => {
  return (
    <Page>
      <Page.Title level={3}>T Component</Page.Title>
      <Page.Content>
        <Button>About</Button>
      </Page.Content>
    </Page>
  );
};

export default Home;
