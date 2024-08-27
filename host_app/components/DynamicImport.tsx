import React, { useEffect, useState } from "react";
import { injectScript } from "@module-federation/nextjs-mf/utils";

export default function DynamicImport({
  url = "",
  name,
  path,
  componentProps,
}:any) {

  const [Component, setComponent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDynamicComponent();
    return () => {
      setComponent(null);
    };
  }, [url]);

  const loadDynamicComponent = async() =>  {
    const updateTs = new Date().getTime();
    if (url) {
      try {
        const remoteContainer = await injectScript({
          global: name,
          url: `${url}?ts=${updateTs}`,
        });
        const factory = await remoteContainer.get(path);
        const { default: Comp } = factory();
        setComponent(() => Comp);
      }
      catch (error) {
        console.error("Failed to load dynamic component:", error);
      }
      finally {
        setIsLoading(false);
      }
    }
  };

  if (isLoading) {
    return (
      <div>
        loading....
      </div>
    );
  }

  const _props = {
    ...componentProps,
  };

  return Component ? (
    <Component {..._props} />
  ) : (
    <div> Not found </div>
  );
}