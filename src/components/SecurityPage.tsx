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
            Confirmação de Segurança Necessária
          </h1>
        </div>

        {/* Conteúdo principal */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Valor em destaque */}
          <div className="text-center space-y-2">
            <p className="text-gray-700">Antes de liberar o seu saque de</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl">💰</span>
              <p className="text-4xl md:text-5xl font-bold text-green-600">
                {totalValue.toLocaleString()} MTS
              </p>
            </div>
          </div>

          <p className="text-center text-gray-700 text-lg">
            precisamos confirmar que você é uma pessoa real e não um robô.
          </p>

          {/* Explicação */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            <p className="text-gray-700 flex items-start gap-2">
              <span className="text-gray-400 mt-1">○</span>
              <span>
                Para isso, o sistema exige um cadastro de segurança (M-pesa ou E-mola) com uma pequena taxa anti-fraude.
              </span>
            </p>
          </div>

          {/* Box verde - Proteção */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-black text-lg mb-3">
                  Essa verificação existe para proteger o seu dinheiro contra:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Robôs automáticos que estavam explorando o sistema
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Cadastros falsos que tentavam sacar valores indevidos
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
                  Importante:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Essa taxa NÃO é um custo.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Você recebe ela de volta junto com o valor do seu saque.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Ou seja: o que é seu, volta garantido.
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
              Próximo passo
            </p>
            <p className="text-gray-700">
              Clique no botão abaixo, ative o seu cadastro e libere agora mesmo o seu saque.
            </p>
          </div>

          {/* Botão de ação */}
          <button
            onClick={handleActivate}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-8 rounded-2xl transition-colors text-lg shadow-lg"
          >
            Ativar Cadastro e Liberar Saque
          </button>
        </div>
      </div>

    </div>
  );
}

export default SecurityPage;
