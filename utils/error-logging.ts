export function logError(message: string, error: Error) {
  console.error(`[Error] ${message}:`, error);
  
  // In production, you might want to send this to an error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to error tracking service
    // errorTrackingService.captureException(error, { extra: { message } });
  }
}