export default function Page() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fbfa] justify-between group/design-root overflow-x-hidden">
      <div>
        <div className="flex items-center bg-[#f8fbfa] p-4 pb-2 justify-between">
          <div
            className="text-[#0e1a13] flex size-12 shrink-0 items-center"
            data-icon="ArrowLeft"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-[#0e1a13] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Checkout
          </h2>
        </div>
        <ResumeTotalSale />
        <ResumeSale />
        <PaymentMethod />
      </div>
      <div>
        <div className="flex px-4 py-3">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#39e079] text-[#0e1a13] text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Confirm Order</span>
          </button>
        </div>
        <div className="h-5 bg-[#f8fbfa]"></div>
      </div>
    </div>
  );
}

export const ResumeTotalSale = () => {
  return (
    <>
      <h3 className="text-[#0e1a13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Order Details
      </h3>
      <div className="flex items-center gap-4 bg-[#f8fbfa] px-4 min-h-[72px] py-2 justify-between">
        <div className="flex flex-col justify-center">
          <p className="text-[#0e1a13] text-base font-medium leading-normal line-clamp-1">
            Subtotal
          </p>
          <p className="text-[#51946b] text-sm font-normal leading-normal line-clamp-2">
            2 items
          </p>
        </div>
        <div className="shrink-0">
          <p className="text-[#0e1a13] text-base font-normal leading-normal">
            $59.98
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-[#f8fbfa] px-4 min-h-[72px] py-2 justify-between">
        <div className="flex flex-col justify-center">
          <p className="text-[#0e1a13] text-base font-medium leading-normal line-clamp-1">
            Shipping
          </p>
          <p className="text-[#51946b] text-sm font-normal leading-normal line-clamp-2">
            Standard
          </p>
        </div>
        <div className="shrink-0">
          <p className="text-[#0e1a13] text-base font-normal leading-normal">
            $5.99
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-[#f8fbfa] px-4 min-h-[72px] py-2 justify-between">
        <div className="flex flex-col justify-center">
          <p className="text-[#0e1a13] text-base font-medium leading-normal line-clamp-1">
            Total
          </p>
          <p className="text-[#51946b] text-sm font-normal leading-normal line-clamp-2">
            Estimated delivery: Jul 20 - Jul 24
          </p>
        </div>
        <div className="shrink-0">
          <p className="text-[#0e1a13] text-base font-normal leading-normal">
            $65.97
          </p>
        </div>
      </div>
    </>
  );
};

export const ResumeSale = () => {
  return (
    <>
      <h1 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
        Order #123456789
      </h1>
      <p className="text-[#0e1a13] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Thank you for your purchase! Your order has been placed and is being
        processed. You will receive an email confirmation shortly.
      </p>
    </>
  );
};

export const PaymentMethod = () => {
  return (
    <article className="block mx-auto w-full max-w-[1200px]">
      <h3 className="text-[#0e1a13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Payment Method
      </h3>
      <div className="flex flex-col gap-3 p-4">
        <label className="flex items-center gap-4 rounded-lg border border-solid border-[#d1e6d9] p-[15px] flex-row-reverse">
          <input
            type="radio"
            className="h-5 w-5 border-2 border-[#d1e6d9] bg-transparent text-transparent checked:border-[#39e079] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#39e079]"
            name="42e78496-8ac9-42b0-8400-e9903f769f95"
          />
          <div className="flex grow flex-col">
            <p className="text-[#0e1a13] text-sm font-medium leading-normal">
              Debit Card
            </p>
          </div>
        </label>
        <label className="flex items-center gap-4 rounded-lg border border-solid border-[#d1e6d9] p-[15px] flex-row-reverse">
          <input
            type="radio"
            className="h-5 w-5 border-2 border-[#d1e6d9] bg-transparent text-transparent checked:border-[#39e079] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#39e079]"
            name="42e78496-8ac9-42b0-8400-e9903f769f95"
          />
          <div className="flex grow flex-col">
            <p className="text-[#0e1a13] text-sm font-medium leading-normal">
              Cash
            </p>
          </div>
        </label>
        <label className="flex items-center gap-4 rounded-lg border border-solid border-[#d1e6d9] p-[15px] flex-row-reverse">
          <input
            type="radio"
            className="h-5 w-5 border-2 border-[#d1e6d9] bg-transparent text-transparent checked:border-[#39e079] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#39e079]"
            name="42e78496-8ac9-42b0-8400-e9903f769f95"
          />
          <div className="flex grow flex-col">
            <p className="text-[#0e1a13] text-sm font-medium leading-normal">
              Other
            </p>
          </div>
        </label>
      </div>
    </article>
  );
};
