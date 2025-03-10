// Importações necessárias do Angular
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// Importação do arquivo de rotas
import { routes } from './app.routes';

// Definição da configuração principal da aplicação
export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * 🔹 Otimiza a detecção de mudanças do Angular.
     * - `eventCoalescing: true` agrupa múltiplos eventos antes de processá-los.
     * - Isso reduz o número de verificações do Angular, melhorando a performance.
     */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /**
     * 🔹 Define o roteamento da aplicação.
     * - `provideRouter(routes)` registra as rotas definidas no `app.routes.ts`.
     * - Isso permite a navegação entre páginas no Angular.
     */
    provideRouter(routes),

    /**
     * 🔹 Ativa a hidratação do lado do cliente (usado em SSR).
     * - O SSR (Server-Side Rendering) renderiza a página no servidor antes de enviá-la ao cliente.
     * - `provideClientHydration()` permite que o Angular reutilize essa renderização no navegador.
     * - `withEventReplay()` salva eventos (como cliques e scrolls) antes da hidratação e os reaplica depois.
     * - Isso evita que interações do usuário sejam perdidas durante a transição do SSR para o cliente.
     */
    provideClientHydration(withEventReplay())
  ]
};
