import { useRef, useEffect, useState } from 'react';

interface ScratchCardProps {
  imageUrl: string;
  barcode: string;
  onReveal: () => void;
}

function ScratchCard({ imageUrl, barcode, onReveal }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchPercentage, setScratchPercentage] = useState(0);
  const hasRevealed = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    hasRevealed.current = false;
    setScratchPercentage(0);

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, '#9CA3AF');
    gradient.addColorStop(0.5, '#D1D5DB');
    gradient.addColorStop(1, '#9CA3AF');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = '#374151';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('RASPE AQUI', rect.width / 2, rect.height / 2 - 10);

    ctx.font = '32px Arial';
    ctx.fillText('↑', rect.width / 2 - 40, rect.height / 2 + 30);
    ctx.fillText('↑', rect.width / 2, rect.height / 2 + 30);
    ctx.fillText('↑', rect.width / 2 + 40, rect.height / 2 + 30);
  }, [imageUrl, barcode]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(
      (x - rect.left) * scaleX,
      (y - rect.top) * scaleY,
      40,
      0,
      Math.PI * 2
    );
    ctx.fill();

    checkRevealPercentage();
  };

  const checkRevealPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] < 128) {
        transparentPixels++;
      }
    }

    const percentage = (transparentPixels / (pixels.length / 4)) * 100;
    setScratchPercentage(percentage);

    if (percentage > 50 && !hasRevealed.current) {
      hasRevealed.current = true;
      onReveal();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsScratching(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isScratching) {
      scratch(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsScratching(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsScratching(true);
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (isScratching) {
      const touch = e.touches[0];
      scratch(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsScratching(false);
  };

  return (
    <div className="relative select-none">
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
        <div className="relative h-48 sm:h-64 bg-gray-100">
          <img
            src={imageUrl}
            alt="Product"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4">
            <p className="text-gray-800 font-semibold text-center text-xs sm:text-sm drop-shadow-lg bg-white/80 py-1.5 sm:py-2 rounded-lg">
              DIGITE O CUPOM DE DESCONTO DESSE PRODUTO
            </p>
          </div>
        </div>
        <div className="bg-white p-3 sm:p-4">
          <div className="bg-black text-white py-2 sm:py-3 text-center font-mono text-base sm:text-xl tracking-wider">
            {barcode.match(/.{1,2}/g)?.join('-') || barcode}
          </div>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-pointer touch-none rounded-2xl"
        style={{
          opacity: scratchPercentage > 70 ? 0 : 1,
          transition: scratchPercentage > 70 ? 'opacity 0.5s ease-out' : 'none'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  );
}

export default ScratchCard;
