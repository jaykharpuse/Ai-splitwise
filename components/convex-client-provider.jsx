"use client";

import { useMemo } from "react";
import { ConvexReactClient } from "convex/react";
import { useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

export function ConvexClientProvider({ children }) {
  if (!convexUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-xl space-y-2">
          <h1 className="text-2xl font-semibold">Convex not configured</h1>
          <p className="text-sm text-muted-foreground">
            Set NEXT_PUBLIC_CONVEX_URL in your environment to continue.
          </p>
        </div>
      </div>
    );
  }

  const convex = useMemo(() => new ConvexReactClient(convexUrl), []);

  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
