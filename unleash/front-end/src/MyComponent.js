import { useUnleashContext, useFlag } from "@unleash/proxy-client-react";

export const MyComponent = ({ userId }) => {
  const variant = useFlag("my-toggle");
  const updateContext = useUnleashContext();

  useEffect(() => {
    // context is updated with userId
    updateContext({ userId });
  }, []);
};
