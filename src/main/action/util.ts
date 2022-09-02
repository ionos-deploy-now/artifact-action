export function getErrorMessage(error: any): string {
  if (error instanceof Error) {
    return (error as Error).message;
  }
  return error;
}
