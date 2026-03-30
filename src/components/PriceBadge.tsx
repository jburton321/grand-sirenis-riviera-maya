interface PriceBadgeProps {
  days?: string;
  oldPrice?: string;
  newPrice?: string;
  ribbonText?: string;
  footerText?: string;
  width?: number;
  className?: string;
}

const BASE_SIZE = 350;

export function PriceBadge({
  days = "4-Days",
  oldPrice = "$1,079",
  newPrice = "77",
  ribbonText = "ONLY",
  footerText = "ENTIRE STAY",
  width = 220,
  className = "",
}: PriceBadgeProps) {
  const scale = width / BASE_SIZE;

  return (
    <div
      className={`flex-shrink-0 overflow-visible ${className}`}
      style={{ width: `${width}px`, height: `${width}px` }}
    >
      <div
        className="relative overflow-visible"
        style={{
          width: `${BASE_SIZE}px`,
          height: `${BASE_SIZE}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <div
          className="absolute left-[-15px] top-1/2 -translate-y-1/2 z-10 whitespace-nowrap"
          style={{
            backgroundColor: "#00c0d5",
            color: "white",
            padding: "10px 20px",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          {ribbonText}
        </div>

        <div
          className="w-full h-full rounded-full flex flex-col items-center justify-center text-white box-border"
          style={{
            backgroundColor: "#182b56",
            border: "14px solid #e9b25a",
            outline: "8px solid white",
            outlineOffset: "-22px",
          }}
        >
          <div
            className="bg-white text-black font-bold rounded-md"
            style={{
              padding: "4px 18px",
              fontSize: "22px",
              marginBottom: "5px",
            }}
          >
            {days.toUpperCase()}
          </div>

          <div
            className="line-through"
            style={{
              fontSize: "24px",
              marginBottom: "-10px",
            }}
          >
            {oldPrice}
          </div>

          <div
            className="font-black flex"
            style={{
              fontSize: "110px",
              lineHeight: 1,
            }}
          >
            <span style={{ fontSize: "40px", marginTop: "15px" }}>$</span>
            {newPrice}
          </div>

          <div
            className="font-bold uppercase"
            style={{ fontSize: "20px" }}
          >
            {footerText}
          </div>
        </div>
      </div>
    </div>
  );
}
