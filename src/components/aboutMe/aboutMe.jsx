function AboutMe() {
  return (
    <div>
      <div className="flex  items-center gap-4 text-3xl text-primary font-bold">
        <div className="h-0.5 bg-primary w-8"> </div>
        <span className="text-primary">About me</span>{" "}
        <div className="h-0.5 bg-primary flex-auto"> </div>
      </div>

      <div className="text-white text-lg mx-8 p-4 ">
        I'm a passionate and dedicated software developer with over{" "}
        <span className="text-black bg-white" style={{ padding: "0 4px" }}>
          3 years
        </span>{" "}
        of professional experience. My expertise spans across a variety of
        modern technologies including{" "}
        <span className="text-black bg-white" style={{ padding: "0 4px" }}>
          {" "}
          Angular, React, Node.js, and Java
        </span>
        . I am committed to continuous learning and staying updated with the
        latest industry trends. My strong problem-solving skills and
        collaborative mindset enable me to deliver high-quality solutions that
        meet both user and business needs.
      </div>
    </div>
  );
}

export default AboutMe;
