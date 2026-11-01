import { AppFooter, AppHeader, AppSidebar } from "./components/common";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container">
          <main className="flex h-full min-h-180 w-full gap-6 p-6">
            {/* 카테고리 사이드바 */}
            <AppSidebar />

            {/* 토픽 콘텐츠 */}
            <section></section>
          </main>
        </div>
        <AppFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
