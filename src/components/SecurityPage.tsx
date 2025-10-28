import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';

interface SecurityPageProps {
  totalValue: number;
  onContinue: () => void;
}

function SecurityPage({ totalValue, onContinue }: SecurityPageProps) {
  const handleActivate = () => {
    onContinue();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-8 relative">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header com gradiente */}
        <div className="bg-gradient-to-r from-orange-400 via-red-400 to-red-500 text-white p-8 text-center space-y-4">
          <Shield className="w-16 h-16 mx-auto" />
          <h1 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
            <span className="text-3xl">🔒</span>
            Verificação de Segurança
          </h1>
        </div>

        {/* Conteúdo principal */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-xl p-4 shadow-md">
            <p className="text-sm sm:text-base text-gray-800 font-medium text-center">
              ⚠️ <strong>Nota Importante:</strong> Os valores apresentados são meramente ilustrativos e não representam ganhos reais. Esta é apenas uma demonstração.
            </p>
          </div>

          {/* Valor em destaque */}
          <div className="text-center space-y-2">
            <p className="text-gray-700">Valor demonstrativo acumulado:</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl">💰</span>
              <p className="text-4xl md:text-5xl font-bold text-green-600">
                {totalValue.toLocaleString()} MTS
              </p>
            </div>
          </div>

          <p className="text-center text-gray-700 text-lg">
            Precisamos confirmar sua identidade antes de prosseguir.
          </p>

          {/* Explicação */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            <p className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">○</span>
              <span>
                Para garantir a segurança da sua conta, vamos realizar uma verificação de identidade simples.
              </span>
            </p>
          </div>

          {/* Box verde - Proteção */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-black text-lg mb-3">
                  Esta verificação existe para proteger sua conta contra:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Acessos não autorizados por terceiros
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Atividades automatizadas suspeitas no sistema
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Uso indevido de perfis falsos ou duplicados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Box amarelo - Importante */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-2xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-black text-lg mb-3">
                  Informações Importantes:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      A verificação é rápida e segura.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Seus dados pessoais são protegidos.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Este processo garante a autenticidade da sua conta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Próximo passo */}
          <div className="text-center space-y-4 pt-4">
            <p className="font-bold text-black text-xl flex items-center justify-center gap-2">
              <span>👇</span>
              Próximo Passo
            </p>
            <p className="text-gray-700">
              Clique no botão abaixo para completar a verificação de identidade e prosseguir.
            </p>
          </div>

          {/* Botão de ação */}
          <button
            onClick={handleActivate}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-8 rounded-2xl transition-colors text-lg shadow-lg"
          >
            Completar Verificação
          </button>
        </div>
      </div>

    </div>
  );
}

export default SecurityPage;
