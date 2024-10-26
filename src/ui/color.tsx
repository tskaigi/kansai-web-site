import Container from "./container";

export default function Color() {
  return (
    <>
      <Container>
        <div className="text-4xl text-primary">primary</div>
        <div className="bg-primary text-4xl text-primary-content">
          primary-content
        </div>
        <div className="text-4xl text-secondary bg-secondary">secondary</div>
        <div className="text-4xl text-accent bg-accent">accent</div>
        <div className="text-4xl text-neutral bg-neutral">neutral</div>
        <div className="md:col-span-1 text-4xl text-base-100">base-100</div>
        <div className="md:col-span-6 text-4xl text-base-200">base-200</div>
        <div className="md:col-span-9 text-4xl text-base-300">base-300</div>
        <div className="text-4xl text-base-content">base-content</div>
        <div className="text-4xl text-info">info</div>
        <div className="text-4xl text-success">success</div>
        <div className="text-4xl text-warning">warning</div>
        <div className="text-4xl text-error">error</div>
      </Container>
    </>
  );
}
