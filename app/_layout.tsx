import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

// �🎯 EDUCATIVO: Crear UNA SOLA instancia del cliente
// Esto se ejecuta solo una vez cuando la app inicia
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos - datos se consideran "frescos"
      gcTime: 10 * 60 * 1000, // 10 minutos - cuánto tiempo mantener en cache
      retry: 3, // Reintentar 3 veces si falla
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

export default function Layout() {
  return (
    // 🌟 EDUCATIVO: El Provider "envuelve" todas las pantallas
    // Ahora TODAS las pantallas pueden usar useQuery y comparten el mismo cache
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        {/*<Stack.Screen name="(1-conversor)" options={{ headerShown: false }} />*/}
        {/*<Stack.Screen name="(2-listas)" options={{ headerShown: false }} />*/}
      </Stack>
    </QueryClientProvider>
  );
}
