import { useFlag } from "@unleash/proxy-client-react";

const TestComponent = () => {
  const variant = useFlag("project-icon");
  console.log("variant", variant);
  if (variant.enabled && variant.name === "SomeComponent") {
    // return <SomeComponent />;
  } else if (variant.enabled && variant.name === "AnotherComponent") {
    // return <AnotherComponent />;
  }
  // return <DefaultComponent />;
};

export default TestComponent;
