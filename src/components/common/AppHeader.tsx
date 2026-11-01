import { Separator } from "../ui";

function AppHeader() {
  return (
    <header className="fixed top-0 z-10 flex w-full items-center justify-center bg-[#121212]">
      <div className="flex w-full max-w-332 items-center justify-between px-6 py-3">
        {/* 로고 & 네비게이션 메뉴 UI */}
        <div className="flex items-center gap-5">
          <img src="/assets/rondo.png" alt="@LOGO" className="h-6 w-6 cursor-pointer" />
          <div className="flex items-center gap-5">
            <div className="font-semibold">토픽 인사이트</div>
            <Separator orientation="vertical" className="h-4!" />
            <div className="font-semibold">포트폴리오</div>
          </div>
        </div>

        {/* 로그인 UI */}
        <div className="text-muted-foreground font-semibold transition-all duration-500 hover:text-white">로그인</div>
      </div>
    </header>
  );
}

export { AppHeader };
