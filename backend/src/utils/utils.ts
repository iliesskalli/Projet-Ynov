export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  
  export function generateRandomId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
  