import { useState, useEffect } from 'react';
import { Volume2, VolumeX, AlertTriangle } from 'lucide-react';

interface VideoPageProps {
  totalValue: number;
}

function VideoPage({ totalValue }: VideoPageProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/9d93e4b2-3654-4bea-bda0-107c1328d520/players/6900f7e324bb6d6db57759eb/v4/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleUnmute = () => {
    setIsMuted(false);
    setShowOverlay(false);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
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
              <p className="text-sm text-gray-600">Saldo:</p>
              <p className="text-xl font-bold text-green-600 bg-yellow-100 px-4 py-1 rounded-full">
                MTS {totalValue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-xl p-4 shadow-md">
          <p className="text-sm sm:text-base text-gray-800 font-medium text-center">
            ⚠️ <strong>Nota Importante:</strong> Os valores apresentados são meramente ilustrativos e não representam ganhos reais. Esta é apenas uma demonstração.
          </p>
        </div>
        {/* Video Container */}
        <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="w-full aspect-video">
            <vturb-smartplayer
              id="vid-6900f7e324bb6d6db57759eb"
              style={{ display: 'block', margin: '0 auto', width: '100%' }}
            />
          </div>

        </div>

        {/* Warning Message */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 rounded-2xl p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <p className="text-xl font-bold text-black">
                Assista esse vídeo até o final para liberar o seu saque!
              </p>
              <p className="text-gray-700">
                É importante assistir o vídeo completo para continuar com o processo de saque.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-black">Informações importantes:</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Mantenha o som ativado durante o vídeo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Assista até o final para liberar o saque</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span className="text-gray-700">Não feche ou minimize a página</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3">
        <p className="text-center text-sm text-gray-600">
          © 2025 Todos os direitos reservados - Cupom da Vez
        </p>
      </div>

    </div>
  );
}

export default VideoPage;
