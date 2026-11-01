import { Button, Separator } from "../ui";

function AppFooter() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-[#121212]">
      <div className="flex w-full max-w-332 flex-col gap-6 p-6 pb-18">
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">나의 학습 여정이,</h3>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">나만의 창작으로 이어지는 플랫폼</h3>
            </div>
            <div className="flex items-center gap-2">
              <Button variant={"outline"} size={"icon"} className="border-0">
                <img src="/assets/icons/youtube.svg" alt="@SNS" className="mt-0.5 h-6 w-6" />
              </Button>
              <Button variant={"outline"} size={"icon"} className="border-0">
                <img src="/assets/icons/threads.svg" alt="@SNS" className="h-5.5 w-5.5" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">이용약관</p>
            <Separator orientation="vertical" className="h-3.5!" />
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">개인정보처리방침</p>
            <Separator orientation="vertical" className="h-3.5!" />
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">클래스 론칭 문의</p>
          </div>
        </div>
        <Separator />
        <div className="flex w-full items-start justify-between">
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col">
              <p className="h-10 text-base font-semibold">고객센터</p>
              <div className="flex flex-col items-start gap-1">
                <p>평일 오전 9시 ~ 오후 6시</p>
                <p>문의: shadcn@google.com</p>
              </div>
            </div>
            <p>@ shadcn/ui Team all rights reserved</p>
          </div>
          <div className="mr-16.5 flex flex-col">
            <p className="h-10 text-base font-semibold">사업자 정보</p>
            <div className="flex flex-col items-start gap-1">
              <p>대표이사: John Doe</p>
              <p>사업자번호: 012-34-56789</p>
              <p>통신판매신고번호: 2026-미국-0123</p>
              <p>주소: Mission St #300, San Francisco, CA 94105</p>
              <p>대표번호: 012-3456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { AppFooter };
