interface WelcomePageProps {
  onStart: () => void;
}

function WelcomePage({ onStart }: WelcomePageProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 relative">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl md:text-5xl font-bold text-black">cupom</span>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-black">$</span>
          </div>
          <span className="text-4xl md:text-5xl font-bold text-gray-600">DA VEZ</span>
        </div>

        <div className="space-y-4 mt-12">
          <h1 className="text-2xl md:text-3xl font-semibold text-black">Bem-vindo!</h1>
          <p className="text-xl md:text-2xl text-black">
            Que tal conhecer o Cupom da Vez?
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={onStart}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-3 mx-auto transition-colors text-lg"
          >
            <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            COMEÇAR AGORA
          </button>
        </div>

        <div className="mt-12 space-y-3 text-sm text-black">
          <p className="font-semibold">Suas informações estão 100% protegidas!</p>
          <p className="text-gray-700">
            Este site é seguro e possui Certificado SSL.<br />
            Sua privacidade é totalmente garantida por nossa política de segurança.
          </p>
        </div>
      </div>

    </div>
  );
}

export default WelcomePage;
