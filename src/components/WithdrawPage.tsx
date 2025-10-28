import { useState } from 'react';
import { Smartphone, CreditCard } from 'lucide-react';

interface WithdrawPageProps {
  totalValue: number;
  onSubmit: () => void;
}

function WithdrawPage({ totalValue, onSubmit }: WithdrawPageProps) {
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'emola'>('emola');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (phoneNumber.length !== 9) {
      return;
    }

    const prefix = phoneNumber.substring(0, 2);

    if (paymentMethod === 'emola') {
      if (prefix !== '86' && prefix !== '87') {
        alert('Número E-MOLA inválido! Deve começar com 86 ou 87.');
        return;
      }
    } else if (paymentMethod === 'mpesa') {
      if (prefix !== '84' && prefix !== '85') {
        alert('Número M-PESA inválido! Deve começar com 84 ou 85.');
        return;
      }
    }

    onSubmit();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12 relative">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-xl p-4 shadow-md mb-4">
          <p className="text-sm sm:text-base text-gray-800 font-medium text-center">
            ⚠️ <strong>Nota Importante:</strong> Os valores apresentados são meramente ilustrativos e não representam ganhos reais. Esta é apenas uma demonstração.
          </p>
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Solicitar Saque
          </h1>
          <p className="text-lg text-gray-600">
            Sistema de Pagamento Seguro
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-6 space-y-2">
          <p className="text-base text-gray-700 font-medium">
            Valor Disponível:
          </p>
          <p className="text-4xl md:text-5xl font-bold text-green-600">
            MTS {totalValue.toLocaleString()}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <label className="block text-xl font-bold text-black">
              Escolha o método de saque:
            </label>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('mpesa')}
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 transition-all ${
                  paymentMethod === 'mpesa'
                    ? 'border-gray-400 bg-gray-50'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                <Smartphone className="w-10 h-10 text-gray-700" />
                <span className="font-bold text-lg text-black">M-PESA</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('emola')}
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 transition-all ${
                  paymentMethod === 'emola'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 bg-white hover:border-blue-400'
                }`}
              >
                <Smartphone className="w-10 h-10 text-gray-700" />
                <span className="font-bold text-lg text-black">E-MOLA</span>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-xl font-bold text-black">
              {paymentMethod === 'emola' ? 'Número do E-MOLA' : 'Número do M-PESA'}
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 9))}
              placeholder={paymentMethod === 'emola' ? '86xxxxxxxx ou 87xxxxxxxx' : '84xxxxxxxx ou 85xxxxxxxx'}
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-gray-700 bg-gray-50"
              maxLength={9}
            />
            <p className="text-sm text-gray-600">
              {paymentMethod === 'emola'
                ? 'Digite o número iniciado com 86 ou 87 (9 dígitos)'
                : 'Digite o número iniciado com 84 ou 85 (9 dígitos)'
              }
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 px-8 rounded-xl transition-colors text-lg shadow-lg flex items-center justify-center gap-3"
          >
            <CreditCard className="w-6 h-6" />
            Confirmar e Sacar
          </button>
        </form>
      </div>

    </div>
  );
}

export default WithdrawPage;
