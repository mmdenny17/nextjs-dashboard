import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Pin the workspace root explicitly. Next's auto-detection climbs the
  // directory tree for the nearest lockfile and was picking up an unrelated
  // package-lock.json at C:\Users\mdavis1\ (a different personal project),
  // which broke page collection during build.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
