import { ArrowDown } from 'lucide-react';

interface LimitPageProps {
  userName: string;
  totalValue: number;
  onContinue: () => void;
}

function LimitPage({ totalValue, onContinue }: LimitPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 relative">
      <div className="max-w-2xl w-full text-center space-y-6 sm:space-y-8">
        <div className="flex items-center justify-center gap-2 mb-8 sm:mb-12">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">cupom</span>
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-black">$</span>
          </div>
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600">DA VEZ</span>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-xl p-4 mb-6 shadow-md">
          <p className="text-sm sm:text-base text-gray-800 font-medium text-center">
            ⚠️ <strong>Nota Importante:</strong> Os valores apresentados são meramente ilustrativos e não representam ganhos reais. Esta é apenas uma demonstração.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Limite Diário Atingido!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Você atingiu o limite de cupões diários.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-50 border-2 border-green-300 rounded-2xl p-6 sm:p-8 space-y-4">
          <p className="text-base sm:text-lg text-gray-700 font-medium">
            Saldo Total Acumulado:
          </p>
          <div className="bg-gradient-to-r from-yellow-100 via-white to-yellow-100 rounded-xl py-3 sm:py-4 px-4 sm:px-6">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600">
              {totalValue.toLocaleString()} MTS
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-blue-600 py-4">
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
          <p className="font-medium text-base sm:text-lg">Realize o seu saque abaixo</p>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </div>

        <button
          onClick={onContinue}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-xl transition-colors text-lg sm:text-xl shadow-lg"
        >
          REALIZAR SAQUE
        </button>
      </div>

    </div>
  );
}

export default LimitPage;
