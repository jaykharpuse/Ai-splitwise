"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";
import { useStoreUser } from "@/hooks/use-store-user";
import { Button } from "@/components/ui/button";

const MainLayout = ({ children }) => {
  const { isLoading, isAuthenticated, error } = useStoreUser();

  return (
    <>
      <SignedOut>
        <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
          <div className="max-w-xl space-y-3">
            <h1 className="text-2xl font-semibold">Sign in to continue</h1>
            <p className="text-sm text-muted-foreground">
              Your account is required to access the dashboard and groups.
            </p>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <Authenticated>
          {isLoading ? (
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="text-sm text-muted-foreground">
                Syncing your account...
              </div>
            </div>
          ) : error || !isAuthenticated ? (
            <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
              <div className="max-w-xl space-y-3">
                <h1 className="text-2xl font-semibold">Authentication issue</h1>
                <p className="text-sm text-muted-foreground">
                  We could not sync your account with the backend. Check your
                  Convex and Clerk configuration, then try again.
                </p>
              </div>
            </div>
          ) : (
            <div className="container mx-auto mt-24 mb-20 px-4">{children}</div>
          )}
        </Authenticated>

        <Unauthenticated>
          <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
            <div className="max-w-xl space-y-3">
              <h1 className="text-2xl font-semibold">Backend auth not ready</h1>
              <p className="text-sm text-muted-foreground">
                Convex could not verify your session. Ensure Clerk JWT and
                Convex auth are configured correctly.
              </p>
            </div>
          </div>
        </Unauthenticated>
      </SignedIn>
    </>
  );
};

export default MainLayout;
