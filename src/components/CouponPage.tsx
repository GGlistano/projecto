import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import ScratchCard from './ScratchCard';
import CelebrationCard from './CelebrationCard';

interface CouponPageProps {
  userName: string;
  totalValue: number;
  currentCoupon: number;
  coupon: {
    id: number;
    product: string;
    value: number;
    barcode: string;
    image: string;
  };
  onNext: () => void;
}

function CouponPage({ userName, totalValue, currentCoupon, coupon, onNext }: CouponPageProps) {
  const [code, setCode] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  const [error, setError] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    setCode('');
    setIsRevealed(false);
    setError('');
    setShowCelebration(false);
  }, [currentCoupon]);

  const handleValidate = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length === 8) {
      if (code === coupon.barcode) {
        setError('');
        setShowCelebration(true);
      } else {
        setError('Código incorreto! Verifique o código na imagem.');
      }
    }
  };

  const handleContinue = () => {
    setShowCelebration(false);
    setCode('');
    onNext();
  };

  const progressDots = Array.from({ length: 6 }, (_, i) => ({
    active: i < currentCoupon,
    current: i === currentCoupon - 1
  }));

  const getProductImage = (imageName: string) => {
    const images: Record<string, string> = {
      'nike-black': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
      'nike-pink': 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&q=80',
      'jbl': 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
      'nike-white': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80',
      'airpods': 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80',
      'samsung': 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80'
    };
    return images[imageName] || images['nike-black'];
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50 relative">
      <div className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-black">cupom</span>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-black">$</span>
              </div>
              <span className="text-2xl font-bold text-gray-600">DA VEZ</span>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Olá, {userName}</p>
              <p className="text-xl font-bold text-yellow-600">{totalValue.toLocaleString()} MTS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-xl p-4 mb-6 shadow-md">
          <p className="text-sm sm:text-base text-gray-800 font-medium text-center">
            ⚠️ <strong>Nota Importante:</strong> Os valores apresentados são meramente ilustrativos e não representam ganhos reais. Esta é apenas uma demonstração.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-green-600 text-center">
            NOVO CUPOM ENCONTRADO!
          </h2>

          <div className="flex justify-center gap-2">
            {progressDots.map((dot, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-colors ${
                  dot.current
                    ? 'bg-yellow-400'
                    : dot.active
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <p className="text-center text-sm sm:text-base text-gray-700 font-medium">
            Cupom {currentCoupon} de 6
          </p>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 rounded-2xl sm:rounded-3xl p-3 sm:p-6">
              <ScratchCard
                imageUrl={getProductImage(coupon.image)}
                barcode={coupon.barcode}
                onReveal={() => setIsRevealed(true)}
              />
            </div>
          </div>

          {!isRevealed && (
            <div className="text-center space-y-2">
              <p className="text-base sm:text-lg font-bold text-gray-700">
                👆 Passe o dedo na imagem para revelar o cupom
              </p>
            </div>
          )}

          {isRevealed && (
            <>
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
                <p className="font-medium text-sm sm:text-base">Digite o código da imagem acima</p>
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
              </div>

              <form onSubmit={handleValidate} className="space-y-4 sm:space-y-6">
            <div>
              <input
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value.replace(/\D/g, '').slice(0, 8));
                  setError('');
                }}
                placeholder="Digite os 8 números"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-gray-600"
                maxLength={8}
              />
              {error && (
                <p className="text-red-600 text-sm mt-2 text-center font-semibold">{error}</p>
              )}
            </div>

            <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-base sm:text-xl">⊙</span>
              </div>
              <p className="font-semibold text-sm sm:text-base text-black">{coupon.product}</p>
            </div>

            <p className="text-center text-xl sm:text-2xl font-bold text-yellow-600">
              Valor a ganhar: {coupon.value.toLocaleString()} MTS
            </p>

            <button
              type="submit"
              disabled={code.length !== 8}
              className={`w-full py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold text-base sm:text-lg transition-colors ${
                code.length === 8
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Validar Cupão
            </button>
          </form>
            </>
          )}
        </div>
      </div>

    </div>

    {showCelebration && (
      <CelebrationCard
        value={coupon.value}
        productName={coupon.product}
        onContinue={handleContinue}
      />
    )}
    </>
  );
}

export default CouponPage;
