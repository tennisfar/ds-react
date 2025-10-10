// src/hooks/useUrlParam.ts
import { useLocation } from '@tanstack/react-router';

export function useUrlParam(paramName: string): boolean {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.has(paramName);
}
