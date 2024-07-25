
let isInitialized = false;
export function initializeNoria() {
  isInitialized = true;
}

export function checkInitialization() {
  if (!isInitialized) {
    throw new Error("⚠️ You have to wrap your application with <NoriaProvider>!");
  }
}
