import { useEffect, useState } from 'react';
import { Trophy, Coins, Sparkles, ArrowRight } from 'lucide-react';

interface CelebrationCardProps {
  value: number;
  productName: string;
  onContinue: () => void;
}

function CelebrationCard({ value, productName, onContinue }: CelebrationCardProps) {
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const moneySound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiDgIF2m98OScTgwOUKbj8LRiGwY3kNbyzn4yCAAAAAA=');

    moneySound.play().catch(() => {});

    setTimeout(() => setShow(true), 100);
    setTimeout(() => setShowButton(true), 1500);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn px-4">
      <div
        className={`bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 transform transition-all duration-500 ${
          show ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
      >
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-20 h-20 text-yellow-200 animate-pulse" />
            </div>
            <Trophy className="w-24 h-24 text-yellow-600 mx-auto relative z-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              PARABÉNS! 🎉
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-gray-800">
              Cupom Validado com Sucesso!
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 space-y-3 shadow-lg">
            <div className="flex items-center justify-center gap-2">
              <Coins className="w-6 h-6 text-green-600" />
              <p className="text-gray-700 font-medium">Você ganhou:</p>
            </div>

            <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl py-4 px-6 shadow-md">
              <p className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
                {value.toLocaleString()} MTS
              </p>
            </div>

            <div className="pt-2">
              <p className="text-sm text-gray-600 font-medium">Produto:</p>
              <p className="text-base sm:text-lg font-bold text-black">{productName}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            <p className="text-black font-semibold">Valor adicionado ao saldo!</p>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          </div>

          {showButton && (
            <button
              onClick={onContinue}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 animate-fadeIn"
            >
              <span className="text-lg">Continuar</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-50px',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              💰
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-float {
          animation: float linear forwards;
        }
      `}</style>
    </div>
  );
}

export default CelebrationCard;
